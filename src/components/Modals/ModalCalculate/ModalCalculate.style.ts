import styled from "@emotion/styled";

export const Question = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #000;
  margin: 10px 0;
`;

export const ModalCalculateHeader = styled.div`
  position: fixed;
  padding: 20px;
  max-width: 450px;
  background-color: #fff;
`;

export const ModalCalculateTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 24px;
  margin-bottom: 20px;
  color: var(--color-accent);
  padding: 0 10px;
`;

export const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
`;

export const AnswerLabel = styled.label`
  width: 100%;
  cursor: pointer;
`;
