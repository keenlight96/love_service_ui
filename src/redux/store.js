import {configureStore} from "@reduxjs/toolkit";
import CCDVsSlice from "./CCDVsSlice";
import SupplySlice from "./SupplySlice";
import ChattingSlice from "./ChattingSlice";

export const store = configureStore({
    reducer: {
        CCDVs : CCDVsSlice,
        supplies : SupplySlice,
        chatting : ChattingSlice
    }
})