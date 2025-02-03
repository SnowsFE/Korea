import { Routes, Route } from "react-router-dom";
import BoardList from "./BoardsList";
import PostDetail from "./BoardsDetail";

function Board() {
  return (
    <Routes>
      <Route path="/" element={<BoardList />} />
      <Route path=":id" element={<PostDetail />} />
    </Routes>
  );
}

export default Board;
