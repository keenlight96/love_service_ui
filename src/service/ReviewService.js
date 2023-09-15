import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllReviewsByProviderUsername = createAsyncThunk(
    "getAllReviewsByProviderUsername",
    async (username) => {
        const res = await customAxios.get("reviews/allActiveByCCDV_Username/" + username,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)