import {createSlice} from "@reduxjs/toolkit";
import {getAllChatReceivers, getChatWithReceiver} from "../service/ChattingService";

const initialState = {
    chatting : {
        receivers : [],
        chatContent : []
    }
}

const ChattingSlice = createSlice({
    name : "chatting",
    initialState,
    reducers : {},
    extraReducers : builder => {
        builder.addCase(getAllChatReceivers.fulfilled, (state, action) => {
            state.chatting.receivers = action.payload;
        })
        builder.addCase(getChatWithReceiver.fulfilled, (state, action) => {
            state.chatting.chatContent = action.payload;
        })
    }
})

export default ChattingSlice.reducer;