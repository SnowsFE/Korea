import React from "react";
import Header from "./TopHeader";
import styled from "styled-components";
import SemiHeader from "./SemiHeader";
import ViewIcon from "./ViewIcon";
import PopBanner from "./popBanner";

const CommonLayout = () => {
  return (
    <Section>
      <PopBanner />
      <Header />
      <SemiHeader />
      <ViewIcon />
    </Section>
  );
};

export default CommonLayout;

const Section = styled.section``;
