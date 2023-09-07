import {createSlice} from "@reduxjs/toolkit";
import {getAllSupplies} from "../service/SupplyService";
import {getSupplyByUserID} from "../service/CCDVsService";

const initialState = {
    supplies: {
        all: [],
        user:[]
    },
}

const SupplySlice = createSlice({
    name: "supplies",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllSupplies.fulfilled, (state, action) => {
            state.supplies.all = action.payload;
        })
        builder.addCase(getSupplyByUserID.fulfilled, (state, action) => {
            state.supplies.user = action.payload;
        })
    }
})

export default SupplySlice.reducer;