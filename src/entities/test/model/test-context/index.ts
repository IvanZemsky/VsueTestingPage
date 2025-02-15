import { useContext, createContext } from "react";

type TestContext = {
   score: number;
   increaseScore: (value: number) => void;
};

export const TestContext = createContext<TestContext>({
   score: 0,
   increaseScore: () => {},
});

export function useTestContext() {
   const testContext = useContext(TestContext);

   if (!testContext) {
      throw new Error(
         "useTestContext must be used within a TestContextProvider"
      );
   }

   return testContext;
}
