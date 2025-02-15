import { TEST_RESULTS } from "../../entities/test/constants/test-results";

export function getTextResult(percentResult: number) {
   for (const [key, value] of Object.entries(TEST_RESULTS)) {
      if (percentResult <= +key) {
         return value;
      }
   }
}
