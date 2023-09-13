import {createSlice} from "@reduxjs/toolkit";
import {checkToken, setUser} from "../service/UserService";

const initialState = {
    user: {
        current: null
    }
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(checkToken.fulfilled, (state, action) => {
            state.user.current = action.payload;
        })
        builder.addCase(setUser.fulfilled, (state, action) => {
            state.user.current = action.payload;
        })
    }
})

export default UserSlice.reducer;