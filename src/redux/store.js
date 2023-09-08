import {configureStore} from "@reduxjs/toolkit";
import CCDVsSlice from "./CCDVsSlice";
import SupplySlice from "./SupplySlice";
import BillByCCDV from "./AllBillCCDV";

export const store = configureStore({
    reducer: {
        CCDVs : CCDVsSlice,
        supplies : SupplySlice,
        BillByCCDV: BillByCCDV
    }
})