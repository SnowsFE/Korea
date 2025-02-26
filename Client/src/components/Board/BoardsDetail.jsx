import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

const BoardsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // React Query를 사용하여 데이터 가져오기
  const { isLoading, error, data } = useQuery({
    queryKey: ["boardDetail", id],
    queryFn: async () => {
      const response = await fetch(`/boards/${id}`);
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      return response.json();
    },
  });

  if (isLoading) return <Loading>Loading...</Loading>;
  if (error) return <Error>에러가 발생했습니다: {error.message}</Error>;

  if (!data) {
    return <NotFound>게시글을 찾을 수 없습니다.</NotFound>;
  }

  return (
    <DetailContainer>
      <Category>{data.category}</Category>
      <Title>{data.title}</Title>
      <Author>작성자: {data.author}</Author>
      <Content>{data.content}</Content>
      <BackButton onClick={() => navigate(-1)}>← 목록으로 돌아가기</BackButton>
    </DetailContainer>
  );
};

const Loading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #888;
`;

const Error = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: red;
`;

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

export default BoardsDetail;
