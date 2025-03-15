import styles from "./styles.module.css";
import Logo from "@/shared/assets/img/logo.png";
import { TestsFilters } from "./filters";
import { Intro } from "./intro";
import { HomeTestsList } from "./list";
import clsx from "clsx";

const Home = () => {
   return (
      <section className={styles.content}>
         <div className={styles.column}>
            <Intro />
            <HomeTestsList />
         </div>
         <div className={clsx(styles.column, styles.filters)}>
            <img src={Logo} alt="logo" />
            <TestsFilters />
         </div>
      </section>
   );
};

export default Home;
