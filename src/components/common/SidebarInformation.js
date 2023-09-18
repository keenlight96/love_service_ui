import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {forEach} from "react-bootstrap/ElementChildren";
import {useDispatch, useSelector} from "react-redux";
import {checkToken} from "../../service/UserService";

const SidebarInformation = (current) => {
    const location = useLocation();
    const storeUser = useSelector(state => {
        console.log(state)
        return state.user.user.current
    });

    useEffect(() => {
        let elements = document.querySelectorAll(".panel-title");
        for (let i = 0; i < elements.length; i++) {
            try {
                elements[i].classList.remove("active");
            } catch (e){}
        }
        let element;
        try {
            switch (location.pathname) {
                case "/information/info":
                    element = document.querySelector("#id1-1");
                    element.classList.add("active");
                    break;
                case "/information/bills":
                    element = document.querySelector("#id1-2");
                    element.classList.add("active");
                    break;
                case "/information/topup":
                    element = document.querySelector("#id1-3");
                    element.classList.add("active");
                    break;
                case "/information/summary":
                    element = document.querySelector("#id2-1");
                    element.classList.add("active");
                    break;
                case "/information/supplies":
                    element = document.querySelector("#id2-2");
                    element.classList.add("active");
                    break;
                case "/information/album":
                    element = document.querySelector("#id2-3");
                    element.classList.add("active");
                    break;
            }
        } catch (e) {}
    }, [location.pathname, storeUser])
    return (
        <>
            <title>Game Community</title>
            <link rel="apple-touch-icon" sizes="57x57" href="https://playerduo.net/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="https://playerduo.net/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="https://playerduo.net/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="https://playerduo.net/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="https://playerduo.net/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="https://playerduo.net/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="https://playerduo.net/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="https://playerduo.net/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="https://playerduo.net/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="../resources/raw/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../resources/raw/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="../resources/raw/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../resources/raw/favicon-16x16.png" />
            <link rel="manifest" href="https://playerduo.net/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="shortcut icon" href="../resources/raw/favicon.ico" />
            <link href="../resources/all.css" rel="stylesheet" />
            <link href="../resources/css.css" rel="stylesheet" />
            <title>PlayerDuo - Thuê người chơi</title>
            <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet" />
            <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="../resources/0.cbdbec7b.chunk.css" />
            <link rel="stylesheet" type="text/css" href="../resources/4.2ddfb1d3.chunk.css" />
            <link rel="stylesheet" type="text/css" href="../resources/15.7bac9b00.chunk.css" />
            <link rel="stylesheet" type="text/css" href="../resources/9.cb7de3a7.chunk.css" />
            <link rel="stylesheet" href="../resources/css-user-information.css" />
            <div id={"root"}>
                <div className="menu">
                    <div className="menu__setting  panel-group">
                        <div className="menu__setting--main panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title"><a aria-expanded="true" className role="button" href>TÀI
                                    KHOẢN <i className="fas fa-chevron-down" /></a></div>
                            </div>
                            <div className="panel-collapse collapse in" style={{}}>
                                <div className="panel-body">
                                    <div className="panel-group">
                                        <Link to={"/information/info"}>
                                            <div className="menu__setting--sub panel panel-default">
                                                <div className="panel-heading">
                                                    <div className=" panel-title" id={"id1-1"}><i className="fas fa-user-tie" /> Thông tin cá nhân
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        {
                                            storeUser && storeUser.account.role.id != 1 ?
                                                <>
                                                    <Link to={"/information/bills"}>
                                                        <div className="menu__setting--sub panel panel-default">
                                                            <div className="panel-heading">
                                                                <div className="  panel-title" id={"id1-2"}><i className="fas fa-history"/> Lịch sử
                                                                    đơn thuê
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link to={"/information/topup"}>
                                                        <div className="menu__setting--sub panel panel-default">
                                                            <div className="panel-heading">
                                                                <div className="  panel-title" id={"id1-3"}><i className="fas fa-wallet"/> Nạp tiền
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            storeUser && storeUser.account.role.id == 3 ?
                                <div className="menu__setting--main panel panel-default">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a aria-expanded="true" className role="button" href="src/components/common/SidebarInformation#">
                                                NGƯỜI CUNG CẤP DỊCH VỤ <i className="fas fa-chevron-down" /></a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse in" style={{}}>
                                        <div className="panel-body">
                                            <div className="panel-group">
                                                <Link to={"/information/summary"}>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title" id={"id2-1"}><i className="fas fa-user-tie" /> Tổng quan
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to={"/information/supplies"}>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title" id={"id2-2"}><i className="fas fa-link" /> Thông tin dịch vụ
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to={"/information/album"}>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title" id={"id2-3"}><i className="fas fa-book" /> Album ảnh
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                {/*<div className="menu__setting--sub panel panel-default">*/}
                                                {/*    <div className="panel-heading">*/}
                                                {/*        <div className="  panel-title"><i className="fas fa-ban" /> Danh sách chặn*/}
                                                {/*            User*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                {/*<div className="menu__setting--sub panel panel-default">*/}
                                                {/*    <div className="panel-heading">*/}
                                                {/*        <div className="  panel-title"><i className="fas fa-link" /> Link Player</div>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                {/*<div className="menu__setting--sub panel panel-default">*/}
                                                {/*    <div className="panel-heading">*/}
                                                {/*        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="src/components/common/SidebarInformation#"><i className="fas fa-cog" /> Cài đặt <i className="fas fa-chevron-right" /></a></div>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="panel-collapse collapse">*/}
                                                {/*        <div className="panel-body">*/}
                                                {/*            <div className="panel-group">*/}
                                                {/*                <div className="menu__setting--last panel panel-default">*/}
                                                {/*                    <div className="panel-heading">*/}
                                                {/*                        <div className="panel-title">Url</div>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*                <div className="menu__setting--last panel panel-default">*/}
                                                {/*                    <div className="panel-heading">*/}
                                                {/*                        <div className="panel-title">Thông tin Player</div>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*                <div className="menu__setting--last panel panel-default">*/}
                                                {/*                    <div className="panel-heading">*/}
                                                {/*                        <div className="panel-title">Albums Player</div>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*                <div className="menu__setting--last panel panel-default">*/}
                                                {/*                    <div className="panel-heading">*/}
                                                {/*                        <div className="panel-title">Cài đặt Duo</div>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*                <div className="menu__setting--last panel panel-default">*/}
                                                {/*                    <div className="panel-heading">*/}
                                                {/*                        <div className="panel-title">Khác</div>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*            </div>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                {/*<div className="menu__setting--sub panel panel-default">*/}
                                                {/*    <div className="panel-heading">*/}
                                                {/*        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="src/components/common/SidebarInformation#"><i className="far fa-calendar-alt" /> Lịch sử nhận Duo, Donate <i className="fas fa-chevron-right" /></a></div>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="panel-collapse collapse">*/}
                                                {/*        <div className="panel-body">*/}
                                                {/*            <div className="panel-group">*/}
                                                {/*                <div className="menu__setting--last panel panel-default">*/}
                                                {/*                    <div className="panel-heading">*/}
                                                {/*                        <div className="panel-title">Lịch sử nhận duo</div>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*                <div className="menu__setting--last panel panel-default">*/}
                                                {/*                    <div className="panel-heading">*/}
                                                {/*                        <div className="panel-title">Lịch sử nhận donate</div>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*            </div>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </div>
                    <div className="btn-drawer-setting visible-xs"><i className="fas fa-chevron-right" /></div>
                </div>
            </div>
        </>
    );
};

export default SidebarInformation;