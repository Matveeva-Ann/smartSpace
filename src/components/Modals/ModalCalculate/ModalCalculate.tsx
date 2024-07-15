import { Form, Formik } from "formik";
import ModalElement from "../ModalElement/ModalElement";
import { questionsArr } from "./questionsArr";
import {
  Answer,
  AnswerLabel,
  AnswersWrapper,
  ModalCalculateHeader,
  ModalCalculateTitle,
  Question,
} from "./ModalCalculate.style";

interface Props {
  closeModal: () => void;
}

export default function ModalCalculate({ closeModal }: Props) {
  const initialValues = {};
  function submitForm() {
    console.log("submitForm");
  }

  return (
    <ModalElement closeModal={closeModal}>
      <ModalCalculateHeader>
        <ModalCalculateTitle>
          Розрахуйте свій розумний будинок
        </ModalCalculateTitle>
      </ModalCalculateHeader>

      <div style={{ marginTop: "105px" }}>
        <Formik initialValues={initialValues} onSubmit={submitForm}>
          <Form>
            {questionsArr.map((question) => {
              if (question.isSelectOne && question.answers) {
                return (
                  <>
                    <Question>{question.question}</Question>
                    <AnswersWrapper>
                      {question.answers.map((answer, index) => (
                        <Answer key={index}>
                          <input
                            type="radio"
                            name={question.question}
                            id={question.question + answer}
                          />
                          <AnswerLabel htmlFor={question.question + answer}>
                            {answer}
                          </AnswerLabel>
                        </Answer>
                      ))}
                    </AnswersWrapper>
                  </>
                );
              } else if (!question.isSelectOne && question.answers) {
                return (
                  <>
                    <Question>{question.question}</Question>
                    {question.answers.map((answer, index) => (
                      <Answer key={index}>
                        <input
                          type="checkbox"
                          id={question.question + answer}
                        />
                        <AnswerLabel htmlFor={question.question + answer}>
                          {answer}
                        </AnswerLabel>
                      </Answer>
                    ))}
                  </>
                );
              } else {
                return <p>{question.question}</p>;
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </ModalElement>
  );
}
