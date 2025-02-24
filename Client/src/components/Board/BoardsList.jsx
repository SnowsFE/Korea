import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../common/Pagination";
import data from "./Data";

const BoardList = () => {
  const itemsPerPage = 10; // 한 페이지당 보여줄 아이템 수 증가
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    setCurrentPageData(data.slice(0, itemsPerPage));
  }, []);

  const handlePageChange = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageData(data.slice(start, end));
  };

  return (
    <BoardContainer>
      <BoardTable>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.date}</td>
              <td>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </BoardTable>
      <Pagination
        data={data}
        pagePer={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

export default BoardList;
