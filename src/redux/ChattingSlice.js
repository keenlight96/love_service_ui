import {createSlice} from "@reduxjs/toolkit";
import {
    addChatReceivers, addChatWithReceiver, addNotification,
    getAllChatReceivers, getAllNotifications,
    getChatWithReceiver,
    setActiveReceiver,
    setChatWithReceiver,
    setMsgBoxToggle, setStompClient
} from "../service/ChattingService";

const initialState = {
    stompClient: null,
    chatting : {
        receivers : [],
        chatContent : [],
        msgBoxToggle : false,
        activeReceiver: {},
        notifications: [],
    }
}

const ChattingSlice = createSlice({
    name : "chatting",
    initialState,
    reducers : {},
    extraReducers : builder => {
        builder.addCase(setStompClient.fulfilled, (state, action) => {
            state.stompClient = action.payload;
        })
        builder.addCase(getAllChatReceivers.fulfilled, (state, action) => {
            state.chatting.receivers = action.payload;
        })
        builder.addCase(addChatReceivers.fulfilled, (state, action) => {
            state.chatting.receivers = [action.payload, ...state.chatting.receivers];
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

        // Notification
        builder.addCase(getAllNotifications.fulfilled, (state, action) => {
            state.chatting.notifications = action.payload;
        })
        builder.addCase(addNotification.fulfilled, (state, action) => {
            state.chatting.notifications.unshift(action.payload);
        })
    }
})

export default ChattingSlice.reducer;