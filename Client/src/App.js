import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderLayout from "./components/common/HeaderLayout";
import Notice from "./pages/Notice/Notice";
import Event from "./pages/Event/Event";
import Board from "./components/Board/Boards";
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <HeaderLayout />
      <Routes>
        <Route element={<Layout />}>
          {/* Layout을 공통으로 적용 */}
          <Route path="/" element={<Home />} />
          <Route path="boards/*" element={<Board />} />
          <Route path="notice/*" element={<Notice />} />
        </Route>
        <Route path="/event/*" element={<Event />} />{" "}
        {/* Layout 없이 개별 렌더링 */}
      </Routes>
    </Router>
  );
}

export default App;
