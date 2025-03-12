import { API, API_ENDPOINTS } from "@/shared/api";
import { Test } from "../model/types";
import { ApiQueryOptions } from "@/shared/api/types";

const { Tests } = API_ENDPOINTS;

export const testsService = {
   async getTests() {
      const options: ApiQueryOptions = {
         query: {
            department: "TEST_DEPARTMENT",
            limit: 10
         },
      };

      const tests = await API.get<Test[]>(Tests, options);

      return tests;
   },
};
