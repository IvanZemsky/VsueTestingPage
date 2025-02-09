import { textResults } from "../../constants/test-results";
import styles from "./styles.module.css";

const TextResult = ({ percentResult }: { percentResult: number }) => {
   let text;

   if (percentResult <= 35) {
      text = textResults.low;
   } else if (percentResult <= 75) {
      text = textResults.middle;
   } else {
      text = textResults.high;
   }

   return <p className={styles.resultText}>🥳 {text}</p>;
};

export default TextResult;
