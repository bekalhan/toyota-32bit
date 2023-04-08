import { configureStore } from "@reduxjs/toolkit";
import terminalReducer from '../slices/terminalSlices';
import loginReducer from '../slices/loginSlices';
import errorReducer from '../slices/errorSlices';
import fontReducer from '../slices/largeFont';
import errorList from '../slices/errorList';

const store = configureStore({
    reducer: {
        terminals:terminalReducer,
        login : loginReducer,
        error:errorReducer,
        font : fontReducer,
        errorList : errorList
    },
});


export default store;