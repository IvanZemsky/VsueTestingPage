import { TEST } from "@/entities/test";
import { Question } from "@/features/test/ui/question";

const Test = () => {
   return ( 
      <Question test={TEST} selectAnswer={undefined} />
   );
}

export default Test