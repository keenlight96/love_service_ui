import {configureStore} from "@reduxjs/toolkit";
import CCDVsSlice from "./CCDVsSlice";
import SupplySlice from "./SupplySlice";
import BillByCCDV from "./AllBillByAccount";
import AllBillByAccount from "./AllBillByAccount";

export const store = configureStore({
    reducer: {
        CCDVs : CCDVsSlice,
        supplies : SupplySlice,
        BillByAccount: AllBillByAccount
    }
})