import {configureStore} from "@reduxjs/toolkit";
import CCDVsSlice from "./CCDVsSlice";
import SupplySlice from "./SupplySlice";
import TopMaleCCDVsSlice from "./TopMaleCCDVsSlice";
import TopFemaleCCDVsSlice from "./TopFemaleCCDVsSlice";

export const store = configureStore({
    reducer: {
        CCDVs : CCDVsSlice,
        supplies : SupplySlice,
        TopMaleCCDVs: TopMaleCCDVsSlice,
        TopFemaleCCDVs: TopFemaleCCDVsSlice
    }
})