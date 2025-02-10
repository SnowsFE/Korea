import React from "react";
import Header from "./Header/TopHeader";
import styled from "styled-components";
import SemiHeader from "./Header/SemiHeader";

const HeaderLayout = () => {
  return (
    <Section>
      <Header />
      <SemiHeader />
    </Section>
  );
};

export default HeaderLayout;

const Section = styled.div``;
