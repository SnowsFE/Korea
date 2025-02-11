import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const API_URL = "http://localhost:5000/api/job-info";

const JobInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const jobData = response.data?.DATA || [];
        setData(jobData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Header>
        서울특별시 취업 정보 센터
        <img src="/images/shiny.png" alt="shiny" />
      </Header>
      {loading ? (
        <LoadingMessage>데이터를 로딩 중입니다...</LoadingMessage>
      ) : data.length === 0 ? (
        <LoadingMessage>
          데이터가 없습니다. 백엔드를 활성화해주세요😊
        </LoadingMessage> // 백엔드가 없을 때 표시
      ) : (
        <JobList>
          {data.map((item, index) => (
            <JobItem key={index} href={item.site_addr} target="_blank">
              <ImageArea>
                <img src={item.site_img} alt={item.site_nm} />
              </ImageArea>

              <SiteName>{item.site_nm}</SiteName>
              <SiteLink>{item.site_addr}</SiteLink>
            </JobItem>
          ))}
        </JobList>
      )}
    </Container>
  );
};

// 스타일링
const Container = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  font-family: "Noto-B";
  text-align: center;
  color: #333;
`;

const LoadingMessage = styled.p`
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
  color: #666;
`;

const JobList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3개씩 한 줄로 배치
  gap: 20px; // 카드 간 간격 설정
  width: 100%;
  max-width: 1200px; // 최대 너비 설정
`;

const JobItem = styled.a`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  text-decoration: none; // 링크 기본 스타일 제거
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 300px; // 세로 크기 크게 설정

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageArea = styled.div`
  width: 100%;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin-bottom: 15px;

  img {
    width: 350px;
    height: 180px; // 이미지 영역 크기 설정
  }
`;

const SiteName = styled.h3`
  font-family: "Money-Graphy";
  font-weight: 300;
  font-size: 22px;
  color: #333;
  margin-bottom: 8px;
`;

const SiteLink = styled.p`
  font-family: "Noto-B";
  font-size: 16px;
  color: #ccc;
  word-wrap: break-word;
`;

export default JobInfo;
