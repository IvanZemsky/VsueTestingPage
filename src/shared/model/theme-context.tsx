import { createContext, PropsWithChildren, useState } from "react";

type ThemeContextType = {
   theme: "light" | "dark";
   setTheme: (theme: ThemeContextType["theme"]) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
   theme: "light",
   setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
   const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
