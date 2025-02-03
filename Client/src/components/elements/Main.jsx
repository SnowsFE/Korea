import React from "react";
import "./Main.css";
import MainBanner from "./MainBanner";
import MainService from "./MainService";
import MainNewLecture from "./MainNewLecture";

function Main() {
  return (
    <div>
      <MainBanner />
      <MainService />
      <MainNewLecture />
    </div>
  );
}

export default Main;