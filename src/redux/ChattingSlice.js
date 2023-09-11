import {createSlice} from "@reduxjs/toolkit";
import {
    addChatReceivers, addChatWithReceiver,
    getAllChatReceivers,
    getChatWithReceiver,
    setActiveReceiver,
    setChatWithReceiver,
    setMsgBoxToggle
} from "../service/ChattingService";

const initialState = {
    chatting : {
        receivers : [],
        chatContent : [],
        msgBoxToggle : false,
        activeReceiver: {}
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
        builder.addCase(addChatReceivers.fulfilled, (state, action) => {
            state.chatting.receivers = [action.payload, ...state.chatting.receivers];
            console.log(state.chatting.receivers);
        })
        builder.addCase(getChatWithReceiver.fulfilled, (state, action) => {
            state.chatting.chatContent = action.payload;
        })
        builder.addCase(setChatWithReceiver.fulfilled, (state, action) => {
            state.chatting.chatContent = action.payload;
        })
        builder.addCase(addChatWithReceiver.fulfilled, (state, action) => {
            state.chatting.chatContent.push(action.payload);
        })
        builder.addCase(setMsgBoxToggle.fulfilled, (state, action) => {
            state.chatting.msgBoxToggle = !state.chatting.msgBoxToggle;
        })
        builder.addCase(setActiveReceiver.fulfilled, (state, action) => {
            state.chatting.activeReceiver = action.payload;
        })
    }
})

export default ChattingSlice.reducer;