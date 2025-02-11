import { useEffect, useState } from "react";
import axios from "axios";

const TestInfo = () => {
  const [jobInfo, setJobInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 백엔드 API 경로로 요청
    axios
      .get("/c/67ab0a03-cf80-8000-bddf-71eac1cb8588")
      .then((response) => {
        setJobInfo(response.data); // 받은 데이터를 상태에 저장
      })
      .catch((err) => {
        setError("데이터를 불러오는 데 실패했습니다.");
        console.error(err);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  if (error) {
    return <div>{error}</div>;
  }

  if (!jobInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>취업 정보</h1>
      <pre>{JSON.stringify(jobInfo, null, 2)}</pre>
    </div>
  );
};

export default TestInfo;
