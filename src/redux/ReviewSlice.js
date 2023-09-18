import {createSlice} from "@reduxjs/toolkit";
import {getAllReviewsByProviderUsername} from "../service/ReviewService";

const initialState = {
    reviews: {
        byProviderUsername: []
    }
}

const ReviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllReviewsByProviderUsername.fulfilled, (state, action) => {
            state.reviews.byProviderUsername = action.payload;
        })
    }
})

export default ReviewSlice.reducer;