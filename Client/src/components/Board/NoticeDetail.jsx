import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import noticeData from "./NoticeData";

const NoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const noticeBoards = noticeData.find((item) => item.id === parseInt(id));

  if (!noticeBoards) {
    return <NotFound>공지사항을 찾을 수 없습니다.</NotFound>;
  }

  return (
    <DetailContainer>
      <NoticeCategory>{noticeBoards.title}</NoticeCategory>
      <Content>{noticeBoards.content}</Content>
      <BackButton onClick={() => navigate(-1)}>← 목록으로 돌아가기</BackButton>
    </DetailContainer>
  );
};

// 스타일링
const DetailContainer = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const NoticeCategory = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
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

export default NoticeDetail;
