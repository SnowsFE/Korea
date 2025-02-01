// 게시판 목록 페이지
// 보여줘야할것, 페이지네이션, 검색, 정렬, 메인 게시글데이터
import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

const BoardList = () => {
  return (
    <Section>
      <Pagination />
    </Section>
  );
};

export default BoardList;

const Section = styled.div`
  width: 100%;
`;
