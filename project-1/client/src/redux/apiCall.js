import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = (user) =>async(disptach) =>{
    disptach(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user);
        console.log("Login Response",res.data);
        disptach(loginSuccess(res.data));
    } catch (error) {
        disptach(loginFailure);
    }
};