import axios from 'axios';
import { LoginPayload } from './userSlice';
const SERVER = 'http://172.31.96.1:3001/'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

function loginAPI(data: LoginPayload) {return axios.post(`${SERVER}users/login`, JSON.stringify(data), { headers })}

// const join = x => axios.post(`${SERVER}/users/join`, JSON.stringify(x), { headers })
// const exist = x => axios.get(`${SERVER}/users/exist/${x}`)
// const modify = x => axios.put(`${SERVER}/users/modify/${x}`)//pk로 찾는거
// const remove = x => axios.delete(`${SERVER}/user/delete/${x}`)
// const list = x => axios.get(`${SERVER}/users/list/${x}`)//page로 찾는거
// const find = x => axios.get(`${SERVER}/users/find/${x}`)



export default {
    loginAPI,
  
}