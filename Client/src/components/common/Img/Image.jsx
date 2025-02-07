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
  overflow: hidden; /* �̹����� �θ� ���� ������ ������ �ʵ��� ���� */

  img {
    width: 100%;
    opacity: 0; /* �⺻ ���¿��� ������ ���� */
    transition: opacity 0.5s ease-in-out; /* �ε巯�� ��ȯ ȿ�� */
  }

  &:hover img {
    opacity: 1; /* ���콺�� �������� �� �̹��� ���̱� */
  }
`;
