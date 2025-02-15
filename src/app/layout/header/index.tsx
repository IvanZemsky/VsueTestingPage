import styles from "./styles.module.css";
import { Logo, BurgerMenu, ThemeBtn, Wrapper } from "@/shared/ui";

export const Header = () => {
   const currentYear = new Date().getFullYear();

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />

               <nav className={styles.links}>
                  <a
                     href="https://vsuet.ru/dod"
                     className={styles.link}
                     target="_blank"
                  >
                     Приём {currentYear}
                  </a>
                  <a
                     href="https://vsuet.ru/abitur"
                     className={styles.link}
                     target="_blank"
                  >
                     Абитуриенту
                  </a>
               </nav>

               <BurgerMenu setOpenedStyle={() => {}} />
               <ThemeBtn />
            </div>
         </Wrapper>
      </header>
   );
};
