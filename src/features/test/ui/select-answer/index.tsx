import { Answer, AnswerId, useTestContext } from "@/entities/test";
import styles from "./styles.module.css";
import NextQuestionBtn from "../next-question-btn";
import { AnswerBtn } from "../answer-btn";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type Props = {
   answers: Answer[];
   setScene: Dispatch<SetStateAction<number>>;
};

export const SelectAnswer = ({ answers, setScene }: Props) => {
   const [selectedAnswerId, setSelectedAnswerId] = useState<AnswerId | null>(
      null
   );
   const { increaseScore } = useTestContext();

   const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedAnswerId(event.target.value);
   };

   const handleNextQuestionClick = () => {
      if (selectedAnswerId) {
         increaseScore(
            answers.find((answer) => answer.id === selectedAnswerId)!.score
         );
         setScene((prevScene) => prevScene + 1);
         window.scrollTo({ top: 0 });
      }
   };

   return (
      <form className={styles.controls}>
         <div className={styles.answersList}>
            {answers.map((answer) => (
               <AnswerBtn
                  key={answer.id}
                  answer={answer}
                  id={answer.id}
                  value={answer.id}
                  onChange={handleAnswerChange}
               />
            ))}
         </div>
         <NextQuestionBtn
            onClick={handleNextQuestionClick}
            disabled={!selectedAnswerId}
         />
      </form>
   );
};
