import { Test } from "@/entities/test";
import styles from "./styles.module.css";
import { TestCard } from "../test-card";

type Props = {
   tests: Test[];
};
export const TestsList = ({ tests }: Props) => {
   return (
      <div className={styles.content}>
         {tests.map((test) => (
            <TestCard data={test} />
         ))}
      </div>
   );
};
