import styled from "styled-components";

const ImageBox = styled.div`
  position: absolute;
  width: 220px;
  height: 170px;
  border: 1px solid #ddd;
  background-size: cover;
  background-image: url("/images/bg.jpg"); /* 여기에 다른 이미지 URL을 넣을 수 있음 */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
`;

const Bg = () => {
  return (
    <Bgimg>
      <img src="/images/bg.jpg" alt="Bg" />
      <ImageBox top="30%" left="35%" />
      <ImageBox top="30%" left="60%" />
      <ImageBox top="60%" left="30%" />
      <ImageBox top="60%" left="60%" />
    </Bgimg>
  );
};

export default Bg;

const Bgimg = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover img {
    opacity: 1;
  }

  &:hover ${ImageBox} {
    opacity: 1;
  }
`;
