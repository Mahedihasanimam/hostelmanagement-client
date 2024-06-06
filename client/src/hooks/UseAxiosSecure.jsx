import axios from 'axios'

export const AxiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
const UseAxiosSecure = () => {
  return AxiosSecure
}

export default UseAxiosSecure