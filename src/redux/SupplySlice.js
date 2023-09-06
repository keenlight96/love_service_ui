import {createSlice} from "@reduxjs/toolkit";
import {getAllActiveSupplies, setChosenSupplies} from "../service/SupplyService";

const initialState = {
    supplies : {
        all : [],
        chosen : []
    }
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
    }
})

export default SupplySlice.reducer;