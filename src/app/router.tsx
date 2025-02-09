import {Home, Test, Result} from "@/pages/lazy"
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
