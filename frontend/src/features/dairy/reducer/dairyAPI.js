import axios from "axios";
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

const add = x => axios.post(`${SERVER}/dairy/add`,JSON.stringify(x),{headers}) //추가없음
const modify = x => axios.put(`${SERVER}/dairy/modify/${x}`)
const remove = x => axios

export default{
    add,
    modify,

}