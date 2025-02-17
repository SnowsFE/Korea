import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"; // react-bootstrap에서 Modal, Button 사용
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 스타일 임포트
import styled from "styled-components";

const Favorites = () => {
  const [view, setView] = useState(false);

  const addFavorites = () => {
    setView(true);
  };

  const closeModal = () => {
    setView(false);
  };

  return (
    <div>
      {/* 모달 */}
      <Modal show={view} onHide={closeModal} centered>
        <Modal.Body onClick={(e) => e.stopPropagation()}>
          <img
            src="/images/Semi.jpg"
            alt="Semi.jpg"
            style={{ width: "100%", maxWidth: "1200px", height: "auto" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeModal}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 즐겨찾기 버튼 */}
      <FixedStar onClick={addFavorites}>
        <img src="/images/star.png" alt="Favorites" />
      </FixedStar>
    </div>
  );
};

export default Favorites;

// FixedStar 버튼 스타일링
const FixedStar = styled.section`
  position: fixed;
  bottom: 30px;
  left: 30px;
  padding: 25px;
  z-index: 1000;

  img {
    width: 64px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }
`;
