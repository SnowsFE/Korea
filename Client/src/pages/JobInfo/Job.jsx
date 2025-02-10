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
        const jobData = response.data?.TnNetworkLstOpen?.row || [];
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
            <JobItem key={index}>
              <SiteName>{item.SITE_NM[0]}</SiteName>
              <SiteLink href={item.SITE_ADDR[0]} target="_blank">
                {item.SITE_ADDR[0]}
              </SiteLink>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const JobItem = styled.div`
  background-color: white;
  margin: 10px 0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 600px;
  width: 90%;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SiteName = styled.h3`
  font-size: 22px;
  color: #007bff;
  margin-bottom: 8px;
`;

const SiteLink = styled.a`
  display: block;
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
  word-wrap: break-word;

  &:hover {
    text-decoration: underline;
  }
`;

export default JobInfo;
