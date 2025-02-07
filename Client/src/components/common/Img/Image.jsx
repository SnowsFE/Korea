import styled from "styled-components";

const Bg = () => {
  return (
    <Bgimg>
      <img src="/images/bg.jpg" alt="Bg" />
    </Bgimg>
  );
};

export default Bg;

const Bgimg = styled.div`
  position: relative;
  overflow: hidden; /* 이미지가 부모 영역 밖으로 나가지 않도록 설정 */

  img {
    width: 100%;
    opacity: 0; /* 기본 상태에서 보이지 않음 */
    transition: opacity 0.5s ease-in-out; /* 부드러운 전환 효과 */
  }

  &:hover img {
    opacity: 1; /* 마우스가 도달했을 때 이미지 보이기 */
  }
`;
