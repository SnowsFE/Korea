import { Routes, Route } from "react-router-dom";
import BoardList from "./BoardsList";
import BoardsDetail from "./BoardsDetail";
import NoticeDetail from "./NoticeDetail";

function Board() {
  return (
    <Routes>
      <Route path="/" element={<BoardList />} />
      <Route path=":id" element={<BoardsDetail />} />
      <Route path="/notice/:id" element={<NoticeDetail />} />
    </Routes>
  );
}

export default Board;
