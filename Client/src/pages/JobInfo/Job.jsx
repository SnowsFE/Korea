import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

// API URL 설정
const API_URL = "http://localhost:5000/api/job-info";

// 데이터 가져오는 함수
const fetchJobs = async () => {
  const response = await axios.get(API_URL);
  return response.data?.DATA || [];
};

// JobInfo 컴포넌트
const JobInfo = () => {
  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobInfo"], // 쿼리 키
    queryFn: fetchJobs, // 쿼리 함수
    refetchInterval: 5000, // 5초마다 데이터 갱신
    staleTime: 30000, // 30초 동안은 새로고침하지 않음
    cacheTime: 60000, // 1분 동안 캐시된 데이터 유지
    refetchOnWindowFocus: true, // 윈도우 포커스를 받을 때마다 데이터 갱신
    refetchOnReconnect: true, // 네트워크 연결이 복구될 때마다 데이터 갱신
  });

  if (isLoading)
    return <LoadingMessage>데이터를 로딩 중입니다...</LoadingMessage>;

  if (error)
    return <LoadingMessage>데이터를 불러오는데 실패했습니다.</LoadingMessage>;

  if (!jobs || jobs.length === 0)
    return (
      <LoadingMessage>
        데이터가 없습니다. 백엔드를 활성화해주세요😊
      </LoadingMessage>
    );

  return (
    <Container>
      <Header>
        서울특별시 취업 정보 센터
        <img src="/images/shiny.png" alt="shiny" />
      </Header>
      <JobList>
        {jobs.map((item, index) => (
          <JobItem key={index} href={item.site_addr} target="_blank">
            <ImageArea>
              <img src={item.site_img} alt={item.site_nm} />
            </ImageArea>
            <SiteName>{item.site_nm}</SiteName>
            <SiteLink>{item.site_addr}</SiteLink>
          </JobItem>
        ))}
      </JobList>
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
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 32px;
  margin-bottom: 10px;
  font-family: "Noto-B";
  text-align: center;
  color: #333;

  img {
    transform: translateY(-23%);
  }
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const JobItem = styled.a`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 300px;
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
    height: 180px;
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
