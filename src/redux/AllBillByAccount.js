import {createSlice} from "@reduxjs/toolkit";
import {
    cancelBill,
    completes,
    getAllBillByIdCCDV,
    getAllBillByIdUser, getAllBillIn7DayByCCDV,
    receivedBill,
    setCancelBill
} from "../service/BillsService";

const initialState = {
    BillByAccount: {
        allBillByCCDV: [],
        allBillByUser: [],
        completeString: '',
        receivedBill: '',
        cancelBill: '',
        bill7DayByCCDV:[]
    }
}
const AllBillByAccount = createSlice({
    name: "AllBills",
    initialState,
    reducers: {},
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
        builder.addCase(cancelBill.fulfilled, (state, action) => {
            state.BillByAccount.cancelBill = action.payload;
        })
        builder.addCase(setCancelBill.fulfilled, (state, action) => {
            state.BillByAccount.cancelBill = action.payload;
        })
        builder.addCase(receivedBill.fulfilled, (state, action) => {
            state.BillByAccount.receivedBill = action.payload;
        })
        builder.addCase(getAllBillIn7DayByCCDV.fulfilled,(state, action)=>{
            state.BillByAccount.bill7DayByCCDV=action.payload;
        })
    }
})
export default AllBillByAccount.reducer