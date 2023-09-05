import {createSlice} from "@reduxjs/toolkit";
import {getNewestCCDVs} from "../service/CCDVsService";

const initialState = {
    CCDVs : {
        newestCCDVs : []
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
    }
})

export default CCDVsSlice.reducer;