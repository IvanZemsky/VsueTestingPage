import styles from "./styles.module.css"
import { TestsFilters } from "./filters"
import { Intro } from "./intro"
import { HomeTestsList } from "./list"
import { TestsFiltersContextProvider } from "../model/filters-context/provider"
import { useState } from "react"
import { Button } from "@/shared/ui"
import clsx from "clsx"
import { useOutsideClick } from "@/shared/lib/hooks/use-outside-click"

const Home = () => {
   const [filtersOpen, setFiltersOpen] = useState(false)

   const filtersRef = useOutsideClick<HTMLDivElement>(() => setFiltersOpen(false))

   const handleFiltersOpenClick = () => {
      setFiltersOpen(true)
   }

   const handleFiltersCloseClick = () => {
      setFiltersOpen(false)
   }

   return (
      <section className={styles.content}>
         <Intro />
         <TestsFiltersContextProvider>
            <div className={styles.list}>
               <div className={styles.testsWrap}>
                  <Button
                     className={styles.openFiltersBtn}
                     onClick={handleFiltersOpenClick}
                     disabled={filtersOpen}
                  >
                     Фильтры
                  </Button>
                  <HomeTestsList />
               </div>
               <div
                  className={clsx(styles.filters, { [styles.opened]: filtersOpen })}
                  ref={filtersRef}
               >
                  <TestsFilters />
                  <Button onClick={handleFiltersCloseClick} className={styles.backBtn}>
                     Назад
                  </Button>
               </div>
            </div>
         </TestsFiltersContextProvider>
      </section>
   )
}

export default Home
