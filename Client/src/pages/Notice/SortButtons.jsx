import React from "react";
import styled from "styled-components";

const SortButtons = ({ sortType, setSortType }) => {
  return (
    <SortButtonsWrapper>
      <SortButton
        onClick={() => setSortType("최신순")}
        active={sortType === "최신순"}
      >
        <CheckIcon active={sortType === "최신순"}>✔</CheckIcon> 최신순
      </SortButton>
      <SortButton
        onClick={() => setSortType("인기순")}
        active={sortType === "인기순"}
      >
        <CheckIcon active={sortType === "인기순"}>✔</CheckIcon> 인기순
      </SortButton>
    </SortButtonsWrapper>
  );
};

export default SortButtons;

const SortButtonsWrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;

const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.active ? "#16be78" : "#333")};
  display: flex;
  gap: 6px;
`;

const CheckIcon = styled.span`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  color: #16be78;
`;
