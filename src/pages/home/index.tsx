import { Tag } from "@/shared/ui";
import styles from "./styles.module.css";

const Home = () => {
   return (
      <section className={styles.intro}>
         <div className={styles.content}>
            <h1 className={styles.title}>Добро пожаловать! 👋</h1>
            <p className={styles.desc}>
               Наш университет предлагает пройти простой тест на Ваши навыки,
               увлечения и интересы и узнать, подходит ли Вам обучение по
               специальности #09.02.07:
            </p>
            <a
               className={styles.name}
               href="https://vsuet.ru/abitur/specialties/09-02-07"
               target="_blank"
            >
               «Информационные системы и программирование»
            </a>
            <div className={styles.tagsWrap}>
               <div className={styles.tags}>
                  <Tag emoji="🖱️" title="Компьютерное моделирование" />
                  <Tag emoji="💻" title="Программирование" />
                  <Tag emoji="⚙️" title="Автоматизация" />
                  <Tag emoji="🔬" title="Системное мышление" />
               </div>
               <p className={styles.tagsText}>
                  Если Вас интересуют эти навыки и Вы хотите овладеть ими,
                  пройдите тест и убедитесь в правильности своего выбора!
               </p>
            </div>
            <button
               className={styles.startBtn}
            >
               Начать
            </button>
         </div>
      </section>
   );
};

export default Home
