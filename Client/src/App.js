import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/common/Layout";
import Notice from "./pages/Notice/Notice";
import Event from "./pages/Event/Event";
import Board from "./components/Board/Boards";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="boards/*" element={<Board />} />
        <Route path="/notice/*" element={<Notice />} />
        <Route path="/event/*" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
