import { configureStore } from "@reduxjs/toolkit";
import terminalReducer from '../slices/terminalSlices';
import loginReducer from '../slices/loginSlices';
import defectReducer from '../slices/defectSlices';
import fontReducer from '../slices/largeFont';
import defectList from '../slices/defectList';

const store = configureStore({
    reducer: {
        terminals:terminalReducer,
        login : loginReducer,
        defect:defectReducer,
        font : fontReducer,
        defectList : defectList
    },
});


export default store;