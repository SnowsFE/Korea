import React from "react";
import style from "./Korea.module.css";
import styled from "styled-components";

const Main = () => {
  return (
    <Korea>
      <div class={style.h1}>
        메인입니다. 만들고 싶으신 것 <br />
        컴포넌트, 기능, 퍼블리싱 하시면 됩니다.
      </div>
      <p>기본 셋팅만 해놨어요~</p>
      <p>메인 브랜치는 master → main으로 변경되었습니다.</p>
    </Korea>
  );
};

export default Main;

const Korea = styled.div`
  width: 100%;
`;
