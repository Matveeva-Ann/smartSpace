import {
  HeaderContainer,
  HeaderTag,
  Logo,
  LogoElevatedText,
  Nav,
  NavList,
  NavListItemLink,
} from "./Header.style";
import svg from "../../assets/svg/logo.svg";
import { headerItems } from "./linksArr";
import { useEffect, useState } from "react";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";
import BlueBtn from "../buttons/BlueBtn/BlueBtn";
import ModalCalculate from "../Modals/ModalCalculate/ModalCalculate";

export default function Header() {
  const [isinitialcolor, setIsInitialColor] = useState(window.scrollY <= 150);
  const [isModalCalculate, setIsModalCalculate] = useState(false)
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsInitialColor(window.scrollY <= 150);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isinitialcolor={isinitialcolor ? 1 : 0}>
      <HeaderTag isinitialcolor={isinitialcolor ? 1 : 0}>
        <Logo to="/">
          SmartSpace
          <LogoElevatedText src={svg} />
        </Logo>
        <Nav>
          <NavList>
            {headerItems.map((item, index) => (
              <li key={index}>
                <NavListItemLink to={item.link}>{t(`${item.name}`)}</NavListItemLink>
              </li>
            ))}
          </NavList>
        </Nav>
        <BlueBtn onClick={()=>setIsModalCalculate(true)}>{t('btn.calculate')}</BlueBtn>
        <LanguageToggle isinitialcolor={isinitialcolor ? 1 : 0}></LanguageToggle>
      </HeaderTag>
      {isModalCalculate && <ModalCalculate closeModal={()=>setIsModalCalculate(false)}></ModalCalculate>}
    </HeaderContainer>
  );
}
