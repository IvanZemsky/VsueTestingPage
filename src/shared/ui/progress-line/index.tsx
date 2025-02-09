import styles from "./styles.module.css";

export const ProgressLine = (props) => {
   const { questionNumber, questionAmount } = props;

   return (
      <div className={styles.progressWrap}>
         <label className={styles.progressInfo} htmlFor="test-progress">
            <span>{questionNumber}</span>
            <span>/</span>
            <span>{questionAmount} </span>
         </label>
         <progress
            className={styles.progressLine}
            id="test-progress"
            value={questionNumber}
            max={questionAmount}
         />
      </div>
   );
};
