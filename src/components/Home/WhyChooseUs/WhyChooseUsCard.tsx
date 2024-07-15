import { useTranslation } from "react-i18next";
import { ChooseUsCard, ChooseUsCardImg, ChooseUsCardText, ChooseUsCardTitle } from "./WhyChooseUs.style";

interface ChooseUsItem {
  title: string;
  img: string;
  description: string;
}

type Props = {
  chooseUsItem: ChooseUsItem;
  left?: boolean;
};

export default function WhyChooseUsCard({ chooseUsItem, left=false }: Props) {
  const { t } = useTranslation();

  return (
    <ChooseUsCard left={left}>
      <div>
        <ChooseUsCardTitle left={left}>{t(`${chooseUsItem.title}`)}</ChooseUsCardTitle>
        <ChooseUsCardText left={left}>{t(`${chooseUsItem.description}`)}</ChooseUsCardText>
      </div>
      <ChooseUsCardImg src={chooseUsItem.img} alt="icon" />
    </ChooseUsCard>
  );
}
