import {createSlice} from "@reduxjs/toolkit";
import {getAllSupplies} from "../service/SupplyService";

const initialState = {
    supplies : {
        all : []
    }
}

const SupplySlice = createSlice({
    name : "supplies",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getAllSupplies.fulfilled, (state, action) => {
            state.supplies.all = action.payload;
        })
    }
})

export default SupplySlice.reducer;