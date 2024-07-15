import { numbersArr } from "./numbersArr";
import {
  Number,
  NumbersItem,
  NumbersList,
  NumbersSectionBlok,
} from "./NumbersSection.style";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

export default function NumbersSection() {
  const [isShowNumb, setIsShowNumb] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    function scrollToNumbers() {
      const { scrollTop } = document.documentElement;
      if (elementRef.current) {
        const { top } = elementRef.current.getBoundingClientRect();
        if (scrollTop > top + 300) {
          setIsShowNumb(true);
        } else {
          setIsShowNumb(false);
        }
      }
    }
    window.addEventListener("scroll", scrollToNumbers);
    return () => window.removeEventListener("scroll", scrollToNumbers);
  }, []);

  return (
    <NumbersSectionBlok>
      <NumbersList ref={elementRef}>
        {numbersArr.map((num, index) => (
          <NumbersItem key={index}>
            {isShowNumb && (
              <Number>
                <CountUp end={num.number} duration={2} />+
              </Number>
            )}
            <p>{num.title}</p>
          </NumbersItem>
        ))}
      </NumbersList>
    </NumbersSectionBlok>
  );
}
