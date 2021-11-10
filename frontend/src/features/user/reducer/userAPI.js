import axios from 'axios';
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : 'JWT fefege..'
}

const login = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x),{headers})
const join = x => axios.post(`${SERVER}/users/join`,JSON.stringify(x),{headers})
const exist = x => axios.get(`${SERVER}/users/exist/${x}`)
const modify = x => axios.get(`${SERVER}/users/modify/${x}`)


export default{
    login,
    join,
    exist,
    modify
}