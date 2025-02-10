import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Section>
      <Outlet /> {/* 현재 URL에 맞는 컴포넌트가 여기에 렌더링됨 */}
    </Section>
  );
};

export default Layout;

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;
