import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getNewestCCDVs = createAsyncThunk(
    "getNewestCCDVs",
    async (qty) => {
        const res = await customAxios.get("userDetail/newestCCDVs/" + qty, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)