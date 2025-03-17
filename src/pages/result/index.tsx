import { TestId } from "@/entities/test"
import { ResultCounter } from "@/features/test"
import { useParams } from "react-router"

const Result = () => {
   const { testId } = useParams<{ testId: TestId }>()

   const localStorageScore: Record<TestId, { score: number; maxScore: number }> =
      JSON.parse(localStorage.getItem("results") || "{}")

   if (!testId) {
      return <p>Произошла ошибка</p>
   }

   const result = localStorageScore[testId]

   if (!result) {
      return <p>Вы еще не прошли этот тест</p>
   }

   const resultScore = localStorageScore[testId].score
   const resultMaxScore = localStorageScore[testId].maxScore

   return (
      <div>
         <ResultCounter
            percentResult={Math.round((resultScore * 100) / resultMaxScore)}
         />
      </div>
   )
}

export default Result
