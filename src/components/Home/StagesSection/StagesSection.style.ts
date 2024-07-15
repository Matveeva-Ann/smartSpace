import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ImArrowRight } from "react-icons/im";

interface ArrowRightIconProps {
  index: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    
  }
`;

const moveRight = keyframes`
  from {
    transform: translateX(-20px) rotateZ(0deg);
  }
  to {
    transform: translateX(0px) rotateZ(0deg);
  }
`;

const moveLeft = keyframes`
  from {
    transform: rotateZ(180deg) translateX(-20px);
  }
  to {
    transform: rotateZ(180deg) translateX(0px);
  }
`;

const moveDown = keyframes`
  from {
    transform: rotateZ(90deg) translateX(-20px);
  }
  to {
    transform: rotateZ(90deg) translateX(0px);
  }
`;

export const Stages = styled.section`
  position: relative;
  margin: 20px 0;
`;

export const StagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 50px;
`;

export const StagesCard = styled.li`
  color: #000;
  list-style: none;
`;

export const StagesCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StagesCardText = styled.p`
  text-align: justify;
`;

export const ArrowRightIcon = styled(ImArrowRight)<ArrowRightIconProps>`
  position: absolute;
  right: ${(props) => (props.index === 2 ? "50%" : "-60px")};
  top: ${(props) => (props.index === 2 ? "auto" : "50%")};
  bottom: ${(props) => (props.index === 2 ? "-20px" : "auto")};
  font-size: 30px;
  color: #7b68ee;
  transform: ${(props) => {
    if (props.index === 2) {
      return "rotateZ(90deg) translateY(-20px)";
    } else if (props.index >= 3) {
      return "rotateZ(180deg) translateX(-20px)";
    } else {
      return "rotateZ(0deg)";
    }
  }};
  opacity: 0;
  display: ${(props) => (props.index === 5 ? "none" : "block")};
  animation: ${fadeIn} 2000ms linear ${(props) => props.index * 600}ms forwards,
    ${(props) =>
        props.index === 2 ? moveDown : props.index >= 3 ? moveLeft : moveRight}
      1500ms ease-in-out ${(props) => props.index * 600}ms forwards;
`;

export const StagesItemImg = styled.img`
  width: 80px;
  height: auto;
  padding: 10px;
`;
