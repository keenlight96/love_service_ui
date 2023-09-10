import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllChatReceivers = createAsyncThunk(
    "getAllChatReceivers",
    async (id) => {
        const res = await customAxios.get("accounts/messageReceivers", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)

export const getChatWithReceiver = createAsyncThunk(
    "getChatWithReceiver",
    async (id) => {
        const res = await customAxios.get("message/allBySenderAndReceiver/" + id, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)