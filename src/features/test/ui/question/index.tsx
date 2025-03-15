import { Question as QuestionType } from "@/entities/test";
import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { SelectAnswer } from "../select-answer";

type Props = {
   questions: QuestionType[];
   selectAnswer: ReactNode;
};

export const Question = ({ questions }: Props) => {
   const [questionId, setQuestionId] = useState(0);

   const currentQuestion = questions[questionId];
   const isEndQuestion = questionId === questions.length - 1;

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
