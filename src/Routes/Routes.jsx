import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Component/Home/Home";
import Category from "../Component/Category/Category";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../Component/Pages/Login/Login";
import Ragistration from "../Component/Pages/Ragistration/Ragistration";
// import Catagory from "../Component/catagory/catagory";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path:'catagory/:id',
                loader:()=>fetch('/news.json'),
                HydrateFallback:()=><p>Loading...</p>,
                Component:Category,
            }
        ]
    },
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Ragistration
            }
        ]
    }    
])

export default router;