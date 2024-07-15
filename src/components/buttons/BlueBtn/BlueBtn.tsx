import { Btn } from "./BlueBtn.style";

type Props = {
  children: string;
  onClick?: () => void;
};

export default function BlueBtn ({children, onClick}: Props) {

  return(
    <Btn onClick={onClick}>{children}</Btn>
  )
}