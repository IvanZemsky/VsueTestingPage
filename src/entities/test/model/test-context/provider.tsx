import { PropsWithChildren } from "react";
import { TestContext } from ".";

export const TestContextProvider = ({ children }: PropsWithChildren) => {
   let score = 0

   const increaseScore = (value: number) => {
      score += value
   };

   return (
      <TestContext.Provider value={{ score, increaseScore }}>
         {children}
      </TestContext.Provider>
   );
};


