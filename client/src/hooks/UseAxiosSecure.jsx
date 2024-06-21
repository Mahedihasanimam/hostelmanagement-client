import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UseAuth from './UseAuth'
import { useEffect } from 'react'

export const AxiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
const UseAxiosSecure = () => {
  const {logout}=UseAuth()
  AxiosSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('accesstoken')
 
    config.headers.authorization=`Bearer ${token}`
    return config
  },function(error){
    return Promise.reject(error)
  })

  AxiosSecure.interceptors.response.use(function (response) {
    return response;
  },async(error)=> {
    const status=error.response.status
    
    // if(status===302){
    //   navigate('/login')
    // }
    if(status===401|| status===403){
     await logout()
      navigate('/login')
    }

    return Promise.reject(error);
  });
  return AxiosSecure
}

export default UseAxiosSecure