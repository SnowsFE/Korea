import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../../components/common/Pagination";
import noticeData from "./NoticeData";
import NoticeItem from "./NoticeItem";
import SortButtons from "./SortButtons";

const NoticesList = () => {
  const [sortedData, setSortedData] = useState([...noticeData]); // 정렬된 데이터 상태
  const [currentPageData, setCurrentPageData] = useState([]);
  const [sortType, setSortType] = useState("최신순");
  const itemsPerPage = 1;

  // 정렬 로직
  useEffect(() => {
    let newData = [...noticeData];
    if (sortType === "최신순") {
      newData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortType === "인기순") {
      newData.sort((a, b) => b.views - a.views);
    }
    setSortedData(newData);
    setCurrentPageData(newData.slice(0, itemsPerPage)); // 첫 페이지 데이터 반영
  }, [sortType]);

  // 페이지 변경 시 데이터 업데이트
  const handlePageChange = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageData(sortedData.slice(start, end)); // 정렬된 데이터를 기반으로 페이지 적용
  };

  return (
    <>
      <SortButtons sortType={sortType} setSortType={setSortType} />
      <Boards>
        {currentPageData.map((data) => (
          <NoticeItem key={data.id} data={data} />
        ))}
      </Boards>
      <Pagination
        data={sortedData}
        pagePer={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default NoticesList;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  padding: 20px;
  font-family: "Noto Sans", sans-serif;
`;
