import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CommonLayout from "./components/common/Layout/CommonLayout";
import Layout from "./components/common/Layout/Layout";
import Notice from "./pages/Notice/Notice";
import Event from "./pages/Event/Event";
import Board from "./components/Board/Boards";
import JobApi from "./pages/JobInfo/Job";
import Test from "./pages/Test/TestInfo";

function App() {
  return (
    <Router>
      <CommonLayout />
      <Routes>
        <Route element={<Layout />}>
          {/* Layout을 공통으로 적용 */}
          <Route path="/" element={<Home />} />
          <Route path="boards/*" element={<Board />} />
          <Route path="notice/*" element={<Notice />} />
          <Route path="job/*" element={<JobApi />} />
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="/event/*" element={<Event />} />
        {/* Layout 없이 개별 렌더링 */}
      </Routes>
    </Router>
  );
}

export default App;
