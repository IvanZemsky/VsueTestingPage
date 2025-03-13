import { TestsList } from "@/features/test";
import styles from "./styles.module.css";
import Logo from "@/shared/assets/img/logo.png";
import { TEST } from "@/entities/test";
import { TestsFilters } from "./filters";

const Home = () => {
   return (
      <section className={styles.content}>
         <div className={styles.intro}>
            <div className={styles.intro}>
               <div className={styles.introDesc}>
                  <h1>Добро пожаловать! 👋</h1>
                  <p className={styles.introDescText}>
                     Наш университет предлагает выбрать и пройти простой тест на
                     навыки, увлечения и интересы и узнать, подходит ли Вам
                     обучение в нашем университете по интересующей Вас
                     специальности.
                  </p>
                  <p className={styles.introDescText}>
                     Более подробно о каждом направлении можно ознакомиться на
                     сайте университета:{" "}
                     <a
                        href="https://vsuet.ru/abitur/specialties"
                        target="_blank"
                     >
                        https://vsuet.ru/abitur/specialties
                     </a>
                  </p>
               </div>
               <img src={Logo} alt="Logo" />
            </div>
         </div>
         <div className={styles.list}>
            <TestsList tests={[TEST]} />
            <TestsFilters />
         </div>
      </section>
   );
};

export default Home;
