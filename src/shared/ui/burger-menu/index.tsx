import styles from './styles.module.css'

export const BurgerMenu = ({setOpenedStyle}) => {
  
  return (
    <button className={styles.burger} onClick={setOpenedStyle}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}