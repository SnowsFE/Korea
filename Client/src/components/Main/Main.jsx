import React from "react";
import "./Main.css";
import MainBanner from "./MainElements/MainBanner";
import MainService from "./MainElements/MainService";
import MainNewLecture from "./MainElements/MainNewLecture";

function Main() {
  return (
    <div className="Main">
      <MainBanner />
      <MainService />
      <MainNewLecture />
    </div>
  );
}

export default Main;