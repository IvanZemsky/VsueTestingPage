import { ChangeEvent, ComponentProps, useState } from "react";
import styles from "./styles.module.css";
import { SelectContext } from "./context";
import { SelectOption } from "./select-option";
import clsx from "clsx";
import { Button } from "../button";
import { useOutsideClick } from "../../lib/hooks/useOutsideClick";
import { ArrowBottomIcon } from "../icons";

type Props = ComponentProps<"input"> & {
   title: string;
};

export const Select = (props: Props) => {
   const { title, className, name, children, value, onChange } = props;

   const [isOpen, setIsOpen] = useState(false);
   const [label, setLabel] = useState("");

   const selectRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

   const handleOpenClick = () => {
      setIsOpen(!isOpen);
   };

   const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      setIsOpen(false);
   };

   return (
      <div
         className={clsx(styles.wrap, className, {
            [styles.opened]: isOpen,
         })}
         ref={selectRef}
      >
         <Button
            color="secondary"
            onClick={handleOpenClick}
            icon={<ArrowBottomIcon />}
         >
            {label || title}
         </Button>

         {isOpen && (
            <SelectContext.Provider
               value={{ onChange: handleCheck, value, name, setLabel }}
            >
               <div className={styles.options}>{children}</div>
            </SelectContext.Provider>
         )}
      </div>
   );
};

Select.Option = SelectOption;
