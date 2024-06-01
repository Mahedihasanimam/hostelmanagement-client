import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Member from "../pages/Member/Member";

import Login from "../provider/Login";
import Registation from "../provider/Registation";
import MyProfile from "../components/MyProfile";
import MealDetails from "../pages/Home/MealsByCategory/MealDetails";
import { axiosCommon } from "../hooks/UseAxiosCommon";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
        ,
        {
          path:'/bemembar',
          element:<Member/>
        }
        ,
        {
          path:'/details/:id',
          element:<MealDetails/>,
          loader:({params})=>axiosCommon(`/details/${params.id}`)
        }
    
        ,
        {
          path:'/login',
          element:<Login/>
        }
        ,
        {
          path:'/registation',
          element:<Registation/>
        }
      ]
    },
  ]);

  export default router