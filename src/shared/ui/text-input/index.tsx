import { ComponentProps } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

type Props = {} & ComponentProps<"input">

export const TextInput = (props: Props) => {
   const { className, ...attributes } = props

   return <input className={clsx(styles.input, className)} {...attributes} />
}
