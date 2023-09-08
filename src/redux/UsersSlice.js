import {createSlice} from "@reduxjs/toolkit";
import {getCCDVProperGender, getCCDVsBySupplies, getNewestCCDVs} from "../service/CCDVsService";

const initialState = {
    Users: {
        allBillByUser: []

    }
}

const UsersSlice = createSlice({
    name : "Users",
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getCCDVsBySupplies.fulfilled, (state, action) => {
            state.CCDVs.byChosenSupplies = action.payload;
        })
    }
})
export default UsersSlice;