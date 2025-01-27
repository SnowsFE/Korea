import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoardList from "./components/Board/BoardList";
import PostDetail from "./components/Board/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/:boardsId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
