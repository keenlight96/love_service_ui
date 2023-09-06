import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getNewestCCDVs = createAsyncThunk(
    "getNewestCCDVs",
    async (qty) => {
        const res = await customAxios.get("userDetail/newestCCDVs/" + qty, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const getTopMale = createAsyncThunk(
    "getTopMale",
    async (qty) => {
        const res = await customAxios.get("userDetail/get4MaleCCDVs/" +  qty,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)
export const getTopFemale = createAsyncThunk(
    "getTopFemale",
    async (qty) => {
        const res = await customAxios.get("userDetail/get8FemaleCCDVs/" + qty ,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)