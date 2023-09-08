import React, {useState} from 'react';

const Chat = () => {
    const [msgBoxToggle, setMsgBoxToggle] = useState(false);
    const messageBoxToggle = (e) => {
        setMsgBoxToggle(!msgBoxToggle);
        console.log(e)
    }

    return (
        <>
            {msgBoxToggle ?
                <div className="message__popup open false">
                    <div className="message__popup--box">
                        <div className="message__popup--box-header">
                            <div className="media"><i className="fas fa-comment-dots fa-2x media-left"/><p className="media-body media-middle">Tin
                                nhắn</p></div>
                            <div className="pl-btn" onClick={(e) => messageBoxToggle(e)}>
                                <i className="fas fa-minus"/><i className="fas fa-sync false"/>
                                <div className="messs-tarnger"><span>Nhận tin nhắn từ người lạ</span>
                                    <div className="react-switch" style={{
                                        position: 'relative',
                                        display: 'inline-block',
                                        textAlign: 'left',
                                        opacity: 1,
                                        borderRadius: '8px',
                                        transition: 'opacity 0.25s ease 0s',
                                        touchAction: 'none',
                                        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                        userSelect: 'none'
                                    }}>
                                        <div className="react-switch-bg" style={{
                                            height: '16px',
                                            width: '35px',
                                            margin: '1px',
                                            position: 'relative',
                                            background: 'rgb(226, 127, 118)',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            transition: 'background 0.25s ease 0s'
                                        }}/>
                                        <div className="react-switch-handle" role="checkbox" tabIndex={0} id="material-switch" aria-checked="true"
                                             aria-disabled="false" style={{
                                            height: '18px',
                                            width: '18px',
                                            background: 'rgb(240, 86, 74)',
                                            cursor: 'pointer',
                                            display: 'inline-block',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            transform: 'translateX(19px)',
                                            top: '0px',
                                            outline: '0px',
                                            boxShadow: 'rgba(0, 0, 0, 0.6) 0px 1px 5px',
                                            border: '0px',
                                            transition: 'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s'
                                        }}/>
                                    </div>
                                </div>
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
                                        <div>
                                            <div className="active media">
                                                <div className="media-left">
                                                    <div className="avt avt-sm"><img src="https://files.playerduo.net/production/images/avatar28.png"
                                                                                     className="avt-img" alt="PD"/>
                                                        <div className="stt stt-ready"/>
                                                    </div>
                                                </div>
                                                <div className="media-body"><p className="name-player-review">babyroshan</p><p>ok?</p><span>29 phút trước</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box__right wrapper">
                                <div className="box__right--header">
                                    <div className="media">
                                        <div className="media-left"><i className="fas fa-chevron-left"/>
                                            <div className="avt avt-sm"><img src="https://files.playerduo.net/production/images/avatar28.png"
                                                                             className="avt-img" alt="PD"/>
                                                <div className="stt stt-ready"/>
                                            </div>
                                        </div>
                                        <div className="media-body media-middle"><a target="_blank" className="name-player-review"
                                                                                    href="/page64fa190cc27ea26bdf1997d3">babyroshan</a> - <a
                                            target="_blank" href="/64fa190cc27ea26bdf1997d3">babyroshan</a></div>
                                        <div className="pl-btn media-right media-middle">
                                            <div className="dropdown btn-group btn-group-xs">
                                                <button id="dropdown-no-caret" role="button" aria-haspopup="true" aria-expanded="false" type="button"
                                                        className="dropdown-toggle btn btn-xs btn-default"><i className="fas fa-ellipsis-v"/></button>
                                                <ul role="menu" className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-no-caret">
                                                    <li role="presentation" className><a role="menuitem" tabIndex={-1} href="#"><i
                                                        className="fas fa-trash"/> Xoá chat</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box__right--message chat-main-wrap">
                                    <div>
                                        <div className="main-header"><p className="name"><span>babyroshan</span><span> - <span
                                            className="nick-name">babyroshan</span></span></p></div>
                                        <div className="main-body">
                                            <div className="mess-detail-room"><i style={{flexGrow: 1}}/>
                                                <div>
                                                    <div className="msg-wrap">
                                                        <div className="msg-body  radius">
                                                            <div className="msg-detail" style={{position: 'relative'}}>
                                                                <div>
                                                                    <div className="msg null"><p>test</p></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="msg-wrap">
                                                        <div className="msg-body msg-fill radius">
                                                            <div className="msg-detail" style={{position: 'relative'}}>
                                                                <div>
                                                                    <div className="msg null"><p>ok?</p></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="target" style={{float: 'left', clear: 'both'}}/>
                                            </div>
                                        </div>
                                        <div className="main-footer">
                                            <div className="gif-area" style={{display: 'none'}}>
                                                <div className="search-gif"><span className="search room-search input-group"><input
                                                    placeholder="Search for GIFs" name="searchValue" autoCapitalize="none" autoComplete="off"
                                                    autoCorrect="off" type="text" className="form-control" defaultValue/><span
                                                    className="input-group-addon"><i className="fa fa-search" aria-hidden="true"/></span></span></div>
                                                <div className="content-gif">
                                                    <div/>
                                                </div>
                                            </div>
                                            <span className="send-message input-group"><textarea className="form-control"
                                                                                                 placeholder="Type a message ..." type="text"
                                                                                                 name="message" maxLength={255}
                                                                                                 defaultValue={""}/><span
                                                className="input-group-addon"><i className="far fa-grin"/></span><span
                                                className="input-group-addon"><input className="hidden" type="file" multiple
                                                                                     accept="image/png, image/jpeg, image/jpg"/><i
                                                className="icon image-icon"/></span><span className="input-group-addon"><i className="icon gif-icon"/></span><span
                                                className="input-group-addon"><i className="fa fa-paper-plane" aria-hidden="true"/></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="message__popup  false" onClick={(e) => messageBoxToggle()}>
                    <div className="message__popup--icon"><img src="../resources/raw/popup-chat.png" className alt="PD"/></div>
                </div>
            }

        </>
    );
};

export default Chat;