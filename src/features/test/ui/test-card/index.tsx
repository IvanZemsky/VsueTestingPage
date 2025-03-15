import { Test } from "@/entities/test";
import styles from "./styles.module.css";
import { EyeIcon } from "@/shared/ui/icons";
import { Link } from "react-router";

type Props = {
   data: Test;
};
export const TestCard = ({ data }: Props) => {
   const { name, description, img, tags, specializationCode, passes } = data;

   return (
      <Link to={`/tests/${data.id}`} className={styles.content}>
         <div className={styles.imgWrap}>
            <img src={img} alt={`Cover of test "${name}"`} />
         </div>
         <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>

            <div className={styles.detailedPanel}>
               <div className={styles.specializationCode}>
                  #{specializationCode}
               </div>
               <div className={styles.passes}>
                  <EyeIcon />
                  <p>{passes}</p>
               </div>
            </div>

            <div className={styles.tags}>
               {tags.map((tag) => (
                  <p className={styles.tag} key={tag.name}>
                     {tag.emoji}
                  </p>
               ))}
            </div>
         </div>
      </Link>
   );
};
