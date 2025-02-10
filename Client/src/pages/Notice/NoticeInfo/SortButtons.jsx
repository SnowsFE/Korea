import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SortButtons = ({ sortType, setSortType }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sortParam = queryParams.get("sort");

    if (sortParam) {
      setSortType(sortParam);
    } else {
      setSortType("최신순");
      navigate("?sort=최신순");
    }
  }, [setSortType, navigate]);

  const handleSortChange = (type) => {
    setSortType(type);
    navigate(`?sort=${type}`);
  };

  return (
    <SortButtonsWrapper>
      <SortButton
        onClick={() => handleSortChange("최신순")}
        active={sortType === "최신순"}
      >
        <CheckIcon active={sortType === "최신순"}>✔</CheckIcon> 최신순
      </SortButton>
      <SortSeparator active={sortType === "최신순"} />
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
  margin: 40px 0 0 20px;
`;

const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: "Noto-B";
  color: ${(props) => (props.active ? "#16be78" : "#333")};
  display: flex;
  gap: 6px;
  margin-right: ${(props) => (props.active ? "0" : "5px")};
`;

const SortSeparator = styled.div`
  width: 1px;
  height: 10px;
  background: #c4c4c4;
  align-self: center;
  margin: ${(props) => (props.active ? "1px -8px 0 10px" : "1px 8px 0 5px")};
`;

const CheckIcon = styled.span`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  color: #16be78;
`;
