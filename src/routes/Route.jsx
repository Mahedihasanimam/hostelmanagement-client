import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Member from "../pages/Member/Member";

import Login from "../provider/Login";
import Registation from "../provider/Registation";
import MyProfile from "../components/MyProfile";

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
          path:'/myprofile',
          element:<MyProfile/>
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