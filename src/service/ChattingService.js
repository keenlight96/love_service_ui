import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllChatReceivers = createAsyncThunk(
    "getAllChatReceivers",
    async (id) => {
        const res = await customAxios.get("accounts/messageReceivers", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)

export const addChatReceivers = createAsyncThunk(
    "addChatReceivers",
    async (receivers) => {
        return receivers;
    }
)

export const getChatWithReceiver = createAsyncThunk(
    "getChatWithReceiver",
    async (id) => {
        const res = await customAxios.get("message/allBySenderAndReceiver/" + id, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)

export const setChatWithReceiver = createAsyncThunk(
    "setChatWithReceiver",
    async (chatContent) => {
        return chatContent;
    }
)

export const addChatWithReceiver = createAsyncThunk(
    "addChatWithReceiver",
    async (newMessage) => {
        return newMessage;
    }
)

export const setMsgBoxToggle = createAsyncThunk(
    "setMsgBoxToggle",
    async () => {
        return null;
    }
)

export const setActiveReceiver = createAsyncThunk(
    "setActiveReceiver",
    async (activeReceiver) => {
        return activeReceiver;
    }
)