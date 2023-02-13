import { configureStore } from "@reduxjs/toolkit";
import terminalReducer from '../slices/terminalSlices';
import loginReducer from '../slices/loginSlices';

const store = configureStore({
    reducer: {
        terminals:terminalReducer,
        login : loginReducer
    },
});


export default store;