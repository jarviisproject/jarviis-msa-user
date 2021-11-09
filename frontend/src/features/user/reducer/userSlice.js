import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const LOGIN = async (x) => {
    const res = await userAPI.login(x)
    return res.data
}

export const login = createAsyncThunk('users/login', LOGIN)

const changeNull = ls =>{
    for(const i of ls ){
      document.getElementById(i).value = ''
    }
  }  //모르겠음 ㅎㅎ...

  const userSlice = createSlice({
    name: 'users',
    initialState: {
      userState: {username:'', password:'', email:'', name:'', regDate: ''},
      usersState: [],
      type: '',
      keyword: '',
      params: {}
    },
    reducers:{},
    extraReducers:{
        [login.fulfilled]: ( state, {meta, payload} ) => {
            state.userState = payload
            window.localStorage.setItem('sessionUser', JSON.stringify(payload))
            if(payload.username != null){
              alert(`${payload.name}님 환영합니다`)
              window.location.href = `/users/home`
            }else{
              alert('아이디, 비번 오류로 로그인 실패  ')
              changeNull(['username','password'])
            }
          }
        }
    })
export const currentUserState = state => state.users.userState
export const currentUsersState = state => state.users.usersState
export const currentUserParam = state => state.users.param
export default userSlice.reducer;