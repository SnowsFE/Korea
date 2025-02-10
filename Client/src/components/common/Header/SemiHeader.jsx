import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SemiHeader = () => {
  const [view, setView] = useState(false);
  const [dropdown, setDropdown] = useState(null);
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
          <NavItem
            onMouseEnter={() => setDropdown("support")}
            onMouseLeave={() => setDropdown(null)}
          >
            학습지원
            {dropdown === "support" && (
              <DropdownMenu>
                <DropdownItem onClick={() => navigate("/learning-materials")}>
                  학습자료
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/qna")}>
                  Q&A
                </DropdownItem>
              </DropdownMenu>
            )}
          </NavItem>

          <NavItem onClick={() => navigate("/boards")}>커뮤니티</NavItem>

          <NavItem
            onMouseEnter={() => setDropdown("info")}
            onMouseLeave={() => setDropdown(null)}
          >
            정보
            {dropdown === "info" && (
              <DropdownMenu>
                <DropdownItem onClick={() => navigate("/event")}>
                  이벤트
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/notice")}>
                  공지사항
                </DropdownItem>
              </DropdownMenu>
            )}
          </NavItem>

          <NavItem onClick={() => navigate("/job")}>취업활동</NavItem>
        </Nav>
        <img src="/images/Data.png" alt="Data" />
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
      </Container>
    </Section>
  );
};

export default SemiHeader;

// 스타일링
const Section = styled.div`
  height: calc(100% - 45px);
  padding: 50px 0 15px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid var(--line);
  background: #fff;

  img {
    margin-top: 5px;
    width: 128px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 10px;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #f4f4f4;
  }
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
