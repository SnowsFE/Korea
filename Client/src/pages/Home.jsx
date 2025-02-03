import React from "react";
import styled from "styled-components";
import MainBanner from "../components/elements/Main_Banner";
import MainService from "../components/elements/Main_Service";

const Home = () => {
  return (
    <Section>
      <Body>
        <MainBanner/>
        <MainService/>
      </Body>
    </Section>
  );
};

export default Home;

const Section = styled.div`
  width: 100%;
`;

const Body = styled.div``;
