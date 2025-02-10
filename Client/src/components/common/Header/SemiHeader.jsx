import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SemiHeader = () => {
  const [text, setText] = useState("");
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Section>
      <Image onClick={goHome}>
        <img src="/images/Logo.png" alt="Logo" />
      </Image>
      학습지원, 커뮤니티(자유게시판), 정보(이벤트, 공지사항), 교육원맵 -
      gnb메뉴에 4가지만 <br />
      진로 및 전망 , 취업활동이 되냐, 포트폴리오 ★
      <div onClick={() => setView(true)} style={{ cursor: "pointer" }}>
        <img src="/images/feel.png" alt="this-feel" />← 사진을 클릭해보세요
      </div>
      <div>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {/* 모달 창 */}
      {view && (
        <ModalOverlay onClick={() => setView(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src="/images/feel.png" alt="this-feel" />
            <CloseButton onClick={() => setView(false)}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default SemiHeader;

const Section = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-top: 70px;

  img {
    width: 137px;
  }
`;

const Image = styled.div`
  cursor: pointer;
`;

// 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;

  img {
    width: 100%;
    max-width: 1200px;
    height: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff5f5f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;
