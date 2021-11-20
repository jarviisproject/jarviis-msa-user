
import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {
  LoginPayload,
  UserDataPayload,
  loginRequest,
  loginFailure,
  loginSuccess,

} from 'features/user/reducer/userSlice';
import { userAPI } from 'features/user';

// Saga 실행 함수
// 여기서는 밑에 loginRequest의 액션이 인자로 들어옵니다.
function* login(action: PayloadAction<LoginPayload>) {
  try {
    // fork는 비동기 call은 동기
    // fork를 쓰면 불러온것들을 result에 넣어줘야 하는데 바로 다음코드가 실행됨
    // const result = yield call(userAPI.join, action.payload);
    const result:UserDataPayload = yield call(userAPI.loginAPI, action.payload);
    //요청 성공시
    yield put(loginSuccess(result));
  } catch (error: any) {
    // 요청 실패시
    yield put(loginFailure(error));
  }
}

// Watch 함수
export function* watchLogin() {
  yield takeLatest(loginRequest.type, login);
  // loginRequest에서의 type이 실행되면 login함수가 실행되는데
  // loginRequest의 action이 있으면 그 액션이 login함수의 인자로 들어갑니다.
}