import styles from "./styles.module.css"
import background from "../../assets/img/background.webp";

export const Preview = () => {
   return (
      <div className={styles.preview}>
         <div className={styles.imgWrap}>
            <img
               src={background}
               alt="Учебный корпус ВГУИТ, проспект Революции, 19"
            />
         </div>
         <p className={styles.imgTitle}>
            ВГУИТ — стань инженером своего будущего!
         </p>
      </div>
   );
};