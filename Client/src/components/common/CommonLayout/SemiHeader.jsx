import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SemiHeader = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Section>
      <Container>
        {/* 로고 클릭 시 홈 이동 */}
        <Image onClick={goHome}>
          <img src="/images/Logo.png" alt="Logo" />
        </Image>

        {/* GNB 메뉴 */}
        <Nav>
          <NavItem onClick={() => navigate("/free-course")}>
            무료수강
            <HotText>Hot</HotText>
          </NavItem>

          <NavItem onClick={() => navigate("/job")}>
            취업
            <HotText>Hot</HotText>
          </NavItem>

          <NavItem onClick={() => navigate("/boards")}>
            커뮤니티<NText>N</NText>
          </NavItem>

          <NavItem onClick={() => navigate("/event")}>
            이벤트<NText>N</NText>
          </NavItem>
        </Nav>
        <img src="/images/Data.png" alt="Data" />
      </Container>
    </Section>
  );
};

export default SemiHeader;

// 스타일링
const Section = styled.div`
  font-family: "Noto-B";
  height: calc(100% - 45px);
  margin-bottom: 50px;
  border-bottom: 1px solid var(--line);
  background: #fff;

  img {
    width: 80px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
`;

const Image = styled.div`
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const NavItem = styled.div`
  position: relative;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 35px;
  color: #333;

  &:hover {
    color: var(--MainColor);
  }
`;

const HotText = styled.span`
  font-family: "Money-Graphy";
  position: absolute;
  margin-left: 5px;
  font-size: 11px;
  font-weight: 700;
  color: #ff0000; /* 빨간색 */
  animation: flash 1s infinite;

  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const NText = styled.span`
  font-family: "Money-Graphy";
  position: absolute;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 700;
  color: var(--MainColor);
  animation: flash 1s infinite;

  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
