import {configureStore} from "@reduxjs/toolkit";
import CCDVsSlice from "./CCDVsSlice";
import SupplySlice from "./SupplySlice";
import BillByCCDV from "./AllBillByAccount";
import AllBillByAccount from "./AllBillByAccount";
import ChattingSlice from "./ChattingSlice";
import UserSlice from "./UserSlice";
import ReviewSlice from "./ReviewSlice";

export const store = configureStore({
    reducer: {
        CCDVs : CCDVsSlice,
        supplies : SupplySlice,
        chatting : ChattingSlice,
        BillByAccount: AllBillByAccount,
        user : UserSlice,
        reviews : ReviewSlice,
    }
})