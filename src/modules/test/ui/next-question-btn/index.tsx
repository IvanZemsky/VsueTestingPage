import styles from './styles.module.css'
import {RightArrowIcon} from '../../../../shared/ui/icons/right-arrow';

const NextQuestionBtn = ({onNextQuestionClick, selectedAnswerIndex}) => {
   const isAnswerSelected = !selectedAnswerIndex;
   return (
      <button
         type="button"
         className={styles.nextQuestionBtn}
         onClick={onNextQuestionClick}
         disabled={isAnswerSelected}
      >
         <RightArrowIcon />
      </button>
   );
};

export default NextQuestionBtn;
