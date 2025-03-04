import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../common/Pagination";
import SortOptions from "./SortOptions";
import noticeData from "./NoticeData";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const BoardList = () => {
  const nav = useNavigate();
  const [currentSort, setCurrentSort] = useState("latest");
  const pagePer = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
    setCurrentPage(1);
  };

  // 글쓰기 페이지로 이동하는 함수
  const handleWriteClick = () => {
    nav("/boards/write");
  };

  // 🚀 개선된 데이터 조회 (자동 재검색)
  const { isLoading, error, data } = useQuery({
    queryKey: ["boardsData", currentPage, currentSort],
    queryFn: async () => {
      const response = await fetch(
        `/boards/data?page=${currentPage}&pageSize=${pagePer}&sortType=${currentSort}`
      );
      if (!response.ok) throw new Error("데이터 조회 실패");
      return response.json();
    },
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
    cacheTime: 1000 * 60 * 60 * 24, // 24시간 캐싱
    select: (res) => ({
      posts: res.posts,
      total: res.total,
    }),
    onError: (error) => {
      queryClient.invalidateQueries("boardsData");
    },
  });

  // 인기 게시글 조회 (캐싱 최적화)
  const { data: topData, isLoading: topLoading } = useQuery({
    queryKey: ["topPosts"],
    queryFn: async () => {
      const response = await fetch("/boards/top");
      if (!response.ok) throw new Error("인기 게시글 조회 실패");
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
    refetchInterval: 1000 * 60 * 5, // 5분 주기 재검색
    refetchOnWindowFocus: true, // 화면 포커스 시 재검색
    refetchOnMount: false, // 컴포넌트 마운트 시 초기화 방지

    onError: (error) => {
      queryClient.invalidateQueries("topPosts");
    },
  });

  if (isLoading || topLoading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error.message}</Error>;

  return (
    <BoardContainer>
      <HeaderSection>
        <Title>🔥 자유로운 소통의 커뮤니티</Title>
        <SortOptions
          currentSort={currentSort}
          onSortChange={handleSortChange}
        />
      </HeaderSection>

      <ContentWrapper>
        <LeftSection>
          <PopularPostsGrid>
            {topData?.map((item) => (
              <PopularPostItem
                key={item.id}
                onClick={() => nav(`/boards/${item.id}`)}
              >
                <PostCategory>{item.category}</PostCategory>
                <PostTitle>{item.title}</PostTitle>
                <PostImage src={item.image} alt={item.title} />
                <PostLikes>좋아요 {item.likes}</PostLikes>
              </PopularPostItem>
            ))}
          </PopularPostsGrid>
        </LeftSection>

        <RightSection>
          <TopRightSection>
            <NoticeSection>
              {noticeData.map((item) => (
                <NoticeBox
                  key={item.id}
                  onClick={() => nav(`/boards/notice/${item.id}`)}
                >
                  <NoticeIcon src="/images/speaker.png" />
                  <NoticeTitle>{item.title}</NoticeTitle>
                </NoticeBox>
              ))}
            </NoticeSection>

            <WriteButtonContainer>
              <WriteButton onClick={handleWriteClick}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75 1.84-1.83zM3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"
                    fill="white"
                  />
                </svg>
                <span>글쓰기</span>
              </WriteButton>
            </WriteButtonContainer>
          </TopRightSection>

          <BoardListContainer>
            <BoardHeader>
              <HeaderCell className="title">제목</HeaderCell>
              <HeaderCell>작성자</HeaderCell>
              <HeaderCell>작성일</HeaderCell>
              <HeaderCell>조회수</HeaderCell>
              <HeaderCell>좋아요</HeaderCell>
            </BoardHeader>

            {data?.posts?.map((item) => (
              <BoardItem
                key={item.id}
                onClick={() => nav(`/boards/${item.id}`)}
              >
                <TitleContainer>
                  <Category>{item.category}</Category>
                  <TitleText>{item.title}</TitleText>
                </TitleContainer>
                <Author>{item.author}</Author>
                <PostDate>{item.date || "날짜 없음"}</PostDate>
                <Views>{item.views}</Views>
                <Likes>{item.likes}</Likes>
              </BoardItem>
            ))}
          </BoardListContainer>
          <PaginationSection>
            <Pagination
              data={Array.from({ length: data?.total || 0 })}
              pagePer={pagePer}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </PaginationSection>
        </RightSection>
      </ContentWrapper>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "esamanru-M";
  color: #333;
  padding: 1rem;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-family: "esamanru-B";
  font-size: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const LeftSection = styled.div`
  width: 317px;
  gap: 20px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 5px;
`;

const PopularPostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PopularPostItem = styled.div`
  position: relative;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  transition: transform 0.2s ease;
  flex-grow: 1;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const PostCategory = styled.span`
  background: #16be78;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;

  &::after {
    content: "🔥";
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }
`;

const PostTitle = styled.div`
  font-family: "esamanru-B";
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 4px 0;
`;

const PostLikes = styled.span`
  font-size: 12px;
  color: #666;
`;

const TopRightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const NoticeSection = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  font-family: "esamanru-B";
`;

const NoticeBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const NoticeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const NoticeTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  flex-grow: 1;
`;

const WriteButtonContainer = styled.div`
  margin-left: 15px;
`;

const WriteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #16be78;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-family: "esamanru-M";
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(22, 190, 120, 0.3);

  &:hover {
    background-color: #14a86c;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(22, 190, 120, 0.4);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const RightSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BoardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

/* CSS Grid로 헤더와 항목의 컬럼 너비를 고정 */
const BoardHeader = styled.div`
  display: grid;
  grid-template-columns: 50% 15% 15% 10% 10%;
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  font-family: "esamanru-B";
  color: var(--dark);
`;

const HeaderCell = styled.div`
  font-size: 14px;

  &.title {
    text-align: left; // 제목 셀만 왼쪽 정렬
    margin-left: 5px;
  }
`;

const BoardItem = styled.div`
  display: grid;
  grid-template-columns: 50% 15% 15% 10% 10%;
  padding: 1.1rem 0.5rem;
  border-bottom: 1px solid #ddd;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Category = styled.span`
  flex-shrink: 0;
  background: #16be78;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
`;

const TitleText = styled.span`
  flex-grow: 1;
  text-align: left;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Author = styled.span`
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PostDate = styled.span`
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Views = styled.span`
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Likes = styled.span`
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PaginationSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

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

export default BoardList;
