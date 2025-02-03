import React from "react";
import styled from "styled-components";
import Main from "../components/elements/Main";

const Home = () => {
  return (
    <Section>
      <Body>
        <Main/>
      </Body>
    </Section>
  );
};

export default Home;

const Section = styled.div`
  width: 100%;
`;

const Body = styled.div``;
