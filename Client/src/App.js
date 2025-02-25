import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Home from "./pages/Home";
import CommonLayout from "./components/common/CommonLayout/CommonLayout";
import Layout from "./components/common/Layout/Layout";
import Event from "./pages/Event/Event";
import Board from "./components/Board/Boards";
import JobApi from "./pages/JobInfo/Job";
import Test from "./pages/Test/TestInfo";
import Footer from "./components/common/Layout/Footer";
import NotFound from "./components/common/NotFound";

// React Query 클라이언트 생성
const queryClient = new QueryClient();

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "교육 정보를 한눈에 K-Edu",
      "/boards": "K-Edu 소통 공간 | 커뮤니티",
      "/notice": "K-Edu 최신 소식 | 공지사항",
      "/job": "K-Edu 채용 정보 | 취업",
      "/event": "K-Edu 특별 이벤트 | 2025",
      "/test": "교육을 한눈에 K-Edu | 테스트",
    };

    let title = pageTitles[location.pathname] || "교육 정보를 한눈에 K-Edu";

    // notice 경로에 대한 특별 처리
    if (location.pathname.startsWith("/notice/")) {
      const noticeId = location.pathname.split("/")[2]; // URL에서 ID 추출
      title = ` K-Edu 최신 소식 | ${noticeId}`;
    }

    document.title = title;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageTitleUpdater /> {/* 페이지 제목을 업데이트하는 컴포넌트 추가 */}
        <CommonLayout />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="boards/*" element={<Board />} />
            <Route path="job/*" element={<JobApi />} />
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="/event/*" element={<Event />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
