import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false); // 상태 추가

  useEffect(() => {
    setTimeout(() => {
      setVisible(true); // 컴포넌트가 렌더링될 때 opacity를 변경
    }, 1000);
  }, []);

  useEffect(() => {
    navigate("/", { replace: true }); // replace: true를 추가하여 이전 페이지 히스토리를 덮어씀
  }, [navigate]); // navigate를 의존성 배열에 추가하여 변경 시마다 실행

  return (
    <Overlay>
      <Message visible={visible}>
        <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      </Message>
    </Overlay>
  );
};

export default NotFound;

// 스타일 정의
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--BgColor, #f8f8f8); /* var로 배경 색상 설정 */
  z-index: 9999; /* 높은 z-index로 모든 내용 덮기 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  opacity: ${(props) =>
    props.visible ? 1 : 0}; /* visible 상태에 따라 opacity 변경 */
  transition: opacity 1s ease-in-out;
  font-family: "Money-Graphy";
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 50px;
`;
