import { Test } from "@/entities/test";
import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { SelectAnswer } from "../select-answer";

type Props = {
   test: Test;
   selectAnswer: ReactNode;
};

export const Question = ({ test }: Props) => {
   const [questionId, setQuestionId] = useState(0);

   const currentQuestion = test.questions[questionId];
   const isEndQuestion = questionId === test.questions.length - 1

   return (
      <section className={styles.question}>
         <h2 className={styles.questionTitle}>{currentQuestion.title}</h2>

         <SelectAnswer
            isEndQuestion={isEndQuestion}
            answers={currentQuestion.answers}
            setScene={setQuestionId}
         />
      </section>
   );
};
