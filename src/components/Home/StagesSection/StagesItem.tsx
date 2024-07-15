import {
  StagesCard,
  StagesCardHeader,
  StagesCardText,
  StagesItemImg,
} from "./StagesSection.style";

interface CardData {
  title: string;
  img: string;
  description: string;
}

interface StagesItemProps {
  cardData: CardData;
}

export default function StagesItem({ cardData }: StagesItemProps) {
  return (
    <StagesCard>
      <StagesCardHeader>
        <StagesItemImg src={cardData.img} alt="icon" />
        <h3>{cardData.title}</h3>
      </StagesCardHeader>
      <StagesCardText>{cardData.description}</StagesCardText>
    </StagesCard>
  );
}
