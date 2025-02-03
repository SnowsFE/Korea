// 게시글 상세 페이지
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Data from "./Data";

const BoardsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 게시글 데이터 찾기
  const Boards = Data.find((item) => item.id === parseInt(id));

  if (!Boards) {
    return <NotFound>게시글을 찾을 수 없습니다?</NotFound>;
  }

  return (
    <DetailContainer>
      <Category>{Boards.category}</Category>
      <Title>{Boards.title}</Title>
      <Author>작성자: {Boards.author}</Author>
      <Content>{Boards.content}</Content>
      <BackButton onClick={() => navigate(-1)}>← 목록으로 돌아가기</BackButton>
    </DetailContainer>
  );
};

export default BoardsDetail;

// 스타일링 개선
const DetailContainer = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Category = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #007aff;
  background: #eaf4ff;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 16px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
`;

const Author = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  background: #16be78;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #13a067;
  }
`;

const NotFound = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
  color: #d9534f;
  font-weight: bold;
`;
