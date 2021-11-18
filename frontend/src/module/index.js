import { combineReducers } from "redux";
import { all } from "redux-saga/effects"
import { userAPI } from "features/user";

const rootReducer = combineReducers({
    userAPI,
})

export function* rootSaga() {
    yield all([user()])
}
export default rootReducer