import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";

export const login = (user) =>async(disptach) =>{
    disptach(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user);
        console.log("Login Response",res.data);
        disptach(loginSuccess(res.data));
    } catch (error) {
        disptach(loginFailure());
    }
};

export const register = (user) => async(disptach)=>{
    disptach(registerStart());
    try {
        const res = await publicRequest.post("/auth/register",user);
        disptach(registerSuccess(res.data));
        //automatically login user after register
        disptach(loginSuccess(res.data));
    } catch (error) {
        disptach(registerFailure());
    }
}