import {getTopMale} from "../service/CCDVsService";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    TopFemaleCCDVs: {
        topFemaleCCDV : []
    }
}
const TopFemaleCCDVsSlice = createSlice({
    name : "TopFemaleCCDVs",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getTopMale.fulfilled, (state, action) => {
            state.TopFemaleCCDVs.topFemaleCCDV = action.payload;
        })
    }
})
export default TopFemaleCCDVsSlice.reducer