import styled from "@emotion/styled";

export const ChooseWrapper = styled.section`
  position: relative;
  width: 100%;
  color: black;
  padding: 60px 0;
`;
export const ChooseUsContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ChooseImgWrapper = styled.div`
  max-width: clamp(240px, 31vw, 380px);
  padding: 28px;
`;
export const ChooseUsCard = styled.div<{ left: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.left ? "row-reverse" : "row")};
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 30px;
  max-width: 356px;
`;

export const ChooseUsCardTitle = styled.h3<{ left: boolean }>`
  font-size: 24px;
  color: var(--text-color);
  margin-bottom: 10px;
  font-weight: 500;
  text-align: ${(props) => (props.left ? "start" : "end")};
`;

export const ChooseUsCardText = styled.p<{ left: boolean }>`
  color: var(--text-color);
  font-weight: 400;
  text-align: ${(props) => (props.left ? "start" : "end")};
  opacity: 0.7;
`;

export const ChooseUsCardImg = styled.img`
  max-width: 55px;
  height: auto;
`;
