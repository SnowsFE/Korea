import React from "react";
import Header from "./TopHeader";
import styled from "styled-components";
import SemiHeader from "./SemiHeader";

const HeaderLayout = () => {
  return (
    <Section>
      <Header />
      <SemiHeader />
    </Section>
  );
};

export default HeaderLayout;

const Section = styled.section``;
