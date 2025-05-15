import { element } from "prop-types";
import { HomePage } from "./Pages/HomePage";
import { Products } from "./components/Products";
import { ProductsPage } from "./Pages/ProductsPage";
import { DashboardPages } from "./Pages/DashboardPages";
import { Publications } from "./components/Publication/Publications";

export const route=[
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/products',
        element:<ProductsPage/>
    },
    {
        path:'/dashboard',
        element:<DashboardPages/>,
        children:[
            {
                path:'publications',
                element:<Publications/>
            }

        ]
    }
]