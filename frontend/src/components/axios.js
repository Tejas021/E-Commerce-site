import Axios from 'axios'


const BASE_URL="http://localhost:5000/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGEyNTJkYTQwMzg5YTY2NjZkYWNhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQ2MjcxNiwiZXhwIjoxNjM2NzIxOTE2fQ.yqXs-jezFGKhuj74PCFnQV6-DyMLHQoAwaJpTd_onnc"
export const publicRequest= Axios.create({
 baseURL: BASE_URL
})


export const userRequest= Axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
   })
