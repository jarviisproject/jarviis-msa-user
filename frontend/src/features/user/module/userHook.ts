import { RootState } from "../reducer/userSlice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess, loginFailure, LoginPayload } from "../reducer/userSlice";

export default function useUser() {
    const { userLoading } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    
    const login = useCallback((data: LoginPayload) => {
      dispatch(loginRequest(data));
    }, []);
   
  
    return { userLoading, login };
  }