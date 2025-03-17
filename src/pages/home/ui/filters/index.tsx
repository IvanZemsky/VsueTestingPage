import { Button, CheckGroup, TextInput } from "@/shared/ui"
import styles from "./styles.module.css"
import { SearchIcon } from "@/shared/ui/icons"
import { Select } from "@/shared/ui"
import { qualificationFilter, subjectsFilter } from "../../constants/filters"
import { useFiltersForm } from "../../lib/useFiltersForm"

export const TestsFilters = () => {
   const {
      searchRef,
      handleSubmit,
      qualification,
      direction,
      department,
      entranceTests,
   } = useFiltersForm()

   const firstSubjectColumn = subjectsFilter.slice(0, subjectsFilter.length / 2)
   const secondSubjectColumn = subjectsFilter.slice(
      subjectsFilter.length / 2,
      subjectsFilter.length,
   )

   return (
      <form className={styles.filters} onSubmit={handleSubmit}>
         <div className={styles.searchInput}>
            <TextInput placeholder="Поиск" ref={searchRef} />
            <Button type="submit">
               <SearchIcon />
            </Button>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Направление</p>
            <Select
               className={styles.select}
               title="Все направления"
               name="direction"
               value={direction.value}
               onChange={direction.handler}
            >
               {direction.query.data &&
                  direction.query.data.map((direction) => (
                     <Select.Option
                        key={direction.id}
                        text={direction.name}
                        value={direction.id}
                        id={direction.id}
                     />
                  ))}
            </Select>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Вступительные испытания</p>
            <CheckGroup
               setValue={entranceTests.set}
               className={styles.entranceTestsColumns}
            >
               <div>
                  {firstSubjectColumn.map((subject) => (
                     <CheckGroup.Check
                        key={subject.id}
                        label={subject.label}
                        value={subject.value}
                        id={subject.id}
                     />
                  ))}
               </div>
               <div>
                  {secondSubjectColumn.map((subject) => (
                     <CheckGroup.Check
                        key={subject.id}
                        label={subject.label}
                        value={subject.value}
                        id={subject.id}
                     />
                  ))}
               </div>
            </CheckGroup>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Факультет</p>
            <Select
               className={styles.select}
               title="Все факультеты"
               name="department"
               value={department.value}
               onChange={department.handler}
            >
               {department.query.data &&
                  department.query.data.map((department) => (
                     <Select.Option
                        key={department.id}
                        text={department.name}
                        value={department.id}
                        id={department.abbreviation}
                     />
                  ))}
            </Select>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Квалификация</p>
            <Select
               className={styles.select}
               title="Любая квалификация"
               name="qualification"
               value={qualification.value}
               onChange={qualification.handler}
            >
               {qualificationFilter.map((qualification) => (
                  <Select.Option
                     key={qualification.id}
                     text={qualification.label as string}
                     value={qualification.value}
                     id={qualification.id}
                  />
               ))}
            </Select>
         </div>
      </form>
   )
}
