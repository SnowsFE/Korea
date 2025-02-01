// 페이지네이션
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Data from "./Data";

const Pagination = ({ pagePer = 10, groupPer = 5 }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [group, setGroup] = useState(1);
  const totalPage = Math.ceil(Data.length / pagePer);

  const changePage = (newPage) => {
    if (newPage !== page && newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
    }
  };

  const prevBut = () => {
    setGroup(group - 1);
    setPage((group - 2) * groupPer + 1);
  };

  const nextBut = () => {
    setGroup(group + 1);
    setPage(group * groupPer + 1);
  };

  const startPage = (group - 1) * groupPer + 1;
  const endPage = Math.min(startPage * groupPer - 1, totalPage);

  return (
    <ButtonBox>
      <Boards>
        {Data.slice((page - 1) * pagePer, page * pagePer).map((item) => (
          <PostItem
            key={item.id}
            onClick={() => navigate(`/boards/${item.id}`)}
          >
            {item.title}
          </PostItem>
        ))}
      </Boards>
      <Buttons>
        <Prev onClick={prevBut} disabled={group === 1}>
          ◀
        </Prev>
        <Button>
          {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
            <InnerButton
              key={index}
              onClick={() => changePage(startPage + index)}
              active={page === startPage + index}
            >
              {startPage + index}
            </InnerButton>
          ))}
        </Button>
        <Next onClick={nextBut} disabled={group * groupPer >= totalPage}>
          ▶
        </Next>
      </Buttons>
    </ButtonBox>
  );
};

export default Pagination;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

const Boards = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
`;

const PostItem = styled.li`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #f0f0f0;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
`;

const Prev = styled.button`
  padding: 10px 14px;
  border-radius: 50%;
  border: none;
  background-color: #e0e0e0;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #d6d6d6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const InnerButton = styled.button`
  padding: 10px 14px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "#16be78" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  cursor: pointer;
  transition: background 0.2s ease-in-out, transform 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? "#13a067" : "#e0e0e0")};
    transform: scale(1.05);
  }
`;

const Next = styled.button`
  padding: 10px 14px;
  border-radius: 50%;
  border: none;
  background-color: #e0e0e0;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #d6d6d6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
