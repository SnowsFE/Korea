import React from "react";
import Header from "./Header/TopHeader";
import styled from "styled-components";
import SemiHeader from "./Header/SemiHeader";

const Layout = () => {
  return (
    <Section>
      <Header />
      <SemiHeader />
    </Section>
  );
};

export default Layout;

const Section = styled.div``;
