import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { ImSpinner9 } from "react-icons/im";


const PrivateRoute = ({children}) => {
    const {user,loder}=UseAuth()
    // const navigate=useNavigate()
    const location=useLocation()
if(loder){
    return <ImSpinner9
    size={40}
    className=" animate-spin absolute top-1/2 left-1/2 text-[#60A5FA]  "
  />
  }
    if(user){
       return children
    }
    else{
       return <Navigate state={location?.pathname}  to={'/login'} ></Navigate>
    }
};

export default PrivateRoute;