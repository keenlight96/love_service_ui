import React, {useEffect, useState} from 'react';
import {Stomp, Client} from "@stomp/stompjs";
import {useDispatch, useSelector} from "react-redux";
import {
    addChatWithReceiver, addNotification,
    getAllChatReceivers,
    getChatWithReceiver,
    setActiveReceiver,
    setChatWithReceiver,
    setMsgBoxToggle, setStompClient
} from "../../service/ChattingService";

const Chat = () => {
    const msgBoxToggle = useSelector(state => {
        return state.chatting.chatting.msgBoxToggle;
    })
    const activeReceiver = useSelector(state => {
        return state.chatting.chatting.activeReceiver;
    })
    const dispatch = useDispatch();
    const allReceivers = useSelector((state) => {
        return state.chatting.chatting.receivers;
    })
    const chatContent = useSelector(state => {
        return state.chatting.chatting.chatContent;
    })

    const messageBoxOpen = (e) => {
        dispatch(setMsgBoxToggle());
        dispatch(getAllChatReceivers());
    }

    const messageBoxClose = (e) => {
        let nonReceiver = {};
        dispatch(setActiveReceiver(nonReceiver));
        dispatch(getAllChatReceivers());
        dispatch(setChatWithReceiver([]));
        dispatch(setMsgBoxToggle());
    }

    const stompClient = useSelector(state => {
        return state.chatting.stompClient;
    })

    function connect() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }

        let socket = new WebSocket('ws://localhost:8080/gkz-stomp-endpoint/websocket');
        let stompClient2 = Stomp.over(socket);
        dispatch(setStompClient(stompClient2));

        try {
            let userId = JSON.parse(localStorage.getItem("account")).id;

            stompClient2.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                stompClient2.subscribe("/topic/" + userId, function (message) {
                    let converter = JSON.parse(message.body)
                    if (converter.type == "private") {
                        showMessage(converter);
                    } else if (converter.type == "notification") {
                        dispatch(addNotification(converter));
                    }
                });
            });
        } catch (e) {
            console.log("Connect socket error");
            console.log(e);
        }

    }

    function forceDisconnect() {
        stompClient.disconnect();
    }

    function disconnect() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    function sendMessage() {
        try {
            let user = JSON.parse(localStorage.getItem("account"));
            if (stompClient != null) {
                let message = {
                    "sender": {
                        id: user.id
                    },
                    "receiver": {
                        id: activeReceiver.id
                    },
                    "type": "private",
                    'message': document.querySelector("#textMessage").value
                }
                stompClient.send("/gkz/hello", {}, JSON.stringify(message));
            }
        } catch (e) {
            console.log("Chat send message error:");
            console.log(e);
        }
    }

    const showMessage = (message) => {
        dispatch(addChatWithReceiver(message));
        try {
            if (activeReceiver.id != allReceivers[0]) {
                dispatch(getAllChatReceivers());
            }
        } catch (e) {
        }
        document.querySelector("#textMessage").value = "";
        scrollToBottom();
    }

    function scrollToBottom() {
        const chatMessages = document.querySelector(".mess-detail-room");
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    useEffect(() => {
        dispatch(getAllChatReceivers());
    }, [])

    const activateCurrentReceiver = (e, item) => {
        dispatch(setActiveReceiver(item));
        dispatch(getChatWithReceiver(item.id));
    }

    useEffect(() => {
        connect();
    }, [activeReceiver])

    useEffect(() => {
        try {
            scrollToBottom();
        } catch (e) {
        }
    }, [chatContent]);

    return (
        <>
            {msgBoxToggle ?
                <div className="message__popup open false">
                    <div className="message__popup--box">
                        <div className="message__popup--box-header">
                            <div className="media"><i className="fas fa-comment-dots fa-2x media-left"/><p className="media-body media-middle">Tin
                                nhắn</p></div>
                            <div className="pl-btn" onClick={(e) => messageBoxClose(e)}>
                                <i className="fas fa-minus"/>
                                {/*<i className="fas fa-sync false"/>*/}
                                {/*<div className="messs-tarnger"><span>Nhận tin nhắn từ người lạ</span>*/}
                                {/*    <div className="react-switch" style={{*/}
                                {/*        position: 'relative',*/}
                                {/*        display: 'inline-block',*/}
                                {/*        textAlign: 'left',*/}
                                {/*        opacity: 1,*/}
                                {/*        borderRadius: '8px',*/}
                                {/*        transition: 'opacity 0.25s ease 0s',*/}
                                {/*        touchAction: 'none',*/}
                                {/*        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',*/}
                                {/*        userSelect: 'none'*/}
                                {/*    }}>*/}
                                {/*        <div className="react-switch-bg" style={{*/}
                                {/*            height: '16px',*/}
                                {/*            width: '35px',*/}
                                {/*            margin: '1px',*/}
                                {/*            position: 'relative',*/}
                                {/*            background: 'rgb(226, 127, 118)',*/}
                                {/*            borderRadius: '8px',*/}
                                {/*            cursor: 'pointer',*/}
                                {/*            transition: 'background 0.25s ease 0s'*/}
                                {/*        }}/>*/}
                                {/*        <div className="react-switch-handle" role="checkbox" tabIndex={0} id="material-switch" aria-checked="true"*/}
                                {/*             aria-disabled="false" style={{*/}
                                {/*            height: '18px',*/}
                                {/*            width: '18px',*/}
                                {/*            background: 'rgb(240, 86, 74)',*/}
                                {/*            cursor: 'pointer',*/}
                                {/*            display: 'inline-block',*/}
                                {/*            borderRadius: '50%',*/}
                                {/*            position: 'absolute',*/}
                                {/*            transform: 'translateX(19px)',*/}
                                {/*            top: '0px',*/}
                                {/*            outline: '0px',*/}
                                {/*            boxShadow: 'rgba(0, 0, 0, 0.6) 0px 1px 5px',*/}
                                {/*            border: '0px',*/}
                                {/*            transition: 'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s'*/}
                                {/*        }}/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="message__popup--box-content">
                            <div className="box__left display">
                                <div className="box__left--message"><span className="search room-search input-group"><input placeholder="Search ..."
                                                                                                                            name="text" type="text"
                                                                                                                            className="form-control"
                                                                                                                            defaultValue/><span
                                    className="input-group-addon"><i className="fa fa-search" aria-hidden="true"/></span></span>
                                    <div className="list-message-content">
                                        {
                                            allReceivers && allReceivers.map((item, key) => (
                                                <div className={activeReceiver.id == item.id ? "active media" : "media"} key={key}
                                                     onClick={(e)  => {activateCurrentReceiver(e, item)}}>
                                                {/*<div className={item.id == activeReceiver.id ? "active media" : "media"} key={key}*/}
                                                {/*     onClick={(e)  => {activateCurrentReceiver(e, item)}}>*/}
                                                    <div className="media-left">
                                                        <div className="avt avt-sm"><img src={item.avatar} className="avt-img" alt="PD"/>
                                                            {/*<div className="stt stt-ready"/>*/}
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p className="name-player-review">{item.username}</p>
                                                        {/*<p>ok?</p>*/}
                                                        <span></span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="box__right wrapper" style={{marginTop: "0px"}}>
                                <div className="box__right--header">
                                            <div className="media">
                                                <div className="media-left"><i className="fas fa-chevron-left"/>
                                                    <div className="avt avt-sm">
                                                        {
                                                            activeReceiver.id ?
                                                                <>
                                                                    <img src={activeReceiver.avatar} className="avt-img" alt=""/>
                                                                    {/*<div className="stt stt-ready"/>*/}
                                                                </>
                                                                :
                                                                <div></div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="media-body media-middle">
                                                    {
                                                        activeReceiver.id ?
                                                        <a target="_blank" className="name-player-review" href="/page64fa190cc27ea26bdf1997d3">{activeReceiver.nickname}</a>
                                                        :
                                                        <div></div>
                                                    }

                                                </div>
                                            </div>
                                            <div></div>
                                </div>
                                <div className="box__right--message chat-main-wrap">
                                    <div>
                                        <div className="main-header"><p className="name"><span>babyroshan</span><span> - <span
                                            className="nick-name">babyroshan</span></span></p></div>
                                        <div className="main-body">
                                            <div className="mess-detail-room"><i style={{flexGrow: 1}}/>
                                                <div id={"chat-content"}>
                                                    {
                                                        chatContent && chatContent.map((item, key) => (
                                                            item.sender.id == activeReceiver.id ?
                                                                <div className="msg-wrap">
                                                                    <div className="msg-body  radius">
                                                                        <div className="msg-detail" style={{position: 'relative'}}>
                                                                            <div>
                                                                                <div className="msg null"><p>{item.message}</p></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="msg-wrap">
                                                                    <div className="msg-body msg-fill radius">
                                                                        <div className="msg-detail" style={{position: 'relative'}}>
                                                                            <div>
                                                                                <div className="msg null"><p>{item.message}</p></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        ))
                                                    }
                                                </div>
                                                <div id="target" style={{float: 'left', clear: 'both'}}/>
                                            </div>
                                        </div>
                                        <div className="main-footer">
                                            {
                                                activeReceiver.id ?
                                                    <>
                                                        <div className="gif-area" style={{display: 'none'}}>
                                                            <div className="search-gif"><span className="search room-search input-group"><input
                                                                placeholder="Search for GIFs" name="searchValue" autoCapitalize="none" autoComplete="off"
                                                                autoCorrect="off" type="text" className="form-control" defaultValue/><span
                                                                className="input-group-addon"><i className="fa fa-search" aria-hidden="true"/></span></span>
                                                            </div>
                                                            <div className="content-gif">
                                                                <div/>
                                                            </div>
                                                        </div>
                                                        <span className="send-message input-group">
                                                            <textarea className="form-control" id={"textMessage"} placeholder="Type a message ..." type="text"
                                                                      name="message" maxLength={255} defaultValue={""}/>
                                                                        {/*<span className="input-group-addon"><i className="far fa-grin"/></span>*/}
                                                                        {/*<span className="input-group-addon">*/}
                                                                        {/*    <input className="hidden" type="file" multiple accept="image/png, image/jpeg, image/jpg"/>*/}
                                                                        {/*    <i className="icon image-icon"/>*/}
                                                                        {/*</span>*/}
                                                                        {/*<span className="input-group-addon"><i className="icon gif-icon"/></span>*/}
                                                                        <span className="input-group-addon" onClick={() => {sendMessage()}}>
                                                                <i className="fa fa-paper-plane" aria-hidden="true"/>
                                                            </span>
                                                        </span>
                                                    </>
                                                    :
                                                    <div></div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="message__popup  false" onClick={(e) => messageBoxOpen(e)}>
                    <div className="message__popup--icon"><img src="../resources/raw/popup-chat.png" className alt="PD"/></div>
                </div>
            }

        </>
    );
};

export default Chat;