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
    const newPage = Math.max(1, (currentGroup - 1) * groupSize);
    changePage(newPage);
  };

  const nextGroup = () => {
    const newPage = Math.min(totalPage, currentGroup * groupSize + 1);
    changePage(newPage);
  };

  return (
    <ButtonBox>
      <Buttons>
        <Prev onClick={prevGroup} disabled={currentGroup === 1} />
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
                $active={page === pageNumber} // 속성 이름 변경
              >
                {pageNumber}
              </InnerButton>
            );
          })}
        </Button>
        <Next onClick={nextGroup} disabled={currentGroup === totalGroups} />
      </Buttons>
    </ButtonBox>
  );
};

export default Pagination;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Prev = styled.button`
  font-family: "Noto-SB";
  padding: 0 5px;
  border-radius: 3px;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #e1e1e1;
  background-color: #ffffff;
  background: url(/images/btn_prev.gif) no-repeat center #fff;
  font-size: 12px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = styled.div`
  display: flex;
  gap: 8px;
`;

const InnerButton = styled.button`
  font-family: "Noto-SB";
  padding: 0 5px;
  font-size: 12px;
  border-radius: 3px;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  border: none;
  background-color: ${(props) =>
    props.$active ? "var(--dark)" : "#f2f2f2"}; // props.$active로 변경
  color: ${(props) =>
    props.$active ? "#ffffff" : "var(--gray)"}; // props.$active로 변경
  cursor: pointer;
`;

const Next = styled.button`
  font-family: "Noto-SB";
  padding: 0 5px;
  border-radius: 3px;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #e1e1e1;
  background-color: #ffffff;
  background: url(/images/btn_next.gif) no-repeat center #fff;
  font-size: 12px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
