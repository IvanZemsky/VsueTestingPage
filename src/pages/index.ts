import { lazy } from "react"

export const Home = lazy(() => import('./home/ui'))
export const Test = lazy(() => import('./test'))
export const Result = lazy(() => import('./result'))