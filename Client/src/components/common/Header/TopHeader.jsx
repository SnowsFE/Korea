import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  const data = [
    "3과정 100% 무료수강!",
    "열심학우 또다시 무료수강지원!",
    "스펙향상 전폭지원!",
    "국가인정기관 정식등록!",
  ];

  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
      }
    }, 3000); // 3초 마다 셋인터벌

    return () => clearInterval(interval);
  }, [transitioning, data.length]);

  // 슬라이드 애니메이션이 끝난 후 transitioning 상태를 false로 설정
  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <Section>
      <Container>
        <Left>
          <Event>Event</Event>
          <FreeCourse>
            <Bullet>⦁</Bullet>
            <TextWrapper>
              {data.map((text, i) => (
                <Text
                  key={i}
                  style={{
                    transform: `translateY(-${index * 100}%)`,
                    opacity:
                      index === i || (index === data.length - 1 && i === 0)
                        ? 1
                        : 0, // 마지막 항목에서 처음 항목이 보이도록 처리
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {text}
                </Text>
              ))}
            </TextWrapper>
          </FreeCourse>
        </Left>
        <Right>
          <LoginState>로그인</LoginState>
          <JoinState>회원가입</JoinState>
        </Right>
      </Container>
    </Section>
  );
};

export default Header;

const Section = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  color: var(--textColor);
  background-color: var(--MainColor);
  box-sizing: border-box;
  font-family: "Noto-SB";
  font-size: 14px;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Event = styled.div`
  padding: 10px 20px;
  color: var(--MainColor);
  background-color: var(--textColor);
  font-size: 16px;
  font-family: "Noto-B";
`;

const FreeCourse = styled.div`
  display: flex;
  align-items: center;
`;

const Bullet = styled.span`
  margin: 0 8px 4px 0;
`;

const TextWrapper = styled.div`
  height: 16px; /* 텍스트 한 줄의 높이 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
`;

const Text = styled.div`
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* 부드러운 이동 효과와 투명도 변화 */
`;

const LoginState = styled.div`
  cursor: pointer;
`;

const JoinState = styled.div``;
