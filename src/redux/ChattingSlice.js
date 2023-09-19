import {createSlice} from "@reduxjs/toolkit";
import {
    addChatReceivers, addChatWithReceiver, addNotification, confirmReadAllNotifications, confirmReadNotification,
    getAllChatReceivers, getAllNotifications,
    getChatWithReceiver,
    setActiveReceiver,
    setChatWithReceiver,
    setMsgBoxToggle, setStompClient
} from "../service/ChattingService";

const initialState = {
    stompClient: null,
    chatting: {
        receivers: [],
        chatContent: [],
        msgBoxToggle: false,
        activeReceiver: {},
        notifications: [],
        countUnreadNotifications: 0,
    }
}

const ChattingSlice = createSlice({
    name: "chatting",
    initialState,
    reducers: {},
    extraReducers: builder => {
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
            let count = 0;
            state.chatting.notifications.map((item) => {
                if (item.isRead == false) {
                    count++;
                }
            })
            state.chatting.countUnreadNotifications = count;
        })
        builder.addCase(addNotification.fulfilled, (state, action) => {
            state.chatting.notifications.unshift(action.payload);
            state.chatting.countUnreadNotifications = state.chatting.countUnreadNotifications + 1;
        })
        builder.addCase(confirmReadNotification.fulfilled, (state, action) => {
            let count = 0;
            state.chatting.notifications = state.chatting.notifications.map((item) => {
                if (item.id == action.payload) {
                    return {...item, isRead: true};
                } else {
                    if (item.isRead == false) {
                        count++;
                    }
                    return item;
                }
            });
            state.chatting.countUnreadNotifications = count;
        })
        builder.addCase(confirmReadAllNotifications.fulfilled, (state, action) => {
            state.chatting.notifications = state.chatting.notifications.map((item) => {
                if (item.isRead == false) {
                    return {...item, isRead: true};
                } else {
                    return item;
                }
            });
            state.chatting.countUnreadNotifications = 0;
        })
    }
})

export default ChattingSlice.reducer;