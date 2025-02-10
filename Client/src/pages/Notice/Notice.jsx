import { Routes, Route } from "react-router-dom";
import NoticesList from "./NoticeInfo/NoticeList";
import NoticesDetail from "./NoticeInfo/NoticeDetail";

function Notice() {
  return (
    <Routes>
      <Route path="/" element={<NoticesList />} />
      <Route path="/:id" element={<NoticesDetail />} />
    </Routes>
  );
}

export default Notice;
