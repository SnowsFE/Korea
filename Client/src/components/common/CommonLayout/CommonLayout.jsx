import React from "react";
import Header from "./TopHeader";
import styled from "styled-components";
import SemiHeader from "./SemiHeader";
import ViewIcon from "./ViewIcon";
import Favorites from "./Favorites";

const CommonLayout = () => {
  return (
    <Section>
      <Header />
      <SemiHeader />
      <Favorites />
      <ViewIcon />
    </Section>
  );
};

export default CommonLayout;

const Section = styled.section``;
