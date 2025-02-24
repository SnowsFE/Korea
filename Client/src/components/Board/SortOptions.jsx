// 정렬 옵션 컴포넌트 : 공지사항 -
// 최신, 인기, TOP 10
// SortOptions.jsx
import React from "react";
import styled from "styled-components";

const SortOptions = ({ onSort }) => {
  return (
    <SortContainer>
      <SortButton onClick={() => onSort("latest")}>최신순</SortButton>
      <SortButton onClick={() => onSort("popular")}>인기순</SortButton>
      <SortButton onClick={() => onSort("top")}>TOP 10</SortButton>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SortButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default SortOptions;
