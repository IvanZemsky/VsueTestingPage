import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";
import { Suspense, useContext } from "react";
import styles from "./styles.module.css";
import { Loading, Wrapper } from "@/shared/ui";
import "@/shared/ui/styles/fonts.css";
import "@/shared/ui/styles/wrapper.css";
import "@/shared/ui/styles/_vars.css";
import clsx from "clsx";
import { ThemeContext } from "@/shared/model/theme-context";

export const Layout = () => {
   const {theme} = useContext(ThemeContext);

   return (
      <div className={clsx(styles.app, theme)}>
         <Header />
         <Wrapper>
            <Suspense fallback={<Loading />}>
               <Outlet />
            </Suspense>
         </Wrapper>
         <Footer />
      </div>
   );
};
