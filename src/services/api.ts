import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN}/api`
})

export default api;