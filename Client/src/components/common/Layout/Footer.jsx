import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        주소 : 서울특별시 금천구 가산디지털2로 108, 1401,1402호(가산동)ㅣ상호 :
        한국교육평가원
        <br />
        통신판매업 : 제 2012-서울금천-0380호 ㅣ 대표자 : 최원석 ㅣ 사업자번호 :
        107-87-28580
        <br />
        고객상담 : 02-3667-3550 ㅣ 정보책임관리자 : 문성진 ㅣ
        원격평생교육시설신고 : 남부교육지원청 제672호
        <br />
        Copyright ⓒ 2016 KPEI.CO.KR All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  z-index: -1;
`;

const FooterText = styled.p`
  margin: 0;
`;

export default Footer;
