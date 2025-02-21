import React from "react";
import "./Main.css";
import MainBanner from "./MainElements/MainBanner";
import MainService from "./MainElements/MainService";
import MainNewLecture from "./MainElements/MainNewLecture";
import MainGridIcon from "./MainElements/MainGridIcon";

function Main() {
  return (
    <div className="Main">
      <MainBanner />
      <MainService />
      <MainNewLecture />
      <MainGridIcon />
    </div>
  );
}

export default Main;
