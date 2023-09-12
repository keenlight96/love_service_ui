import {createSlice} from "@reduxjs/toolkit";
import {getCCDVProperGender, getCCDVsBySupplies, getCCDVsByTopViews, getNewestCCDVs, getTopFemale, getTopMale} from "../service/CCDVsService";

const initialState = {
    CCDVs: {
        newestCCDVs: [],
        properGender: [],
        byChosenSupplies : [],
        topFemaleCCDV : [],
        topMaleCCDV : [],
        topViews: []
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
        builder.addCase(getCCDVProperGender.fulfilled,(state,action)=>{
            state.CCDVs.properGender = action.payload;
        })
        builder.addCase(getTopMale.fulfilled, (state, action) => {
            state.CCDVs.topMaleCCDV = action.payload;
        })
        builder.addCase(getTopFemale.fulfilled, (state, action) => {
            state.CCDVs.topFemaleCCDV = action.payload;
        })
        builder.addCase(getCCDVsByTopViews.fulfilled, (state, action) => {
            state.CCDVs.topViews = action.payload;
        })
    }
})

export default CCDVsSlice.reducer;