import styles from "./styles.module.css"
import { TestsFilters } from "./filters"
import { Intro } from "./intro"
import { HomeTestsList } from "./list"

const Home = () => {
   return (
      <section className={styles.content}>
         <Intro />
         <div className={styles.list}>
            <HomeTestsList />
            <div className={styles.filters}>
               <TestsFilters />
            </div>
         </div>
      </section>
   )
}

export default Home
