import { ChangeEvent, ComponentProps, Dispatch, SetStateAction } from "react"
import { CheckGroupContext } from "./context"
import { CheckGroupItem } from "./check-group-item"

type Props = ComponentProps<"input"> & {
   setValue: Dispatch<SetStateAction<string[]>>
}

export const CheckGroup = (props: Props) => {
   const { className, name, children, setValue } = props

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target
      if (checked) {
         setValue((prev) => [...prev, value])
      } else {
         setValue((prev) => prev.filter((checkValue) => checkValue !== value))
      }
   }
   return (
      <div className={className}>
         <CheckGroupContext.Provider value={{ name, onChange: handleChange }}>
            {children}
         </CheckGroupContext.Provider>
      </div>
   )
}

CheckGroup.Check = CheckGroupItem
