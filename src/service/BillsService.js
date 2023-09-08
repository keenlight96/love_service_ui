import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllBillByIdCCDV = createAsyncThunk(
    "getAllBillByIdCCDV",
    async (idCCDV) => {
        const res = await customAxios.get("bills/getAllBilByIdCCdv/" + idCCDV ,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)

export const getAllBillByIdUser = createAsyncThunk(
    "getAllBillByIDCCDV",
    async (idUser) => {
        const res = await customAxios.get("bills/getAllBilByIdUser/" + idUser ,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)