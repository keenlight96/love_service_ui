import React, {useEffect, useState} from 'react';
import Chat from "./common/Chat";

const ChatSocket = () => {
    const [msgBoxToggle, setMsgBoxToggle] = useState(false);
    const messageBoxToggle = (e) => {
        setMsgBoxToggle(!msgBoxToggle);
    }
    return (
        <>
            <Chat/>
        </>
    );
};

export default ChatSocket;