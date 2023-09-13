import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllBill = createAsyncThunk(
    "getAllBill",
    async () => {
        const res = await customAxios.get("admin/getAllBills/" , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)

export const getAllUser = createAsyncThunk(
    "getAllUser",
    async () => {
        const res = await customAxios.get("admin/getAllUser/" , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)

export const blockAccount = createAsyncThunk(
    "blockAccount",
    async (account) => {
        const res = await customAxios.post("admin/blockAccount/" , account, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)
export const getAllCCDV = createAsyncThunk(
    "getAllCCDV",
    async () => {
        const res = await customAxios.get("admin/getAllCCDV/" , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)

export const getAccountUserFilter = createAsyncThunk(
    "getAccountUserFilter",
    async (filterUser) => {
        const res = await customAxios.post("admin/getAccountUserFilter/",filterUser , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)
export const getAccountCCDVFilter = createAsyncThunk(
    "getAccountCCDVFilter",
    async (filterCCDV) => {
        const res = await customAxios.post("admin/getAccountCCDVFilter/",filterCCDV , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)
export const activeCCDV = createAsyncThunk(
    "activeCCDV",
    async (usernameCCDV) => {
        const res = await customAxios.post("admin/getAccountCCDVFilter/" + usernameCCDV , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)



