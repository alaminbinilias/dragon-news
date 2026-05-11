import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Component/Home/Home";
import Category from "../Component/Category/Category";
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
    }
])

export default router;