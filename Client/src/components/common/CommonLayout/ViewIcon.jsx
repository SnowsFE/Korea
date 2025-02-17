import React, { useState } from "react";
import styled from "styled-components";

const ViewIcon = () => {
  const [view, setView] = useState(false);

  return (
    <div>
      {/* View 이미지 (교육원맵 오른쪽 배치) */}
      <View onClick={() => setView(true)} style={{ cursor: "pointer" }}>
        <img src="/images/fixedIcon.png" alt="fixedIcon.png" />
      </View>

      {/* 모달 */}
      {view && (
        <ModalOverlay onClick={() => setView(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src="/images/Semi.jpg" alt="Semi.jpg" />
            <CloseButton onClick={() => setView(false)}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default ViewIcon;

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

const View = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 30px;
  img {
    width: 40px;
    border-radius: 30px;
    transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
    object-fit: cover; /* 비율 유지하며 꽉 채우기 */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;
