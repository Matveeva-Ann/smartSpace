import { useRef } from "react";
import Banner from "../../components/Home/Bunner/Banner";
import NumbersSection from "../../components/Home/NumbersSection/NumbersSection";
import ProductSection from "../../components/Home/ProductSection/ProductSection";
import StagesSection from "../../components/Home/StagesSection/StagesSection";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import { HomeWrapper } from "./Home.style";

export default function Home() {
  const refToChoose = useRef(null);

  return (
    <>
      <Banner forwardedRef={refToChoose}></Banner>
      <HomeWrapper>
        <WhyChooseUs forwardedRef={refToChoose}></WhyChooseUs>
      </HomeWrapper>
      <NumbersSection></NumbersSection>
      <HomeWrapper>
        <ProductSection></ProductSection>
        <StagesSection></StagesSection>
      </HomeWrapper>
    </>
  );
}
