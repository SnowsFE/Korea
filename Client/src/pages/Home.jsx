import React from "react";
import styled from "styled-components";
import Main from "../components/Main/Main";

const Home = () => {
  return (
    <Section>
      <Main />
    </Section>
  );
};

export default Home;

const Section = styled.section`
  width: 100%;
`;
