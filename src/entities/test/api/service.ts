import { API, API_ENDPOINTS } from "@/shared/api"
import { ApiQueryOptions } from "@/shared/api/types"
import { testAdapters } from "./adapters"
import { GetDepartmentDto, GetDirectionDto, GetQuestionDto, GetTestDto } from "./dto"
import { TestId, TestsFilters } from "../model/types"
import { setPath } from "@/shared/lib"

const { Tests, Questions, Departments, Directions } = API_ENDPOINTS

export const testsService = {
   async fetchTests(filters: TestsFilters) {
      const { entranceTests, ...restFilters } = filters
      
      const options: ApiQueryOptions = {
         query: {
            ...restFilters,
            entrance_tests: entranceTests.join(","),
         },
      }

      const response = await API.get<GetTestDto[]>(Tests, options)

      const tests = response.map((test) => testAdapters.test(test))

      return tests
   },

   async fetchQuestionByTestId(testId: TestId) {
      const response = await API.get<GetQuestionDto[]>(setPath(Tests, testId, Questions))

      const question = response.map(testAdapters.question)

      return question
   },

   async fetchDepartments() {
      const response = await API.get<GetDepartmentDto[]>(Departments)

      const departments = response.map(testAdapters.department)

      return departments
   },

   async fetchDirections() {
      const response = await API.get<GetDirectionDto[]>(Directions)

      const directions = response.map(testAdapters.direction)

      return directions
   },
}
