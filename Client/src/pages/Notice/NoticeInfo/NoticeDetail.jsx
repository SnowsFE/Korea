import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import noticeData from "./NoticeData";
import styled from "styled-components";

const NoticesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 게시글 데이터 찾기
  const Notice = noticeData.find((item) => item.id === parseInt(id));

  if (!Notice) {
    return <NoDataMessage>게시글을 찾을 수 없습니다.</NoDataMessage>; // 게시글이 없는 경우 메시지 표시
  }

  return (
    <Section>
      <DarkBackground />
      <Content>
        <TopBar>
          <BackButton onClick={() => navigate(-1)}>
            <img src="/images/svgs/LeftArrow.svg" alt="LeftArrow" /> 공지사항
          </BackButton>
          <Info>
            <Views>
              <img src="/images/svgs/Views.svg" alt="LeftArrow" />
              {Notice.views}
            </Views>
          </Info>
        </TopBar>
        <Title>{Notice.title}</Title>
        <Image src={Notice.image} alt={Notice.title} />
        <PostContent>{Notice.content}</PostContent>
      </Content>
    </Section>
  );
};

export default NoticesDetail;

const Section = styled.section`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 12px;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
  font-family: "Noto Sans", sans-serif;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #16be78;
  font-size: 16px;
  font-family: "Noto-SB";
  cursor: pointer;

  img {
    margin-top: 2px;
  }

  &:hover {
    transition: ease-in-out 0.2s;
    color: #14a768;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 간격 조정 */
`;

const Views = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #888;

  img {
    margin-top: 1px;
    opacity: 0.4;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 35px auto 25px;
  display: block;
  border-radius: 8px;
`;

const PostContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
  color: #555;
`;

const NoDataMessage = styled.div`
  padding: 40px 0 5px 0;
  text-align: center;
  font-size: 20px;
  color: #16be78;
`;
