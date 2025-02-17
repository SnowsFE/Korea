import React, { useState } from "react";
import styled from "styled-components";

const Favorites = () => {
  const [view, setView] = useState(false);

  const addFavorites = () => {
    setView(true);
  };

  return (
    <div>
      {view && (
        <ModalOverlay onClick={() => setView(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src="/images/Semi.jpg" alt="Semi.jpg" />
            <CloseButton onClick={() => setView(false)}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
      <FixedStar onClick={addFavorites}>
        <img src="/images/star.png" alt="Favorites" />
      </FixedStar>
    </div>
  );
};

export default Favorites;

const FixedStar = styled.section`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 25px;

  img {
    width: 64px;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.05);
    transition: 0.1s ease-in-out;
  }
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
