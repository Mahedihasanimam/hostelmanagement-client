import axios from "axios"
const AxiosSecure=axios.create({
    baseURL:process.env.VITE_API_URL
})
const UseAxiosSecure = () => {
    AxiosSecure
};

export default UseAxiosSecure;