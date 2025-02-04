import React, { useState } from "react";
import styled from "styled-components";

const Pagination = ({ data, pagePer, groupSize = 5, onPageChange }) => {
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(data.length / pagePer);
  const currentGroup = Math.ceil(page / groupSize);
  const totalGroups = Math.ceil(totalPage / groupSize);

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const prevGroup = () => {
    const newPage = Math.max(1, (currentGroup - 2) * groupSize + 1);
    changePage(newPage);
  };

  const nextGroup = () => {
    const newPage = Math.min(totalPage, currentGroup * groupSize + 1);
    changePage(newPage);
  };

  return (
    <ButtonBox>
      <Buttons>
        <Prev onClick={prevGroup} disabled={currentGroup === 1}>
          <img src="/images/LeftArrow.png" alt="LeftArrow" />
        </Prev>
        <Button>
          {Array.from({
            length: Math.min(
              groupSize,
              totalPage - (currentGroup - 1) * groupSize
            ),
          }).map((_, index) => {
            const pageNumber = (currentGroup - 1) * groupSize + index + 1;
            return (
              <InnerButton
                key={pageNumber}
                onClick={() => changePage(pageNumber)}
                active={page === pageNumber}
              >
                {pageNumber}
              </InnerButton>
            );
          })}
        </Button>
        <Next onClick={nextGroup} disabled={currentGroup === totalGroups}>
          <img src="/images/RightArrow.png" alt="RightArrow" />
        </Next>
      </Buttons>
    </ButtonBox>
  );
};

export default Pagination;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  img {
    opacity: 0.7;
    width: 12px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

const Prev = styled.button`
  padding: 8px 12px;
  border-radius: 50%;
  border: none;
  background-color: #e0e0e0;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = styled.div`
  display: flex;
  gap: 8px;
`;

const InnerButton = styled.button`
  padding: 10px 14px;
  border-radius: 12px;
  border: none;
  background-color: ${(props) => (props.active ? "#16be78" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  cursor: pointer;
`;

const Next = styled.button`
  padding: 8px 12px;
  border-radius: 50%;
  border: none;
  background-color: #e0e0e0;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
