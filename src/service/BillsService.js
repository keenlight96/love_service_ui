import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllBillByIDCCDV = createAsyncThunk(
    "getAllBillByIDCCDV",
    async (idCCDV) => {
        const res = await customAxios.get("bills/getAllBillIdByAccount/" + idCCDV ,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        console.log(res)
        return res.data;
    }
)