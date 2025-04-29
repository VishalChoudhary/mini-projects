//Axios creation for data fetching from backend (cors need to be setup at backend end)

import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDc3OThkNDcwMTY2YjE2ZjY4ZjNmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0NTkxNDQwNiwiZXhwIjoxNzQ2MTczNjA2fQ.SQgYHmftXS_N3MYsjNHZt834t88GQFiBt38tJD0nZ2Q";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token:  `Bearer ${TOKEN}`},
});