import React from "react";
import styled from "styled-components";

const Test = styled.div`
  color: #16be78;
`;

function TestCard({ children }) {
  return <Test>{children}</Test>;
}

export default function TestInfo() {
  return (
    <TestCard>
      <h1>안녕하세요 칠드런테스트입니다.</h1>
    </TestCard>
  );
}
