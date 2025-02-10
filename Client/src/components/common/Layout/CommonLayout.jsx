import React from "react";
import Header from "../Header/TopHeader";
import styled from "styled-components";
import SemiHeader from "../Header/SemiHeader";
import Footer from "./Footer";

const CommonLayout = () => {
  return (
    <Section>
      <Header />
      <SemiHeader />
      <Footer />
    </Section>
  );
};

export default CommonLayout;

const Section = styled.section``;
