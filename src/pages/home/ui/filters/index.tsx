import { Button, CheckGroup, TextInput } from "@/shared/ui"
import styles from "./styles.module.css"
import { SearchIcon } from "@/shared/ui/icons"
import { Select } from "@/shared/ui"
import { ChangeEvent, useState } from "react"

export const TestsFilters = () => {
   const [value, setValue] = useState("")
   const [entranceTests, setEntranceTests] = useState<string[]>([])
   const [directions, setDirections] = useState<string[]>([])

   const handleEntranceTestChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target
      if (checked) {
         setEntranceTests([...entranceTests, value])
      } else {
         setEntranceTests(entranceTests.filter((test) => test !== value))
      }
   }

   const handleDirectionsChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target
      if (checked) {
         setDirections([...directions, value])
      } else {
         setDirections(directions.filter((test) => test !== value))
      }
   }

   return (
      <form className={styles.filters}>
         <div className={styles.searchInput}>
            <TextInput placeholder="Поиск" />
            <Button type="submit">
               <SearchIcon />
            </Button>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Направление</p>
            <Select
               className={styles.select}
               title="Все направления"
               name="filters"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            >
               <Select.Option text="Short" value="short" id="length_short" />
               <Select.Option text="Medium" value="medium" id="length_medium" />
               <Select.Option text="Long" value="long" id="length_long" />
               <Select.Option text="Short" value="short" id="length_short" />
               <Select.Option text="Medium" value="medium" id="length_medium" />
               <Select.Option text="Long" value="long" id="length_long" />
            </Select>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Вступительные испытания</p>
            <CheckGroup
               onChange={handleEntranceTestChange}
               className={styles.entranceTestsColumns}
            >
               <div>
                  <CheckGroup.Check label="Химия" value="chemistry" id="chemistry" />
                  <CheckGroup.Check label="Физика" value="physics" id="physics" />
                  <CheckGroup.Check label="Биология" value="biology" id="biology" />
                  <CheckGroup.Check label="Математика" value="math" id="math" />
                  <CheckGroup.Check
                     label="Информатика"
                     value="imformatics"
                     id="imformatics"
                  />
               </div>
               <div>
                  <CheckGroup.Check
                     label="Обществознание"
                     value="social-studies"
                     id="social-studies"
                  />
                  <CheckGroup.Check label="История" value="history" id="history" />
                  <CheckGroup.Check label="География" value="geography" id="geography" />
                  <CheckGroup.Check label="Русский язык" value="russian" id="russian" />
                  <CheckGroup.Check
                     label="Английский язык"
                     value="english"
                     id="english"
                  />
               </div>
            </CheckGroup>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Факультет</p>
            <Select
               className={styles.select}
               title="Все факультеты"
               name="filters"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            >
               <Select.Option text="Short" value="short" id="length_short" />
               <Select.Option text="Medium" value="medium" id="length_medium" />
               <Select.Option text="Long" value="long" id="length_long" />
               <Select.Option text="Short" value="short" id="length_short" />
               <Select.Option text="Medium" value="medium" id="length_medium" />
               <Select.Option text="Long" value="long" id="length_long" />
            </Select>
         </div>
         <div className={styles.filterBlock}>
            <p className={styles.filterName}>Квалификация</p>
            <Select
               className={styles.select}
               title="Любая квалификация"
               name="filters"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            >
               <Select.Option text="Short" value="short" id="length_short" />
               <Select.Option text="Medium" value="medium" id="length_medium" />
               <Select.Option text="Long" value="long" id="length_long" />
            </Select>
         </div>
      </form>
   )
}
