import type { ComponentType, JSX } from "react"
import { IndexPage } from "../pages/IndexPage/IndexPage";
import { LearnPage } from "../pages/LearnPage/LearnPage";


interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element
}

export const routes: Route[] = [
    { path: "/", Component: IndexPage },
    { path: "/learn-page", Component: LearnPage },
] 