import axios from "axios";

const DEFAULTURL = "https://api-services-delta.vercel.app/";
const LOCALURL = "http://192.168.0.37:3000/";
const ALTERNATIVE = "https://ans-apitech.vercel.app";
// const LOCALURL = "http://192.168.1.65:3000/";

const api = axios.create({
    baseURL: ALTERNATIVE,
});

export default api;