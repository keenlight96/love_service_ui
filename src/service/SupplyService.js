import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllSupplies = createAsyncThunk(
    "getAllSupplies",
    async () => {
        const res = await customAxios.get("supplies/getAll", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)