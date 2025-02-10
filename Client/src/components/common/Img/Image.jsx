import styled from "styled-components";

const ImageBox = styled.div`
  position: absolute;
  width: 220px;
  height: 170px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-size: cover;
  background-image: ${({ bg }) => `url(${bg})`}; /* 동적으로 이미지 적용 */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  object-fit: cover;

  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
`;

const Bg = () => {
  return (
    <Bgimg>
      <img src="/images/bg.jpg" alt="Bg" />
      <ImageBox top="30%" left="35%" bg="/images/cover.jpg" />
      <ImageBox top="30%" left="60%" bg="/images/cover.jpg" />
      <ImageBox top="60%" left="30%" bg="/images/cover.jpg" />
      <ImageBox top="60%" left="60%" bg="/images/cover.jpg" />
    </Bgimg>
  );
};

export default Bg;

const Bgimg = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 720px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover img {
    opacity: 0.95;
  }

  &:hover ${ImageBox} {
    opacity: 1;
  }
`;
