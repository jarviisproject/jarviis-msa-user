import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';


//받아오는 데이터
export interface UserDataPayload {
	username: string;
}
//요청하는 데이터
export interface LoginPayload{
	email: string;
  password: string;
}
//미들웨어
export interface UserState {
	userLoading: boolean;
	userData: any;
	error: any;
  }
  // api의 param 타입
  export interface ParamType {
      userId: string;
  }
  const initialState: UserState = {
	userLoading: false,
  userData: null,
  error: null,
  };

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
	   // Login
	   loginRequest(
		state: UserState,
		_action: PayloadAction<LoginPayload>
	  ) {
		state.userLoading = true;
		state.error = null;
	  },
  
	  loginSuccess(state: UserState, action: PayloadAction<UserDataPayload>) {
		state.userLoading = false;
		state.userData = action.payload;
	  },
  
	  loginFailure(state: UserState, action: PayloadAction<{ error: any }>) {
		state.userLoading = false;
		state.error = action.payload;
	  },
    
  },
 

})

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	}
})
export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = userSlice;
export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    } = actions;
export default reducer;
