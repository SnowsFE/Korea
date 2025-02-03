import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SortButtons = ({ sortType, setSortType }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sortParam = queryParams.get("sort");

    // sort 파라미터가 없으면 기본값으로 '최신순' 설정
    if (sortParam) {
      setSortType(sortParam);
    } else {
      setSortType("최신순"); // 기본값 설정
      navigate("?sort=최신순"); // URL에 기본값 반영
    }
  }, [setSortType, navigate]);

  const handleSortChange = (type) => {
    setSortType(type);
    navigate(`?sort=${type}`); // navigate()로 변경
  };

  return (
    <SortButtonsWrapper>
      <SortButton
        onClick={() => handleSortChange("최신순")}
        active={sortType === "최신순"}
      >
        <CheckIcon active={sortType === "최신순"}>✔</CheckIcon> 최신순
      </SortButton>
      <SortButton
        onClick={() => handleSortChange("인기순")}
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
