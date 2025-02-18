import React from "react";
import Header from "./TopHeader";
import styled from "styled-components";
import SemiHeader from "./SemiHeader";
import ViewIcon from "./ViewIcon";

const CommonLayout = () => {
  return (
    <Section>
      <Header />
      <SemiHeader />
      <ViewIcon />
    </Section>
  );
};

export default CommonLayout;

const Section = styled.section``;
