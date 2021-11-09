import axios from 'axios';
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : 'JWT fefege..'
}

const login = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x),{headers})

export default{
    login
}