import { ChooseImgWrapper, ChooseUsContent, ChooseWrapper } from "./WhyChooseUs.style";
import img from "../../../assets/imgs/features.jpg";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { chooseUsArr } from "./chooseUsArr";
import { RefObject } from 'react';
import SectionTitle from "../../SectionTitle/SectionTitle";

interface Props {
  forwardedRef: RefObject<HTMLDivElement>;
}

export default function WhyChooseUs({forwardedRef}: Props) {


  return (
    <ChooseWrapper ref={forwardedRef}>
      <SectionTitle>Why Choose Us</SectionTitle>
      <ChooseUsContent>
        <div>
          {chooseUsArr
            .slice(0, Math.floor(chooseUsArr.length / 2))
            .map((item, index) => (
              <WhyChooseUsCard
                chooseUsItem={item}
                key={index}
              ></WhyChooseUsCard>
            ))}
        </div>
        <ChooseImgWrapper>
          <img src={img} style={{width: '100%'}} alt="" />
        </ChooseImgWrapper>
        <div>
          {chooseUsArr
            .slice(Math.floor(chooseUsArr.length / 2))
            .map((item, index) => (
              <WhyChooseUsCard
                chooseUsItem={item}
                key={index}
                left
              ></WhyChooseUsCard>
            ))}
        </div>
      </ChooseUsContent>
    </ChooseWrapper>
  );
}
