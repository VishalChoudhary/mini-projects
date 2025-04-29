import {configureStore} from "reduxks/toolkit";
import userRedux from "./userRedux";

export default configureStore({
    reducer:{
        user: userRedux,
    },
});