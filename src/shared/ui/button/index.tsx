import { ComponentProps, ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
   icon?: ReactNode;
} & ComponentProps<"button">;

export const Button = ({
   icon,
   children,
   className,
   type = "button",
   ...attributes
}: Props) => {
   return (
      <button
         className={clsx(styles.button, className)}
         type={type}
         {...attributes}
      >
         {children}
         {icon}
      </button>
   );
};
