import styled from "@emotion/styled";
interface HeaderContainerProps {
  isinitialcolor: number;
}

export const Select = styled.select`
  cursor: pointer;
  border: none;
  padding: 6px;
  outline: none;
  background-color: transparent;
  color: inherit;
  font-size: 16px;
  &:hover {
    opacity: 0.7;
  }
`;

export const Option = styled.option<HeaderContainerProps>`
  background-color: ${(props) =>
    props.isinitialcolor ? " #0a254d" : "#fff"};
  border: none;
  outline: none;
`;
