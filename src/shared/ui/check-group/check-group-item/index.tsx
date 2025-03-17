import { Check, CheckProps } from "../../check"
import { useCheckGroupContext } from "../context"

export const CheckGroupItem = (props: CheckProps) => {
   const { name, onChange } = useCheckGroupContext()

   return <Check name={name} onChange={onChange} {...props} />
}
