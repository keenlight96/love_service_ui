import {createSlice} from "@reduxjs/toolkit";
import {getAllActiveSupplies, setChosenSupplies} from "../service/SupplyService";
import {getAllSupplies} from "../service/SupplyService";
import {getSupplyByUserID} from "../service/CCDVsService";

const initialState = {
    supplies : {
        all : [],
        chosen : [],
        user:[]
    },
}

const SupplySlice = createSlice({
    name : "supplies",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getAllActiveSupplies.fulfilled, (state, action) => {
            state.supplies.all = action.payload;
        })
        builder.addCase(setChosenSupplies.fulfilled, (state, action) => {
            state.supplies.chosen = action.payload;
        })
        builder.addCase(getSupplyByUserID.fulfilled, (state, action) => {
            state.supplies.user = action.payload;
        })
    }
})

export default SupplySlice.reducer;