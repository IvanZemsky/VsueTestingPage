import { Button, TextInput } from "@/shared/ui";
import styles from "./styles.module.css";
import { SearchIcon } from "@/shared/ui/icons";
import { Select } from "@/shared/ui";
import { useState } from "react";

export const TestsFilters = () => {
   const [value, setValue] = useState("");

   return (
      <div className={styles.filters}>
         <div className={styles.searchInput}>
            <TextInput placeholder="Поиск" />
            <Button>
               <SearchIcon />
            </Button>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Факультет</p>
            <Select
               className={styles.select}
               title="Все факультеты"
               name="filters"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            >
               <Select.Option text="Short" value="short" id="length_short" />
               <Select.Option text="Medium" value="medium" id="length_medium" />
               <Select.Option text="Long" value="long" id="length_long" />
            </Select>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Квалификация</p>
            <Select
               className={styles.select}
               title="Любая квалификация"
               name="filters"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            >
               <Select.Option text="Short" value="short" id="length_short" />
               <Select.Option text="Medium" value="medium" id="length_medium" />
               <Select.Option text="Long" value="long" id="length_long" />
            </Select>
         </div>
      </div>
   );
};
