import axios from  'axios';

const ApiFormData =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"multipart/form-data",

    },
});
const Api =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",

    },

})



const config ={
    headers:{
        'authorization':`Bearer ${localStorage.getItem("token")}`
    }
}
export const createUserApi =(data) => Api.post("/api/auth/register",data)
export const loginUserApi =(data) => Api.post("/api/auth/login",data)
export const upVoteBlog =(blog_id) => Api.patch(`/api/user/upvote/${blog_id}`)

export const getAllBlogs =async() => { 
    const res = await Api.get("/api/user/get-all-blogs") 
    return res.data.blogs
    };

const WeatherApi = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_API_URL
});

//weather api
export const getLatestWeather = (city) => WeatherApi.get(`/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=yes`);