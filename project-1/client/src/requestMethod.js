//Axios creation for data fetching from backend (cors need to be setup at backend end)

import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const createUserRequest = (token) => axios.create({
    baseURL : BASE_URL,
    headers : {token:  `Bearer ${token}`},
});