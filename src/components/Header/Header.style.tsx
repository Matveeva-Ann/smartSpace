import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface HeaderContainerProps {
  isinitialcolor: number;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  position: fixed;
  background-color: ${(props) =>
    props.isinitialcolor ? "transparent" : "#fff"};
  z-index: 2;
  box-shadow: ${(props) =>
    props.isinitialcolor ? "none" : "0px 1px 10px #273a6f27"};
`;

export const HeaderTag = styled.header<HeaderContainerProps>`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  max-width: 1140px;
  margin: 0 auto;
  color: ${(props) => (props.isinitialcolor ? "#fff" : "#3A3A3A")};
`;

export const Logo = styled(Link)`
  position: relative;
  color: var(--color-primary);
  text-decoration: none;
  font-family: "Lobster-Regular";
  font-size: 30px;
`;

export const LogoElevatedText = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  top: 0px;
  right: -30px;
`;

export const Nav = styled.nav`
  flex-grow: 0.7;
  font-size: 20px;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const NavListItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  padding: 10px;
  transition-duration: 250ms;

  &:hover {
    color: var(--color-primary);
  }
`;
