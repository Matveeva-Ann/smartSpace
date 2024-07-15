import styled from "@emotion/styled";
import img from "../../../assets/imgs/page-title-bg.jpg";

export const NumbersSectionBlok = styled.section`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #052c6296;
    z-index: -1;
  }
`;

export const NumbersList = styled.ul`
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 20px;
`;

export const NumbersItem = styled.li`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: 22px;
 font-weight: 600;
`

export const Number = styled.span`
 font-size: 45px;
 font-weight: 700;
`
