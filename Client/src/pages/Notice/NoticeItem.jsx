import React from "react";
import styled from "styled-components";

const NoticeItem = ({ data }) => {
  return (
    <NoticeBox>
      <NoticeImage>
        <img src={data.image} alt="공지사항 이미지" />
      </NoticeImage>
      <NoticeTitle>{data.title}</NoticeTitle>
      <NoticeContent>{data.content}</NoticeContent>
      <Footer>
        <span>{data.date}</span>
        <span>{data.views}회</span>
      </Footer>
    </NoticeBox>
  );
};

export default NoticeItem;

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

const NoticeImage = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NoticeTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 6px 0;
  color: #333;
`;

const NoticeContent = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  max-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  border-top: 1px solid #eee;
  padding-top: 8px;
`;
