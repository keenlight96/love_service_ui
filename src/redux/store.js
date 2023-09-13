import {configureStore} from "@reduxjs/toolkit";
import CCDVsSlice from "./CCDVsSlice";
import SupplySlice from "./SupplySlice";
import BillByCCDV from "./AllBillByAccount";
import AllBillByAccount from "./AllBillByAccount";
import ChattingSlice from "./ChattingSlice";
import AdminSlice from "./AdminSlice";

export const store = configureStore({
    reducer: {
        CCDVs : CCDVsSlice,
        supplies : SupplySlice,
        chatting : ChattingSlice,
        BillByAccount: AllBillByAccount,
        admin: AdminSlice
    }
})