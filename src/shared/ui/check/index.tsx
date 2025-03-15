import { ComponentProps } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export type CheckProps = ComponentProps<"input"> & {
   label?: string;
};

export const Check = ({ label, id, className, ...attrs }: CheckProps) => {
   return (
      <div className={clsx(styles.check, className)}>
         <input
            type="checkbox"
            id={id}
            value={attrs.value}
            name={attrs.name}
            {...attrs}
         />
         {label && <label htmlFor={id}>{label}</label>}
      </div>
   );
};
