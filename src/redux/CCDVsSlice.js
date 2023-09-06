import {createSlice} from "@reduxjs/toolkit";
import {getCCDVsBySupplies, getNewestCCDVs} from "../service/CCDVsService";

const initialState = {
    CCDVs : {
        newestCCDVs : [],
        byChosenSupplies : []
    }
}

const CCDVsSlice = createSlice({
    name : "CCDVs",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getNewestCCDVs.fulfilled, (state, action) => {
            state.CCDVs.newestCCDVs = action.payload;
        })
        builder.addCase(getCCDVsBySupplies.fulfilled, (state, action) => {
            state.CCDVs.byChosenSupplies = action.payload;
        })
    }
})

export default CCDVsSlice.reducer;