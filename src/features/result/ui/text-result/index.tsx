import styles from "./styles.module.css";
import { getTextResult } from "@/entities/test";

type Props = {
   percentResult: number;
};

export const TextResult = ({ percentResult }: Props) => {
   const text = getTextResult(percentResult);

   return <p className={styles.resultText}>🥳 {text}</p>;
};
