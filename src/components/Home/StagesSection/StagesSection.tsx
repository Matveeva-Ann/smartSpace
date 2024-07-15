import SectionTitle from "../../SectionTitle/SectionTitle";
import { stagesArr } from "./stagesArr";
import StagesItem from "./StagesItem";
import { ArrowRightIcon, Stages, StagesList } from "./StagesSection.style";

export default function StagesSection() {
  return (
    <Stages>
      <SectionTitle>Stages of implementing a smart home system</SectionTitle>
      <StagesList>
        {stagesArr.map((item, index) => (
          <div style={{position: 'relative'}}>
            <StagesItem cardData={item} key={index}></StagesItem>
            <ArrowRightIcon index={index}/>
          </div>
        ))}
      </StagesList>
    </Stages>
  );
}
