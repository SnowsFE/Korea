import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import data from "./Data";

const BoardList = () => {
  const itemsPerPage = 1;
  const [currentPageData, setCurrentPageData] = useState([]);

  // 초기 렌더링 시 첫 페이지 데이터 설정
  useEffect(() => {
    setCurrentPageData(data.slice(0, itemsPerPage));
  }, []);

  // 페이지 변경 시 데이터 업데이트
  const handlePageChange = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageData(data.slice(start, end));
  };

  return (
    <Section>
      {currentPageData.map((item) => (
        <li key={item.id}>{item.content}</li>
      ))}
      <Pagination
        data={data}
        pagePer={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </Section>
  );
};

export default BoardList;

const Section = styled.div`
  width: 100%;
`;
