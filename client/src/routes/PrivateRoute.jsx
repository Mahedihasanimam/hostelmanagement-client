import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user}=UseAuth()
    // const navigate=useNavigate()
    const location=useLocation()

    if(user){
       return children
    }
    else{
       return <Navigate state={location?.pathname}  to={'/login'} ></Navigate>
    }
};

export default PrivateRoute;