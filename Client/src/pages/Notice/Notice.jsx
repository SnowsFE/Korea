import { Routes, Route } from "react-router-dom";
import NoticesList from "./NoticeList";
import NoticesDetail from "./NoticeDetail";

function Notice() {
  return (
    <Routes>
      <Route path="/" element={<NoticesList />} />
      <Route path="/:id" element={<NoticesDetail />} />
    </Routes>
  );
}

export default Notice;
