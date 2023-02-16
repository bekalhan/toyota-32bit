import { configureStore } from "@reduxjs/toolkit";
import terminalReducer from '../slices/terminalSlices';
import loginReducer from '../slices/loginSlices';
import errorReducer from '../slices/errorSlices';

const store = configureStore({
    reducer: {
        terminals:terminalReducer,
        login : loginReducer,
        error:errorReducer
    },
});


export default store;