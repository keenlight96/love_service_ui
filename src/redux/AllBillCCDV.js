import {createSlice} from "@reduxjs/toolkit";
import {getAllBillByIDCCDV} from "../service/BillsService";

const initialState = {
    BillByCCDV: {
        allBill : []
    }
}
const BillByCCDV = createSlice({
    name : "BillByCCDV",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getAllBillByIDCCDV.fulfilled, (state, action) => {
            state.BillByCCDV.allBill = action.payload;
        })
    }
})
export default BillByCCDV.reducer