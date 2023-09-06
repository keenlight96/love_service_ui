import { getTopFemale} from "../service/CCDVsService";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    TopMaleCCDVs: {
        topMaleCCDV : []
    }
}
const TopMaleCCDVsSlice = createSlice({
    name : "TopMaleCCDVs",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getTopFemale.fulfilled, (state, action) => {
            state.TopMaleCCDVs.topMaleCCDV = action.payload;
        })
    }
})
export default TopMaleCCDVsSlice.reducer