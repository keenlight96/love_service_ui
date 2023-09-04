import {configureStore} from "@reduxjs/toolkit";
import CCDVsSlice from "./CCDVsSlice";

export const store = configureStore({
    reducer: {
        CCDVs : CCDVsSlice,
    }
})