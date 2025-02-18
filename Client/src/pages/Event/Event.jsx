import { Routes, Route } from "react-router-dom";
import EventList from "./EventElements/EventList";

function Event() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
    </Routes>
  );
}

export default Event;
