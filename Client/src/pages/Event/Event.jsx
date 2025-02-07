import { Routes, Route } from "react-router-dom";
import EventList from "./EventList";
// import EventDetail from "./EventDetail";

function Event() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
      {/* <Route path="/:id" element={<EventDetail />} /> */}
    </Routes>
  );
}

export default Event;
