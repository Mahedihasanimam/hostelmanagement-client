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
import AllMeal from "../pages/Meals/AllMeal";
import UpCommingMeal from "../pages/upcomming/UpCommingMeal";
import ChackOut from "../pages/Home/membership/ChackOut";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/meals',
          element:<AllMeal/>
        }
        ,{
          path:'/upcommingmeals',
          element:<UpCommingMeal/>
        },
        {
          path:'/bemembar',
          element:<Member/>
        },{
          path:'/chackout/:id',
          element:<ChackOut/>
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