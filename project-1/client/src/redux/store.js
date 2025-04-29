import {configureStore} from "@reduxjs/toolkit";
import userRedux from "./userRedux";

export default configureStore({
    reducer:{
        user: userRedux,
    },
});