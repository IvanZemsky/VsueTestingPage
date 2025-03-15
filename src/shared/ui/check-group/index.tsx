import { ComponentProps } from "react";
import { CheckGroupContext } from "./context";
import { CheckGroupItem } from "./check-group-item";

type Props = ComponentProps<"input">;

export const CheckGroup = (props: Props) => {
   const { className, name, children, onChange } = props;

   return (
      <div className={className}>
         <CheckGroupContext.Provider value={{ name, onChange }}>
            {children}
         </CheckGroupContext.Provider>
      </div>
   );
};

CheckGroup.Check = CheckGroupItem;
