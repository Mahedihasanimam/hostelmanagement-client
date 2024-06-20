import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Member from "../pages/Member/Member";

import Login from "../provider/Login";
import Registation from "../provider/Registation";
import MyProfile from "../pages/dashboard/userMenu/userprofile/MyProfile";
import MealDetails from "../pages/Home/MealsByCategory/MealDetails";
import { axiosCommon } from "../hooks/UseAxiosCommon";
import AllMeal from "../pages/Meals/AllMeal";
import UpCommingMeal from "../pages/upcomming/UpCommingMeal";
import ChackOut from "../pages/Home/membership/ChackOut";
import Dashboard from "../pages/dashboard/Dashboard";
import MyReviews from "../pages/dashboard/userMenu/myreview/MyReviews";
import EditReview from "../pages/dashboard/userMenu/myreview/EditReview";
import PaymentHistory from "../pages/dashboard/userMenu/payment/PaymentHistory";
import ErrorPage from "../pages/error page/ErrorPage";
import RequestedMeal from "../pages/dashboard/userMenu/requestedmeals/RequestedMeal";
import ManageUser from "../pages/dashboard/AdminMenu/ManageUser";
import AddMeal from "../pages/dashboard/AdminMenu/addmeal/AddMeal";
import Allmeals from "../pages/dashboard/AdminMenu/allmeal/Allmeals";
import Allreview from "../pages/dashboard/AdminMenu/allreview/Allreview";
import Servemeal from "../pages/dashboard/AdminMenu/servemeal/Servemeal";
import PrivateRoute from "./PrivateRoute";
import UpdateMeal from "../pages/dashboard/AdminMenu/allmeal/editmeal/UpdateMeal";
import { AxiosSecure } from "../hooks/UseAxiosSecure";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meals",
        element: <AllMeal />,
      },
      {
        path: "/upcommingmeals",
        element: <UpCommingMeal />,
      },
      {
        path: "/bemembar",
        element: <Member />,
      },
      {
        path: "/chackout/:id",
        element: <PrivateRoute><ChackOut /></PrivateRoute>,
        loader: ({ params }) => axiosCommon(`/membership/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <MealDetails />,
        loader: ({ params }) => axiosCommon(`/details/${params.id}`),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registation",
        element: <Registation />,
      },
    ],
  },
  //user dashboard-------------------------------------------
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "",
        element: <MyProfile />,
      },
      {
        path: "myreview",
        element: <MyReviews />,
      },
      {
        path: "editreview/:id",
        element: <EditReview />,
        loader: ({ params }) => axiosCommon(`/myreview/${params.id}`),
      }
      ,
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      }
      ,
      {
        path: "requestedmeals",
        element: <RequestedMeal />,
      }
      ,
      
    ],
  },
  // admin dashboard -----------------------------------------
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'ManageUsers',
        element:<AdminRoute><ManageUser/></AdminRoute>
      }
      ,
      {
        path:'addmeal',
        element:<AdminRoute><AddMeal/></AdminRoute>
      }
      
      ,
      {
        path:'allmeals',
        element:<AdminRoute><Allmeals/></AdminRoute>
      }
      
      ,
      {
        path:'allreview',
        element:<AdminRoute><Allreview/></AdminRoute>
      }
      ,
      {
        path:'servemeal',
        element:<AdminRoute><Servemeal/></AdminRoute>
      }
      ,
      {
        path:'updatemeal/:id',
        element:<AdminRoute><UpdateMeal/></AdminRoute>,
        loader:async({params})=>await AxiosSecure(`/meal/${params.id}`)
        
      }
      
    ]
  }
]);

export default router;
