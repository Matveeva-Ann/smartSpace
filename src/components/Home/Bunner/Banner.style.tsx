import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import imgBanner from "../../../assets/imgs/hero-bg.png";

const slowText = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const ContainerBg = styled.div`
  min-height: 100vh;
  background-image: url(${imgBanner});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const BannerText = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Slogan = styled.p`
  font-size: 40px;
  line-height: 40px;
  font-weight: 500;
  text-align: start;
  margin-bottom: 20px;
  animation: ${slowText} 800ms cubic-bezier(0.51, -0.01, 0.56, 0.99) forwards;
`;

export const BannerTextContent = styled.div`
  max-width: 600px;
  width: 100%;
`;
export const SloganSubtitle = styled.p`
  font-size: 30px;
  text-align: start;
  max-width: 600px;
  line-height: 40px;
  margin-bottom: 20px;
  transform: translateY(50px);
  opacity: 0;
  animation: ${slowText} 800ms cubic-bezier(0.51, -0.01, 0.56, 0.99) forwards;
  animation-delay: 300ms;
`;

export const BlueBtnAnimation = styled.div`
  transform: translateY(50px);
  opacity: 0;
  animation: ${slowText} 800ms cubic-bezier(0.51, -0.01, 0.56, 0.99) forwards;

  &:nth-child(1) {
    animation-delay: 500ms;
  }
  &:nth-child(2) {
    animation-delay: 600ms;
  }
`;

export const BlueBtnsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const SloganAccent = styled.span`
  color: var(--color-primary);
  margin-right: 10px;
`;
