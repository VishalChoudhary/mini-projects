import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers:{
        //Login reducres
        loginStart:(state)=>{
            state.isFetching = true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        //Register reducers
        registerStart: (state) =>{
            state.isFetching = true;
        },
        registerSuccess:(state,action) =>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        registerFailure:(state) =>{
            state.isFetching = false;
            state.error = true;
        },
        logout:(state) =>{
            state.isFetching = false;
            state.currentUser = null;
            state.error = false;
        },
    },
});

export const {loginStart,loginSuccess,loginFailure,
    registerStart,registerSuccess,registerFailure,
    logout
} = userSlice.actions;

export default userSlice.reducer;