import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "../pages/Home"
import JSXRendering from "../pages/jsx/JSXRendering"
import UseState from "../pages/state/UseState"
import PropsAndChildren from "../pages/props/PropsAndChildren"
import PropDrillingExample from "../pages/context/PropDrillingExample"
import ContextExample from "../pages/context/ContextExample"
import UseEffect from "../pages/effects/UseEffect"
import DataFetching from "../pages/effects/DataFetching"
import UseRef from "../pages/hooks/UseRef"
import UseMemo from "../pages/hooks/UseMemo"
import UseContext from "../pages/hooks/UseContext"

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/jsx", element: <JSXRendering /> },
            { path: "/state", element: <UseState /> },
            { path: "/props", element: <PropsAndChildren /> },
            { path: "/prop-drilling", element: <PropDrillingExample />, },
            { path: "/context", element: <ContextExample />, },
            { path: "/use-effect", element: <UseEffect /> },
            { path: "/data-fetching", element: <DataFetching /> },
            { path: "/use-ref", element: <UseRef /> },
            { path: "/use-memo", element: <UseMemo /> },
            { path: "/use-context", element: <UseContext /> },
        ],
    },
])
