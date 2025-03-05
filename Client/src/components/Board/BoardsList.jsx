import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Pagination from "../common/Pagination";
import SortOptions from "./SortOptions";
import noticeData from "./NoticeData";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// 데이터 페칭 함수 분리
const fetchBoardData = async (currentPage, pagePer, currentSort) => {
  const response = await fetch(
    `/boards/data?page=${currentPage}&pageSize=${pagePer}&sortType=${currentSort}`
  );
  if (!response.ok) throw new Error("데이터 조회 실패");
  return response.json();
};

const fetchTopPosts = async () => {
  const response = await fetch("/boards/top");
  if (!response.ok) throw new Error("인기 게시글 조회 실패");
  return response.json();
};

const BoardList = () => {
  const nav = useNavigate();
  const [currentSort, setCurrentSort] = useState("latest");
  const pagePer = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  // 데이터 페칭 훅 통합
  const useBoardData = (page, sort) => {
    return useQuery({
      queryKey: ["boardsData", page, sort],
      queryFn: () => fetchBoardData(page, pagePer, sort),
      keepPreviousData: true,
      staleTime: 1000 * 60 * 5, // 5분 캐시
      cacheTime: 1000 * 60 * 60 * 24, // 24시간 캐싱
      select: (res) => ({
        posts: res.posts,
        total: res.total,
      }),
      onError: (error) => {
        console.error("게시판 데이터 로드 실패", error);
        // 에러 시 쿼리 무효화
        queryClient.invalidateQueries(["boardsData"]);
      },
      // 페이지네이션을 위한 프리페칭
      onSuccess: () => {
        // 다음 페이지 프리페칭
        queryClient.prefetchQuery(
          ["boardsData", currentPage + 1, currentSort],
          () => fetchBoardData(currentPage + 1, pagePer, currentSort)
        );
      },
      retry: 2, // 실패 시 2번 재시도
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
  };

  // 인기 게시글 훅
  const useTopPosts = () => {
    return useQuery({
      queryKey: ["topPosts"],
      queryFn: fetchTopPosts,
      staleTime: 1000 * 60 * 5, // 5분 캐시
      refetchInterval: 1000 * 60 * 5, // 5분마다 재검색
      refetchOnWindowFocus: false, // 윈도우 포커스 시 재검색 방지
      retry: 1, // 실패 시 1번 재시도
      onError: (error) => {
        console.error("인기 게시글 로드 실패", error);
        queryClient.invalidateQueries(["topPosts"]);
      },
    });
  };

  // 페이지 및 정렬 변경 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
    setCurrentPage(1);
  };

  // 글쓰기 페이지 이동
  const handleWriteClick = () => {
    nav("/boards/write");
  };

  // 데이터 쿼리
  const {
    isLoading: isBoardLoading,
    error: boardError,
    data: boardData,
  } = useBoardData(currentPage, currentSort);

  const {
    isLoading: isTopLoading,
    error: topError,
    data: topData,
  } = useTopPosts();

  // 로딩 및 에러 상태 처리
  if (isBoardLoading || isTopLoading) {
    return <Loading>로딩 중...</Loading>;
  }

  if (boardError) {
    return <Error>게시판 데이터 로드 중 오류: {boardError.message}</Error>;
  }

  if (topError) {
    return <Error>인기 게시글 로드 중 오류: {topError.message}</Error>;
  }

  return (
    <BoardContainer>
      <HeaderSection>
        <Title>🔥 와글와글 광장</Title>
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

            {boardData?.posts?.map((item) => (
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
              data={Array.from({ length: boardData?.total || 0 })}
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

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
`;

const Title = styled.h1`
  font-family: "esamanru-B";
  font-size: 24px;
  animation: ${bounce} 3s ease infinite;
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
  color: var(--textColor);
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-family: "esamanru-B";
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
