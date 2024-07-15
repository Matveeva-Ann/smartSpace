import { createPortal } from "react-dom";
import {
  Cross,
  ModalBg,
  ModalBodyWrapper,
  ModalContent,
  RxCross,
} from "./ModalElement.style";

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}

export default function ModalElement({ children, closeModal }: Props) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    throw new Error("Element with id 'modal-root' not found!");
  }

  return createPortal(
    <ModalBg onClick={({target, currentTarget}) => target === currentTarget && closeModal()}>
      <ModalBodyWrapper>
        <ModalContent>
          <Cross onClick={closeModal}>
            <RxCross />
          </Cross>
          {children}
        </ModalContent>
      </ModalBodyWrapper>
    </ModalBg>,
    modalRoot
  );
}
