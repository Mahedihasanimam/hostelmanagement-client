import axios from 'axios'

export const AxiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
const UseAxiosSecure = () => {
  AxiosSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('accesstoken')
    if(token){
      config.headers.authorization=`Bearer ${token}`
    return config
    }
  },function(error){
    return Promise.reject(error)
  })

  AxiosSecure.interceptors.response.use(function (response) {
    return response;
  },async(error)=> {
    const status=error.response.status
    
    if(status===401|| status===403){
    alert('unauthorized Access')
    }

    return Promise.reject(error);
  });
  return AxiosSecure
}

export default UseAxiosSecure