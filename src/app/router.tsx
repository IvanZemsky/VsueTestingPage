import {Home, Test, Result} from "@/pages"
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
            path: "tests/:id",
            element: <Test />,
         },
         {
            path: "result",
            element: <Result />,
         },
      ],
   },
]);
