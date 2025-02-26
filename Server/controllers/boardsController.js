// 백엔드 개선 코드 (pre-sorting 캐싱 적용)
const data = require("../models/boards");

// 서버 시작 시 미리 정렬된 데이터 캐싱
const preSortedData = {
  latest: [...data].sort((a, b) => new Date(b.date) - new Date(a.date)),
  popular: [...data].sort((a, b) => b.likes - a.likes),
  top: [...data].sort((a, b) => b.views - a.views),
};

const boardsData = (req, res) => {
  try {
    const { page, pageSize, sortType } = req.query;
    const currentPage = parseInt(page) || 1;
    const itemsPerPage = parseInt(pageSize) || 10;

    // 캐시된 정렬 데이터 사용
    const sortedData = preSortedData[sortType] || preSortedData.latest;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = sortedData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    res.status(200).json({
      total: sortedData.length, // 실제 정렬된 데이터 길이 반환
      page: currentPage,
      pageSize: itemsPerPage,
      posts: paginatedData,
    });
  } catch (error) {
    res.status(500).json({ message: "데이터 조회 실패" });
  }
};

// 인기 게시글도 캐싱 적용
const topPosts = [...data].sort((a, b) => b.likes - a.likes).slice(0, 3);
const boardsTop = (req, res) => {
  try {
    res.status(200).json(topPosts);
  } catch (error) {
    res.status(500).json({ message: "데이터 조회 실패" });
  }
};

const boardsDetail = (req, res) => {
  try {
    const { id } = req.params;
    const board = data.find((item) => item.id === parseInt(id));

    if (!board) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ message: "데이터 조회 실패" });
  }
};

module.exports = {
  boardsData,
  boardsDetail,
  boardsTop,
};
