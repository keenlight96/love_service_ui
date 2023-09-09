import {createSlice} from "@reduxjs/toolkit";
import {completes, getAllBillByIdCCDV, getAllBillByIdUser} from "../service/BillsService";

const initialState = {
    BillByAccount: {
        allBillByCCDV : [],
        allBillByUser: [],
        completeString: "",
        receivedBill: ""
    }
}
const  AllBillByAccount= createSlice({
    name : "AllBills",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getAllBillByIdCCDV.fulfilled, (state, action) => {
            state.BillByAccount.allBillByCCDV = action.payload;
        })
        builder.addCase(getAllBillByIdUser.fulfilled, (state, action) => {
            state.BillByAccount.allBillByUser = action.payload;
        })
        builder.addCase(completes.fulfilled, (state, action) => {
            state.BillByAccount.completeString = action.payload;
        })
    }
})
export default AllBillByAccount.reducer