import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../common/Pagination";
import SortOptions from "./SortOptions";
import data from "./Data";
import noticeData from "./NoticeData";

const BoardList = () => {
  const [currentSort, setCurrentSort] = useState("latest");
  const pagePer = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
  };

  useEffect(() => {
    let sortedData = [...data];

    switch (currentSort) {
      case "latest":
        sortedData.sort(
          (a, b) =>
            new Date(b.date || "2000-01-01") - new Date(a.date || "2000-01-01")
        );
        break;
      case "popular":
        sortedData.sort((a, b) => b.likes - a.likes);
        break;
      case "top":
        sortedData.sort((a, b) => b.views - a.views);
        break;
      default:
        sortedData = data;
    }

    const startIndex = (currentPage - 1) * pagePer;
    const endIndex = startIndex + pagePer;
    setCurrentData(sortedData.slice(startIndex, endIndex));

    const topPopularPosts = [...data]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3);
    setPopularPosts(topPopularPosts);
  }, [currentPage, currentSort]);

  return (
    <BoardContainer>
      <HeaderSection>
        <Title>🔥 자유롭게! 솔직하게! 편하게!</Title>
        <SortOptions
          currentSort={currentSort}
          onSortChange={handleSortChange}
        />
      </HeaderSection>

      <ContentWrapper>
        <LeftSection>
          <PopularPostsGrid>
            {popularPosts.map((item) => (
              <PopularPostItem key={item.id}>
                <PostCategory>{item.category}</PostCategory>
                <PostTitle>{item.title}</PostTitle>
                <PostImage src={item.image} alt={item.title} />
                <PostLikes>좋아요 {item.likes}</PostLikes>
              </PopularPostItem>
            ))}
          </PopularPostsGrid>
        </LeftSection>

        <RightSection>
          <NoticeSection>
            {noticeData.map((item) => (
              <NoticeBox key={item.id}>
                <NoticeIcon src="/images/speaker.png" />
                <NoticeTitle>{item.title}</NoticeTitle>
              </NoticeBox>
            ))}
          </NoticeSection>

          <BoardListContainer>
            {/* CSS Grid로 헤더를 구성 */}
            <BoardHeader>
              <HeaderCell className="title">제목</HeaderCell>
              <HeaderCell>작성자</HeaderCell>
              <HeaderCell>작성일</HeaderCell>
              <HeaderCell>조회수</HeaderCell>
              <HeaderCell>좋아요</HeaderCell>
            </BoardHeader>

            {currentData.map((item) => (
              <BoardItem key={item.id}>
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
          <Pagination
            data={data}
            pagePer={pagePer}
            onPageChange={handlePageChange}
          />
        </RightSection>
      </ContentWrapper>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "esamanru-B";
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
  font-size: 24px;
  font-weight: bold;
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
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 4px 0;
`;

const PostLikes = styled.span`
  font-size: 12px;
  color: #666;
`;

const NoticeSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const NoticeBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
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
  font-weight: bold;
  border-radius: 8px;
  align-items: center;
  text-align: center;
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

export default BoardList;
