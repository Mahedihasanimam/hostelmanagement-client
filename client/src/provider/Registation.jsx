import { Link, useNavigate } from "react-router-dom";
import { MdAddPhotoAlternate } from "react-icons/md";

// hoock form
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import loginimage from "../assets/login_side_imag.svg";
import reglogo from "../assets/logo.png"
import { axiosCommon } from "../hooks/UseAxiosCommon";
const Registation = () => {
    const navigate=useNavigate()
    const {createUser,logout}=useContext(AuthContext)
  // hoock form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  
    const email = data.email;
    if (!emailRegex.test(email)) {
      return toast.error("please provide a valid email");
    }
  
    const password = data.password;
    if (password.length < 6) {
      return toast.error("password should be up to 6 charecter");
    }
   
    createUser(email,password)
    .then(async result=>{
      const userData={
        name:result?.user?.displayName,
        email:result?.user?.email
      }
     const {data}=await axiosCommon.post('/users',userData)
     console.log(data);
        toast.success('regesistration success')
        navigate('/login')
        logout()
        console.log(result)
    })
    .catch(err=>{
        toast.error('something went wrong')
        console.log(err)
    })
  };


  return (
    <div className="flex  mt-28  lg:flex-row md:flex-row flex-col justify-center items-center ">
      <div className="">
        <img src={loginimage} alt="" />
      </div>
      <div className="lg:w-2/3 md:w-2/3">
        <section className="bg-transparent dark:bg-gray-900">
          <div className="container flex items-center justify-start min-h-screen px-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
              <div className="flex justify-center mx-auto">
              <img src={reglogo} alt="" />
               
              </div>

              <div className="">
              

                <a
                 
                  className="w-1/3 pb-4 font-bold text-[#3B82F6] text-center capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
                >
                  sign up
                </a>
              </div>

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="block w-full py-3   border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("username", { required: true })}
                />{" "}
                <br />
              </div>
              {errors.username && (
                <span className="text-red-500">This field is required</span>
              )}
              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  name="email"
                  className="block w-full py-3   border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  name="password"
                  className="block w-full px-10 py-3   border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign Up
                </button>

                <div className="mt-6 text-center ">
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    Already have an account? <Link to={"/login"}>Sign In</Link>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registation;
