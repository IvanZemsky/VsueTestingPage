import { TextInput } from "@/shared/ui";
import styles from "./styles.module.css";

export const TestsFilters = () => {

   return (
      <div>
         <div className={styles.searchInput}>
            <TextInput placeholder="Поиск"/> 
         </div>
      </div>
   );
};
