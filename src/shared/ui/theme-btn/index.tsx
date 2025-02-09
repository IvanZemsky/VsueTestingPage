import styles from "./styles.module.css";
import {SunIcon} from "../icons/sun";
import {MoonIcon} from "../icons/moon";
import { useContext } from "react";
import { ThemeContext } from "@/shared/model/theme-context";

export const ThemeBtn = () => {
   const {theme, setTheme} = useContext(ThemeContext);

   const handleClick = () => {
      setTheme(theme === "light" ? "dark" : "light");
   }

   return (
      <button
         className={styles.themeBtn}
         onClick={handleClick}
      >
         {theme === "light" ? <MoonIcon /> : <SunIcon /> }
      </button>
   );
};
