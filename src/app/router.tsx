import { Home } from "../pages/home";
import { Test } from "../pages/test";
import { Result } from "../pages/result";
import { Layout } from "./layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "test",
            element: <Test />,
         },
         {
            path: "result",
            element: <Result />,
         },
      ],
   },
]);
