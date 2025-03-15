import { API, API_ENDPOINTS } from "@/shared/api";
import { ApiQueryOptions } from "@/shared/api/types";
import { testAdapters } from "./adapters";
import { GetQuestionDto, GetTestDto } from "./dto";
import { TestId } from "../model/types";
import { setPath } from "@/shared/lib";

const { Tests, Questions } = API_ENDPOINTS;

export const testsService = {
   async fetchTests() {
      const options: ApiQueryOptions = {
         query: {
            department: "TEST_DEPARTMENT",
            limit: 10,
         },
      };

      const response = await API.get<GetTestDto[]>(Tests, options);

      const tests = response.map((test) => testAdapters.test(test));

      return tests;
   },

   async fetchQuestionByTestId(testId: TestId) {
      const response = await API.get<GetQuestionDto>(
         setPath(Tests, testId, Questions)
      );

      const question = testAdapters.question(response);

      return question;
   },
};
