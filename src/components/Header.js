import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router";
import $ from "jquery";
import {Link} from "react-router-dom";
import LoginService from "../service/custom/login";
import {useDispatch, useSelector} from "react-redux";
import {checkToken, setUser} from "../service/UserService";
import axios from "axios";
import Swal from "sweetalert2";

const Header = () => {
        const [isClicked, setIsClicked] = useState(true);
        const [isClickedChangeStatus, setIsChangeStatus] = useState(true);
        const dispatch = useDispatch();
        const [user, setUser] = useState(() => {
            try {
                return JSON.parse(localStorage.getItem("account"))
            } catch (e) {
                return {};
            }
        });
        const storeUser = useSelector(state => {
            return state.user.user.current
        });
        const handleClick = (e) => {
            setIsClicked(!isClicked);
        };

        const changeStatus = (e) => {
            setIsChangeStatus(!isClickedChangeStatus);
            // axios.get(`http://localhost:8080/accounts/iDontWantService?id=${user.id}`).then(data=>{
            //     Swal.fire({
            //         position: 'center',
            //         icon: 'success',
            //         title: data.data,
            //         showConfirmButton: false,
            //         timer: 1500
            //     });
            // })
            console.log(user)
        }

        const logout = () => {
            LoginService.logout().then(r => {
            });
            try {
                setUser(JSON.parse(localStorage.getItem("account")));
                dispatch(checkToken());
            } catch (e) {
                setUser({});
                dispatch(checkToken());
            }
        }

        useEffect(() => {
            dispatch(checkToken());
        }, [])

        useEffect(() => {
            try {
                setUser(JSON.parse(localStorage.getItem("account")));
            } catch (e) {
                setUser({});
            }
        }, [storeUser])

        return (
            <>
                <title>Game Community</title>
                <link rel="apple-touch-icon" sizes="57x57" href="https://playerduo.net/favicons/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="https://playerduo.net/favicons/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="https://playerduo.net/favicons/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="https://playerduo.net/favicons/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="https://playerduo.net/favicons/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="https://playerduo.net/favicons/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="https://playerduo.net/favicons/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="https://playerduo.net/favicons/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="https://playerduo.net/favicons/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="../resources/raw/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="../resources/raw/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="../resources/raw/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="../resources/raw/favicon-16x16.png"/>
                <link rel="manifest" href="https://playerduo.net/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="shortcut icon" href="../resources/raw/favicon.ico"/>
                <link href="../resources/all.css" rel="stylesheet"/>
                <link href="../resources/css.css" rel="stylesheet"/>
                <title>PlayerDuo - Thuê người chơi</title>
                <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet"/>
                <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="../resources/0.cbdbec7b.chunk.css"/>
                <link rel="stylesheet" type="text/css" href="../resources/4.2ddfb1d3.chunk.css"/>
                <link rel="stylesheet" type="text/css" href="../resources/15.7bac9b00.chunk.css"/>
                <link rel="stylesheet" href="../resources/css-home.css"/>
                <div id="root">
                    <header className="menu__header fix-menu" id="header-menu">
                        <div className="navbar-header">
                            <Link to={"/"}>
                                <a href className="logo"><img alt="logo playerduo" src="../resources/raw/logo.png"/></a>
                            </Link>
                        </div>
                        <div className="navbar">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="item-search">
                                    <nav className="Navbar__Item">
                                        <div className="Navbar__Link">
                                            <div className="Group-search visible "><span
                                                className="search input-group"><input placeholder="Nickname/Url ..."
                                                                                      type="text" className="form-control"
                                                                                      defaultValue={""}/><span
                                                className="input-group-addon"><button type="button"
                                                                                      className="btn btn-default"><i
                                                className="fal fa-search" aria-hidden="true"/></button></span></span></div>
                                        </div>
                                    </nav>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-center">
                                <li className="item-icon">
                                    <a className="group-user active" href>
                                        <Link to={"/"}>
                                            <i className="fal fa-home-alt"/>
                                        </Link>
                                    </a>
                                </li>
                                <li className="item-icon"><a className="group-user " href="https://playerduo.net/stories"><i
                                    className="fal fa-camera-movie"/></a></li>
                                <li className="item-icon group-fb"><a className="group-user" href="/#"><i
                                    className="fal fa-trophy-alt"/></a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {
                                    user && user.id ?
                                        <>
                                            <li className="item-icon notificate dropdown"><a id="basic-nav-dropdown"
                                                                                             role="button"
                                                                                             className="dropdown-toggle"
                                                                                             aria-haspopup="true"
                                                                                             aria-expanded="false"
                                                                                             href="#">
                                                <div className="item-title"><i className="fal fa-bell"/></div>
                                            </a>
                                                <ul role="menu" className="dropdown-menu"
                                                    aria-labelledby="basic-nav-dropdown">
                                                    <div className="content">
                                                        <div className="tab-notif-common"><h5><span>Thông báo</span></h5>
                                                            <div className="tab-action"><p className="active">
                                                                <span>Chính</span></p>
                                                                <p className><span>Khác</span></p>
                                                                <p className><span>Theo dõi</span></p>
                                                                <p className><span>Tương tác</span></p></div>
                                                        </div>
                                                        <div>
                                                            <div className="infinite-scroll-component "
                                                                 style={{height: '400px', overflow: 'auto'}}/>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </li>
                                            <li className="item-icon balance"><a className="money-user"><i
                                                className="far fa-plus"/> {user && user.balance} đ</a>
                                            </li>
                                            <li className={isClicked ? "item-icon item-avatar dropdown " : "item-icon item-avatar dropdown open"}
                                                onClick={(e) => {
                                                    handleClick(e)
                                                }}>
                                                <a id="header-nav-dropdown" role="button"
                                                   className="dropdown-toggle"
                                                   aria-haspopup="true" aria-expanded="false"
                                                   href="#"><img
                                                    src={user.avatar} className="avt-img" alt=""
                                                    style={{width: "45px", height: "45px", maxWidth: "45px"}}/></a>
                                                <ul role="menu" className="dropdown-menu"
                                                    aria-labelledby="header-nav-dropdown">
                                                    <li role="presentation" className="page-user"><a role="menuitem"
                                                                                                     tabIndex={-1}
                                                                                                     href="#"><img
                                                        src={user.avatar} className="avt-img" alt=""
                                                        style={{maxWidth: "55px"}}/>
                                                        <div className="text-logo"><h5>{user.nickName}</h5>
                                                            <p>Username : <span>{user.username}</span></p>
                                                            {/*<p className="label-user-page"><span>Xem trang cá nhân của bạn</span></p>*/}
                                                        </div>
                                                    </a></li>
                                                    <li role="presentation" className="menu-item hidden-lg hidden-md"><a
                                                        role="menuitem"
                                                        tabIndex={-1}
                                                        href="#"><i
                                                        className="fas fa-plus"/> <span>Số dư</span> : <span
                                                        className="money">
                                                        {user.balance} đ
                                                    </span></a></li>
                                                    <li role="presentation" className="menu-item"><a role="menuitem"
                                                                                                     tabIndex={-1}
                                                                                                     href="/information/topup"><i
                                                        className="fas fa-wallet"/> <span>Nạp tiền</span></a></li>
                                                    <li role="presentation" className="menu-item"><a role="menuitem"
                                                                                                     tabIndex={-1}
                                                                                                     href="/information/bills"><i
                                                        className="fas fa-clock"/> <span>Lịch sử thuê</span> </a></li>
                                                    <li role="presentation" className="menu-item"><a role="menuitem"
                                                                                                     tabIndex={-1}
                                                                                                     href="/information/info"><i
                                                        className="fas fa-cogs"/> <span>Cài đặt tài khoản</span></a></li>
                                                    <li role="presentation" className="menu-item" onClick={() => {
                                                        logout()
                                                    }}><a role="menuitem" tabIndex={-1}
                                                          href="#"><i
                                                        className="fas fa-power-off"/> <span>Đăng xuất</span></a></li>
                                                    <div className="menu-item list-flag">
                                                        <div className="box-item">
                                                            <div className="flag-all active"><img
                                                                src="../resources/raw/2.png"
                                                                className="flag flag-vn" alt="PD"/>
                                                            </div>
                                                            <div className="flag-all false"><img
                                                                src="../resources/raw/1.png"
                                                                className="flag flag-en" alt="PD"/>
                                                            </div>
                                                        </div>
                                                        <div className="box-item"><a href="#"
                                                                                     target="_blank"
                                                                                     rel="noopener noreferrer"><span>Group</span></a><a
                                                            href="#" target="_blank"
                                                            rel="noopener noreferrer"><span>Fanpage</span></a>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </li>
                                            {
                                                storeUser && storeUser.account.role.id == 3 ?
                                                    <li className="item-icon mode" onClick={(e) => {
                                                        changeStatus(e)
                                                    }}><a className="group-user">
                                                        <i className={isClickedChangeStatus?'fas fa-moon':'fas fa-sun'}/></a>
                                                    </li>
                                                    :
                                                    <></>
                                            }

                                        </>
                                        :
                                        <li className="item-icon authent"><a className="money-user" href={"/login"}><i
                                            className="fal fa-power-off"/><span>Đăng nhập</span></a></li>
                                }
                            </ul>
                        </div>
                        <div className="navbar-mobile hidden">
                            <ul className="navbar-nav">
                                <li className="item-icon notificate dropdown"><a id="basic-nav-dropdown" role="button"
                                                                                 className="dropdown-toggle"
                                                                                 aria-haspopup="true" aria-expanded="false"
                                                                                 href="#">
                                    <div className="item-title"><i className="fal fa-bell"/></div>
                                </a>
                                    <ul role="menu" className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                        <div className="content">
                                            <div className="tab-notif-common"><h5><span>Thông báo</span></h5>
                                                <div className="tab-action"><p className="active"><span>Chính</span></p>
                                                    <p className><span>Khác</span></p>
                                                    <p className><span>Theo dõi</span></p>
                                                    <p className><span>Tương tác</span></p></div>
                                            </div>
                                            <div>
                                                <div className="infinite-scroll-component "
                                                     style={{height: '400px', overflow: 'auto'}}/>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className={isClicked ? "item-icon item-avatar dropdown " : "item-icon item-avatar dropdown open"}
                                    onClick={(e) => {
                                        handleClick(e)
                                    }}
                                ><a id="header-nav-dropdown" role="button"
                                    className="dropdown-toggle"
                                    aria-haspopup="true" aria-expanded="false"
                                    href="#"><img
                                    src="../resources/raw/avatar6.png" className="avt-img" alt=""/></a>
                                    <ul role="menu" className="dropdown-menu" aria-labelledby="header-nav-dropdown">
                                        <li role="presentation" className="page-user"><a role="menuitem" tabIndex={-1}
                                                                                         href="#"><img
                                            src="../resources/raw/avatar6.png" className="avt-img" alt=""/>
                                            <div className="text-logo"><h5>keenlight</h5>
                                                <p>ID : <span>keenlight</span></p>
                                                <p className="label-user-page"><span>Xem trang cá nhân của bạn</span></p>
                                            </div>
                                        </a></li>
                                        <li role="presentation" className="menu-item hidden-lg hidden-md"><a role="menuitem"
                                                                                                             tabIndex={-1}
                                                                                                             href="#"><i
                                            className="fas fa-plus"/> <span>Số dư</span> : <span
                                            className="money">
                                            {user.balance} đ
                                        </span></a></li>
                                        <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1}
                                                                                         href="/information/topup"><i
                                            className="fas fa-wallet"/> <span>Nạp tiền</span></a></li>
                                        <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1}
                                                                                         href="/information/bills"><i
                                            className="fas fa-clock"/> <span>Lịch sử thuê</span> </a></li>
                                        <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1}
                                                                                         href="/information/info"><i
                                            className="fas fa-cogs"/> <span>Cài đặt tài khoản</span></a></li>
                                        <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1}
                                                                                         href="#"><i
                                            className="fas fa-power-off"/> <span>Đăng xuất</span></a></li>
                                        <div className="menu-item list-flag">
                                            <div className="box-item">
                                                <div className="flag-all active"><img src="../resources/raw/2.png"
                                                                                      className="flag flag-vn" alt="PD"/>
                                                </div>
                                                <div className="flag-all false"><img src="../resources/raw/1.png"
                                                                                     className="flag flag-en" alt="PD"/>
                                                </div>
                                            </div>
                                            <div className="box-item"><a href="https://www.facebook.com/groups/playerduovn"
                                                                         target="_blank"
                                                                         rel="noopener noreferrer"><span>Group</span></a><a
                                                href="https://www.facebook.com/playerduo" target="_blank"
                                                rel="noopener noreferrer"><span>Fanpage</span></a>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                            <a className="btn-bars"><i className="fal fa-bars"/></a>
                            <div className="flex-side hidden">
                                <div className="overlay"/>
                                <div className="content">
                                    <div className="box-search">
                                        <nav className="Navbar__Item">
                                            <div className="Navbar__Link">
                                                <div className="Group-search visible "><span
                                                    className="search input-group"><input
                                                    placeholder="Nickname/Url ..." type="text" className="form-control"
                                                    defaultValue/><span className="input-group-addon"><button type="button"
                                                                                                              className="btn btn-default"><i
                                                    className="fal fa-search" aria-hidden="true"/></button></span></span>
                                                </div>
                                            </div>
                                        </nav>
                                        <a className="btn-close"><i className="fal fa-times fa-2x"/></a></div>
                                    <ul className="list-page"><a href>
                                    </a>
                                        <li className="item-icon active"><a href/><a className="group-user"><i
                                            className="fal fa-home-alt"/> <span>Trang chủ</span></a>
                                        </li>
                                        <a href="https://playerduo.net/stories">
                                        </a>
                                        <li className="item-icon "><a href="https://playerduo.net/stories"/><a
                                            className="group-user"><i className="fal fa-camera-movie"/> Stories</a>
                                        </li>
                                        <li className="item-icon"><a className="group-user"><i
                                            className="fal fa-trophy-alt"/> <span>Bảng xếp hạng</span></a>
                                        </li>
                                    </ul>
                                    <div className="list-mode">
                                        <div className="item"><p className="title"><span>Chế độ</span></p><a
                                            className="func mode"><i className="fas fa-moon op"/><i
                                            className="fas fa-sun false"/></a></div>
                                        <div className="item"><p className="title"><span>Cộng đồng</span></p>
                                            <div className="func group"><a
                                                href="https://www.facebook.com/groups/playerduovn" target="_blank"
                                                rel="noopener noreferrer"><i className="fal fa-globe"/></a><a
                                                href="https://www.facebook.com/playerduo" target="_blank"
                                                rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a></div>
                                        </div>
                                        <div className="item"><p className="title"><span>Ngôn ngữ</span></p><a
                                            className="func lang"><img src="../resources/raw/1.png" className="flag op"
                                                                       alt="PD"/><img src="../resources/raw/2.png"
                                                                                      className="flag false" alt="PD"/></a>
                                        </div>
                                        <div className="item"><p className="title"><span>Tải App</span></p>
                                            <div className="func app"><a href="https://testflight.apple.com/join/r6H9YvY4"
                                                                         target="_blank" rel="noopener noreferrer"
                                                                         download>PlayerChat</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </>
        );
    }
;

export default Header;