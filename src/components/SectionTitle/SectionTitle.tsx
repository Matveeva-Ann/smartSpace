import { Title } from "./SectionTitle.style";

interface Props {
  children: string
}

export default function SectionTitle ({children}: Props) {

  return (
    <Title>{children}</Title>
  )
}