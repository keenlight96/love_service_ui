import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllActiveSupplies = createAsyncThunk(
    "getAllActiveSupplies",
    async () => {
        const res = await customAxios.get("supplies/getAllActive", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)

export const setChosenSupplies = createAsyncThunk(
    "setChosenSupplies",
    async (supplies) => {
        return supplies;
    }
)