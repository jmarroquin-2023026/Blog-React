import { element } from "prop-types";
import { HomePage } from "./Pages/HomePage";
import { DashboardPages } from "./Pages/DashboardPages";
import { Publications } from "./components/Publication/Publications";
import { CommentsPage } from "./Pages/CommentsPage";

export const route = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/dashboard',
        element: <DashboardPages/>,
        children: [
            {
                path: 'publications',
                element: <Publications/>,
            },
            {
                // Ruta corregida para aceptar el patrón /publications/:id/comments
                path: 'publications/comments/:id',
                element: <CommentsPage/>
            }
        ]
    }
]