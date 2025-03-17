import styles from "./styles.module.css"
import { TestsFilters } from "./filters"
import { Intro } from "./intro"
import { HomeTestsList } from "./list"
import { TestsFiltersContextProvider } from "../model/filters-context/provider"

const Home = () => {
   return (
      <section className={styles.content}>
         <Intro />
         <TestsFiltersContextProvider>
            <div className={styles.list}>
               <HomeTestsList />
               <div className={styles.filters}>
                  <TestsFilters />
               </div>
            </div>
         </TestsFiltersContextProvider>
      </section>
   )
}

export default Home
