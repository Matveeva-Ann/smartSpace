import styled from "@emotion/styled";
import { RxCross2 } from "react-icons/rx";

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalBodyWrapper = styled.div`
 position: relative;
 overflow: hidden;
 border-radius: 20px;
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 500px;
  max-height: 90vh;
  border-radius: 20px;
  background-color: #fff;
  color: var(--text-color);
  padding: 0px 20px 20px;
  overflow: auto;
`;

export const Cross = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 25px;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
`;

export const RxCross = styled(RxCross2)`
  color: var(--text-color);
  transition: color 250ms linear;

  &:hover {
    color: #000;
  }
`;
