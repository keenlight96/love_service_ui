import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNewestCCDVs} from "../service/CCDVsService";

const NewestCCDVs = () => {
    const newestCCDVs = useSelector(state => {
        console.log(state);
        return state.CCDVs.CCDVs.newestCCDVs;
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewestCCDVs(10));
    }, [])
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
            <link rel="stylesheet" href="../resources/css-home.css" />
            <noscript>Bạn cần có cho phép Javascript hoạt động để chạy ứng dụng PlayerDuo.</noscript>
            <div id="root">
                <header className="menu__header fix-menu" id="header-menu">
                    <div className="navbar-header"><a href className="logo"><img alt="logo playerduo" src="../resources/raw/logo.png" /></a></div>
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-left">
                            <li className="item-search">
                                <nav className="Navbar__Item">
                                    <div className="Navbar__Link">
                                        <div className="Group-search visible "><span className="search input-group"><input placeholder="Nickname/Url ..." type="text" className="form-control" defaultValue /><span className="input-group-addon"><button type="button" className="btn btn-default"><i className="fal fa-search" aria-hidden="true" /></button></span></span></div>
                                    </div>
                                </nav>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-center">
                            <li className="item-icon"><a className="group-user active" href><i className="fal fa-home-alt" /></a></li>
                            <li className="item-icon"><a className="group-user " href="https://playerduo.net/stories"><i className="fal fa-camera-movie" /></a></li>
                            <li className="item-icon group-fb"><a className="group-user" href="/#"><i className="fal fa-trophy-alt" /></a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="item-icon notificate dropdown"><a id="basic-nav-dropdown" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#">
                                <div className="item-title"><i className="fal fa-bell" /></div>
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
                                            <div className="infinite-scroll-component " style={{height: '400px', overflow: 'auto'}} />
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon balance"><a className="money-user"><i className="far fa-plus" /> 0 đ</a></li>
                            <li className="item-icon item-avatar dropdown"><a id="header-nav-dropdown" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#"><img src="../resources/raw/avatar6.png" className="avt-img" alt="PD" /></a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="header-nav-dropdown">
                                    <li role="presentation" className="page-user"><a role="menuitem" tabIndex={-1} href="#"><img src="../resources/raw/avatar6.png" className="avt-img" alt="PD" />
                                        <div className="text-logo"><h5>keenlight</h5>
                                            <p>ID : <span>keenlight</span></p>
                                            <p className="label-user-page"><span>Xem trang cá nhân của bạn</span></p></div>
                                    </a></li>
                                    <li role="presentation" className="menu-item hidden-lg hidden-md"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-plus" /> <span>Số dư</span> : <span className="money">0 đ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-minus" /> <span>Rút tiền</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-credit-card" /> <span>Mua thẻ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-user-lock" /> <span>Tạo khóa bảo vệ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-clock" /> <span>Lịch sử giao dịch</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-users" /> <span>Danh sách theo dõi</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-cogs" /> <span>Cài đặt tài khoản</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-power-off" /> <span>Đăng xuất</span></a></li>
                                    <div className="menu-item list-flag">
                                        <div className="box-item">
                                            <div className="flag-all active"><img src="../resources/raw/2.png" className="flag flag-vn" alt="PD" /></div>
                                            <div className="flag-all false"><img src="../resources/raw/1.png" className="flag flag-en" alt="PD" /></div>
                                        </div>
                                        <div className="box-item"><a href="https://www.facebook.com/groups/playerduovn" target="_blank" rel="noopener noreferrer"><span>Group</span></a><a href="https://www.facebook.com/playerduo" target="_blank" rel="noopener noreferrer"><span>Fanpage</span></a>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon mode"><a className="group-user"><i className="fas fa-moon" /></a></li>
                        </ul>
                    </div>
                    <div className="navbar-mobile hidden">
                        <ul className="navbar-nav">
                            <li className="item-icon notificate dropdown"><a id="basic-nav-dropdown" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#">
                                <div className="item-title"><i className="fal fa-bell" /></div>
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
                                            <div className="infinite-scroll-component " style={{height: '400px', overflow: 'auto'}} />
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon item-avatar dropdown"><a id="header-nav-dropdown" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#"><img src="../resources/raw/avatar6.png" className="avt-img" alt="PD" /></a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="header-nav-dropdown">
                                    <li role="presentation" className="page-user"><a role="menuitem" tabIndex={-1} href="#"><img src="../resources/raw/avatar6.png" className="avt-img" alt="PD" />
                                        <div className="text-logo"><h5>keenlight</h5>
                                            <p>ID : <span>keenlight</span></p>
                                            <p className="label-user-page"><span>Xem trang cá nhân của bạn</span></p></div>
                                    </a></li>
                                    <li role="presentation" className="menu-item hidden-lg hidden-md"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-plus" /> <span>Số dư</span> : <span className="money">0 đ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-minus" /> <span>Rút tiền</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-credit-card" /> <span>Mua thẻ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-user-lock" /> <span>Tạo khóa bảo vệ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-clock" /> <span>Lịch sử giao dịch</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-users" /> <span>Danh sách theo dõi</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-cogs" /> <span>Cài đặt tài khoản</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex={-1} href="#"><i className="fas fa-power-off" /> <span>Đăng xuất</span></a></li>
                                    <div className="menu-item list-flag">
                                        <div className="box-item">
                                            <div className="flag-all active"><img src="../resources/raw/2.png" className="flag flag-vn" alt="PD" /></div>
                                            <div className="flag-all false"><img src="../resources/raw/1.png" className="flag flag-en" alt="PD" /></div>
                                        </div>
                                        <div className="box-item"><a href="https://www.facebook.com/groups/playerduovn" target="_blank" rel="noopener noreferrer"><span>Group</span></a><a href="https://www.facebook.com/playerduo" target="_blank" rel="noopener noreferrer"><span>Fanpage</span></a>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <a className="btn-bars"><i className="fal fa-bars" /></a>
                        <div className="flex-side hidden">
                            <div className="overlay" />
                            <div className="content">
                                <div className="box-search">
                                    <nav className="Navbar__Item">
                                        <div className="Navbar__Link">
                                            <div className="Group-search visible "><span className="search input-group"><input placeholder="Nickname/Url ..." type="text" className="form-control" defaultValue /><span className="input-group-addon"><button type="button" className="btn btn-default"><i className="fal fa-search" aria-hidden="true" /></button></span></span></div>
                                        </div>
                                    </nav>
                                    <a className="btn-close"><i className="fal fa-times fa-2x" /></a></div>
                                <ul className="list-page"><a href>
                                </a><li className="item-icon active"><a href /><a className="group-user"><i className="fal fa-home-alt" /> <span>Trang chủ</span></a>
                                </li>
                                    <a href="https://playerduo.net/stories">
                                    </a><li className="item-icon "><a href="https://playerduo.net/stories" /><a className="group-user"><i className="fal fa-camera-movie" /> Stories</a>
                                    </li>
                                    <li className="item-icon"><a className="group-user"><i className="fal fa-trophy-alt" /> <span>Bảng xếp hạng</span></a>
                                    </li>
                                </ul>
                                <div className="list-mode">
                                    <div className="item"><p className="title"><span>Chế độ</span></p><a className="func mode"><i className="fas fa-moon op" /><i className="fas fa-sun false" /></a></div>
                                    <div className="item"><p className="title"><span>Cộng đồng</span></p>
                                        <div className="func group"><a href="https://www.facebook.com/groups/playerduovn" target="_blank" rel="noopener noreferrer"><i className="fal fa-globe" /></a><a href="https://www.facebook.com/playerduo" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></div>
                                    </div>
                                    <div className="item"><p className="title"><span>Ngôn ngữ</span></p><a className="func lang"><img src="../resources/raw/1.png" className="flag op" alt="PD" /><img src="../resources/raw/2.png" className="flag false" alt="PD" /></a>
                                    </div>
                                    <div className="item"><p className="title"><span>Tải App</span></p>
                                        <div className="func app"><a href="https://testflight.apple.com/join/r6H9YvY4" target="_blank" rel="noopener noreferrer" download>PlayerChat</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="hidden">
                    <audio src="../resources/raw/notification-sound.805a8904.mp3" />
                    <audio src="../resources/raw/notification-group-sound.4c7ac55b.mp3" />
                    <audio src="../resources/raw/unconvinced.1de6c75d.mp3" />
                </div>
                <div className="notifications-wrapper" />
                <div className="message__popup  false">
                    <div className="message__popup--icon"><img src="../resources/raw/popup-chat.png" className alt="PD" /></div>
                </div>
                <div className="wrapper">
                    <div className="home-flex">
                        <div className="home-flex-category">
                            <div className="fixed-cate"><p><span>Danh mục game</span></p>
                                <ul className="list-group">
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__0ba80060-2b58-11ee-a657-a54d6be1d46a__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__0ba80060-2b58-11ee-a657-a54d6be1d46a__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Truy Kích PC</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Liên Minh Huyền Thoại</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Đấu Trường Chân Lý</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">PUBG Mobile</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">PUBG PC</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Liên Quân Mobile</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__99a18050-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__99a18050-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Liên Minh Tốc Chiến</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__39932230-34cc-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__39932230-34cc-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Free Fire</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__5dd9f670-34d4-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__5dd9f670-34d4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Valorant</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__f79153d0-33e4-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f79153d0-33e4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Naraka Bladepoint</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__40daec90-33e5-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__40daec90-33e5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">CSGO</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__e671c440-34d4-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__e671c440-34d4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Dota 2</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__38084d60-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__38084d60-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Call of Duty</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__62295df0-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__62295df0-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">GTA V</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Hát</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Tâm Sự</p></div>
                                        </div>
                                    </li>
                                    <li className="list-item ">
                                        <div className="media">
                                            <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                            </div>
                                            <div className="media-body media-middle"><p className="media-heading">Khác</p></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="home-flex-content"><p className="btn-chat-global false"><span>Trò Chuyện</span></p>
                            <div className="hided">
                                <div className="slide extend-box">
                                    <div className="global-chat">
                                        <div id="global-chat" className="global-chat-display">
                                            <div>
                                                <div className="text-center"><i className="fa fa-spinner fa-spin" /></div>
                                                <div className="global_message__item media">
                                                    <div className="media-left"><a target="_blank" href="https://playerduo.net/cheneiiiv">
                                                        <div className="avt-rank avt-sm"><img src="../resources/raw/91d31b69-d5d7-451a-8a66-d7acfea3afe0__59c39300-3454-11ed-838c-b120e70abb59__page_avatar.jpg" className="avt-1-15 avt-img" alt="PD" /><img src="../resources/raw/7.png" className="rank-1-15 rank-img" alt="PlayerDuo" /></div>
                                                    </a></div>
                                                    <div className="media-body"><p className="chat-name"><strong className="name-player-review color-vip-6"><span className="cursor-pointer">VyVy </span> </strong> : </p>
                                                        <p className="mess-global">ướt đc rent</p></div>
                                                </div>
                                                <div className="global_message__item media">
                                                    <div className="media-left"><a target="_blank" href="https://playerduo.net/betiss">
                                                        <div className="avt-rank avt-sm"><img src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg" className="avt-1-15 avt-img" alt="PD" /><img src="../resources/raw/9.png" className="rank-1-15 rank-img" alt="PlayerDuo" /></div>
                                                    </a></div>
                                                    <div className="media-body"><p className="chat-name"><strong className="name-player-review color-vip-6"><span className="cursor-pointer">Baby Tis </span>
                                                    </strong><i className="fas fa-check-circle" /> : </p>
                                                        <p className="mess-global"><a target="_blank" href="https://playerduo.net/betis" className="link">betis</a> nhận duo liên quân , pubgmb
                                                            ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                                </div>

                                                <div className="global_message__item media">
                                                    <div className="media-left"><a target="_blank" href="https://playerduo.net/janny259">
                                                        <div className="avt-rank avt-sm"><img src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg" className="avt-1-15 avt-img" alt="PD" /><img src="../resources/raw/10.png" className="rank-1-15 rank-img" alt="PlayerDuo" /></div>
                                                    </a></div>
                                                    <div className="media-body"><p className="chat-name"><strong className="name-player-review color-vip-10"><span className="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                    </strong><i className="fas fa-check-circle" /> : </p>
                                                        <p className="mess-global">trade pld, bán steamcode sll ib là onl</p></div>
                                                </div>
                                                <div />
                                            </div>
                                        </div>
                                        <div className="form-group"><span className="input-group"><input placeholder="Enter để gửi tin nhắn!" maxLength={255} type="text" id="formChatText" className="form-control" defaultValue /><p className="send-chat"><i className="fas fa-paper-plane" /></p><span className="scope-icon input-group-addon" /></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide banner carousel slide">
                                <div className="carousel-inner">
                                    <div className="item active"><a href="https://beelevelup.com/" target="_blank" rel="noopener noreferrer"><img src="../resources/raw/446982ba-1aeb-4730-8d52-8e4308776e4b__ca8ef380-0f15-11ee-a657-a54d6be1d46a__admin_banner.jpg" className="img-responsive" alt="banner" /></a></div>
                                    <div className="item"><a href="https://www.facebook.com/groups/playerduovn" target="_blank" rel="noopener noreferrer"><img src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__ff5aee00-79ee-11ed-a19f-23a3b10d190e__admin_banner.jpg" className="img-responsive" alt="banner" /></a></div>
                                </div>
                                <a className="carousel-control left" role="button" href="#"><span className="glyphicon glyphicon-chevron-left" /><span className="sr-only">Previous</span></a><a className="carousel-control right" role="button" href="#"><span className="glyphicon glyphicon-chevron-right" /><span className="sr-only">Next</span></a></div>
                            <div className="action__box">
                                <div className="styles-module_sliderBase__swkx1 action__box--carousel" data-testid="carousel">
                                    <div data-testid="sliderList" className="styles-module_slider__o0fqa">
                                        <div className="action__box--list">
                                            <div className="box-item create"><img src="../resources/raw/avatar6.png" className alt="PD" id="avt-img-reponsiver" />
                                                <div className="box-item-plus"><i className="fal fa-plus" /></div>
                                            </div>
                                            <p className="player-name">Đăng Story</p></div>
                                        <div className="action__box--list">
                                            <div className="box-item"><img src="../resources/raw/e49ffbe1-9391-4177-98ee-c7ac8c7ad135__a5b80762-5e2c-40d2-a860-ec358a4a5dbd__post_video.jpg" className alt="PD" id="avt-img-reponsiver" />
                                                <div className="box-item-label"><p><i className="far fa-eye" /> 10</p></div>
                                            </div>
                                            <div className="player-name">
                                                <div className="avt-rank avt-sm"><img src="../resources/raw/e49ffbe1-9391-4177-98ee-c7ac8c7ad135__fe79ec80-b751-11ec-ba81-7bfd4ef70d64__page_avatar.jpg" className="avt-1-15 avt-img" alt="PD" /><img src="../resources/raw/2-1.png" className="rank-1-15 rank-img" alt="PlayerDuo" /></div>
                                                <p>Cải Xanh</p></div>
                                        </div>
                                        <div className="action__box--list">
                                            <div className="box-item"><img src="../resources/raw/f9e96a5f-cc17-49ca-9582-30b97da6eac1__84d6d119-03ff-453d-8c75-63a7aafe557e__post_video.jpg" className alt="PD" id="avt-img-reponsiver" />
                                                <div className="box-item-label"><p><i className="far fa-eye" /> 32</p></div>
                                            </div>
                                            <div className="player-name">
                                                <div className="avt-rank avt-sm"><img src="../resources/raw/f9e96a5f-cc17-49ca-9582-30b97da6eac1__1a4d2da0-4270-11ee-a657-a54d6be1d46a__page_avatar.jpg" className="avt-1-15 avt-img" alt="PD" /></div>
                                                <p>Hà Minh Thanh</p></div>
                                        </div>
                                        <div className="action__box--list">
                                            <div className="box-item"><img src="../resources/raw/df2e4657-c62d-4a9a-b21a-2302983ebb17__1ee7059e-1e2a-45ce-a271-a2980603fb39__post_video.jpg" className alt="PD" id="avt-img-reponsiver" />
                                                <div className="box-item-label"><p><i className="far fa-eye" /> 85</p></div>
                                            </div>
                                            <div className="player-name">
                                                <div className="avt-rank avt-sm"><img src="../resources/raw/df2e4657-c62d-4a9a-b21a-2302983ebb17__dd30a020-4655-11ee-a657-a54d6be1d46a__page_avatar.jpg" className="avt-1-15 avt-img" alt="PD" /></div>
                                                <p>XynXynhh</p></div>
                                        </div>

                                        <div className="action__box--list"><a href="https://playerduo.net/stories">
                                            <div className="box-item create">
                                                <div className="box-item-plus"><i className="fas fa-arrow-right" /></div>
                                            </div>
                                            <p className="player-name">Xem thêm</p></a></div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="mobile-cate">
                                <div className="label-cate"><p><span>Danh mục game</span></p>
                                    <button type="button" className="btn btn-default"><i className="fal fa-search" /></button>
                                </div>
                                <div className="list-group">
                                    <ul className="scrolls">
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__0ba80060-2b58-11ee-a657-a54d6be1d46a__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__99a18050-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__39932230-34cc-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__5dd9f670-34d4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f79153d0-33e4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__40daec90-33e5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__e671c440-34d4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__38084d60-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__62295df0-34d5-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                        <li className="list-item"><img alt="avatar game" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-player  hidden"><select className="form-control gender ">
                                <option value selected="selected">Giới tính</option>
                                <option value="female">Nữ</option>
                                <option value="male">Nam</option>
                            </select><select className="form-control type ">
                                <option value selected="selected">Thể loại</option>
                                <option value="new">Người mới</option>
                                <option value="hot">Hot</option>
                                <option value="vip">Vip</option>
                            </select>
                                <div className="form-control ready false">Sẵn sàng</div>
                                <div className="form-control online false">Online</div>
                                <button type="button" className="form-control price false btn btn-default">Khoảng giá</button>
                                <input type="text" className="form-control city" placeholder="Sống tại" readOnly defaultValue /><input type="text" className="form-control name" placeholder="Tên/Url Player" autoComplete="off" maxLength={32} defaultValue /><input type="text" className="form-control category" placeholder="Tên game" autoComplete="off" defaultValue />
                                <button type="button" className="form-control btn-filter btn btn-default"><i className="fa fa-search" />
                                    Tìm kiếm
                                </button>
                            </div>
                            <div className="list-player">
                                <div className="box newest-ccdv">
                                    <header className="title-header vip"><h5 className="title-header-left">NEW PROVIDERS</h5>
                                        <p className="title-header-right"><span>Làm mới</span><i className="fas fa-sync false" /></p>
                                    </header>
                                    <div className="card-player row">
                                        {newestCCDVs && newestCCDVs.map((item, key) => (
                                            <div className="col-md-3" key={key}>
                                                <div className="player-information-card-wrap">
                                                    <div className="player-avatar">
                                                        <a target="_blank" href={"/profile/" + item.userProfile.account.username}>
                                                            <img src={item.userProfile.account.avatar} className alt="PD" id="avt-img-reponsiver" />
                                                        </a>
                                                        <a target="_blank" className="player-price" href={"/profile/" + item.userProfile.account.username}>{item.userProfile.price} đ/h</a>
                                                    </div>
                                                    <a target="_blank" className="player-information" href={"/profile/" + item.userProfile.account.username}>
                                                        <h3 className="player-name">
                                                            <a target="_blank" href={"/profile/" + item.userProfile.account.username}>{item.userProfile.account.nickname}</a>
                                                            {/*<i className="fas fa-check-circle kyc" aria-hidden="true" />*/}
                                                            {/*<div className="player-status ready">*/}
                                                            {/*</div>*/}
                                                        </h3>
                                                        <p className="player-title">{item.randomServices}</p>
                                                        <div className="category">
                                                            <div className="div--flex">
                                                                <div className="rate">
                                                                    <i className="fas fa-star" />
                                                                    <p>{item.rate == null ? 0 : item.rate.toFixed(1)} <i>({item.countRate})</i></p>
                                                                </div>
                                                                <div className="rate">
                                                                    <i className="fas fa-eye" />
                                                                    <p>{item.userProfile.views}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}

                                        {/*<div className="col-md-3">*/}
                                        {/*    <div className="player-information-card-wrap">*/}
                                        {/*        <div className="player-avatar">*/}
                                        {/*            <a target="_blank" href="/ngocngayngohihihehe">*/}
                                        {/*                <img src="https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__25eed2b0-417d-11ee-a657-a54d6be1d46a__player_avatar.jpg" className alt="PD" id="avt-img-reponsiver" />*/}
                                        {/*            </a>*/}
                                        {/*            <a target="_blank" className="player-price" href="/ngocngayngohihihehe">69,000 đ/h</a>*/}
                                        {/*        </div>*/}
                                        {/*        <a target="_blank" className="player-information" href="/ngocngayngohihihehe">*/}
                                        {/*            <h3 className="player-name">*/}
                                        {/*                <a target="_blank" href="/ngocngayngohihihehe">Bích Ngọc</a>*/}
                                        {/*                <i className="fas fa-check-circle kyc" aria-hidden="true" />*/}
                                        {/*                <div className="player-status ready">*/}
                                        {/*                </div>*/}
                                        {/*            </h3>*/}
                                        {/*            <p className="player-title">LOL,PUPG PC,TFT,CALL VIDEO</p>*/}
                                        {/*            <div className="category">*/}
                                        {/*                <div className="div--flex">*/}
                                        {/*                    <div className="rate">*/}
                                        {/*                        <i className="fas fa-star" />*/}
                                        {/*                        <p>4.9 <i>(164)</i></p>*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                    </div>
                                </div>
                                <div className="box hot-player">
                                    <header className="title-header hot"><h5 className="title-header-left">HOT PLAYERS</h5>
                                        <p className="title-header-right"><span>Làm mới</span><i className="fas fa-sync false" /></p>
                                    </header>
                                    <div className="card-player row">
                                        <div className="col-md-3">
                                            <div className="player-information-card-wrap">
                                                <div className="player-avatar">
                                                    <a target="_blank" href="/ngocngayngohihihehe">
                                                        <img src="https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__25eed2b0-417d-11ee-a657-a54d6be1d46a__player_avatar.jpg" className alt="PD" id="avt-img-reponsiver" />
                                                    </a>
                                                    <a target="_blank" className="player-price" href="/ngocngayngohihihehe">69,000 đ/h</a>
                                                </div>
                                                <a target="_blank" className="player-information" href="/ngocngayngohihihehe">
                                                    <h3 className="player-name">
                                                        <a target="_blank" href="/ngocngayngohihihehe">Bích Ngọc</a>
                                                        <i className="fas fa-check-circle kyc" aria-hidden="true" />
                                                        <div className="player-status ready">
                                                        </div>
                                                    </h3>
                                                    <p className="player-title">LOL,PUPG PC,TFT,CALL VIDEO</p>
                                                    <div className="category">
                                                        <div className="div--flex">
                                                            <div className="rate">
                                                                <i className="fas fa-star" />
                                                                <p>4.9 <i>(164)</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="player-information-card-wrap">
                                                <div className="player-avatar">
                                                    <a target="_blank" href="/ngocngayngohihihehe">
                                                        <img src="https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__25eed2b0-417d-11ee-a657-a54d6be1d46a__player_avatar.jpg" className alt="PD" id="avt-img-reponsiver" />
                                                    </a>
                                                    <a target="_blank" className="player-price" href="/ngocngayngohihihehe">69,000 đ/h</a>
                                                </div>
                                                <a target="_blank" className="player-information" href="/ngocngayngohihihehe">
                                                    <h3 className="player-name">
                                                        <a target="_blank" href="/ngocngayngohihihehe">Bích Ngọc</a>
                                                        <i className="fas fa-check-circle kyc" aria-hidden="true" />
                                                        <div className="player-status ready">
                                                        </div>
                                                    </h3>
                                                    <p className="player-title">LOL,PUPG PC,TFT,CALL VIDEO</p>
                                                    <div className="category">
                                                        <div className="div--flex">
                                                            <div className="rate">
                                                                <i className="fas fa-star" />
                                                                <p>4.9 <i>(164)</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="player-information-card-wrap">
                                                <div className="player-avatar">
                                                    <a target="_blank" href="/ngocngayngohihihehe">
                                                        <img src="https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__25eed2b0-417d-11ee-a657-a54d6be1d46a__player_avatar.jpg" className alt="PD" id="avt-img-reponsiver" />
                                                    </a>
                                                    <a target="_blank" className="player-price" href="/ngocngayngohihihehe">69,000 đ/h</a>
                                                </div>
                                                <a target="_blank" className="player-information" href="/ngocngayngohihihehe">
                                                    <h3 className="player-name">
                                                        <a target="_blank" href="/ngocngayngohihihehe">Bích Ngọc</a>
                                                        <i className="fas fa-check-circle kyc" aria-hidden="true" />
                                                        <div className="player-status ready">
                                                        </div>
                                                    </h3>
                                                    <p className="player-title">LOL,PUPG PC,TFT,CALL VIDEO</p>
                                                    <div className="category">
                                                        <div className="div--flex">
                                                            <div className="rate">
                                                                <i className="fas fa-star" />
                                                                <p>4.9 <i>(164)</i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(204, 204, 204)', boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px', position: 'absolute', transition: 'visibility 0s linear 0.3s, opacity 0.3s linear 0s', opacity: 0, visibility: 'hidden', zIndex: 2000000000, left: '0px', top: '-10000px'}}>
                <div style={{width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 2000000000, backgroundColor: 'rgb(255, 255, 255)', opacity: '0.05'}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '11px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-11px', zIndex: 2000000000}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '10px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-10px', zIndex: 2000000000}} />
                <div style={{zIndex: 2000000000, position: 'relative'}}>
                    <iframe title="hình ảnh xác thực reCAPTCHA sẽ hết hạn sau 2 phút nữa" src="index_1.html" name="c-jfcpck8j42i6" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style={{width: '100%', height: '100%'}} />
                </div>
            </div>
            <div style={{backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(204, 204, 204)', boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px', position: 'absolute', transition: 'visibility 0s linear 0.3s, opacity 0.3s linear 0s', opacity: 0, visibility: 'hidden', zIndex: 2000000000, left: '0px', top: '-10000px'}}>
                <div style={{width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 2000000000, backgroundColor: 'rgb(255, 255, 255)', opacity: '0.05'}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '11px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-11px', zIndex: 2000000000}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '10px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-10px', zIndex: 2000000000}} />
                <div style={{zIndex: 2000000000, position: 'relative'}}>
                    <iframe title="hình ảnh xác thực reCAPTCHA sẽ hết hạn sau 2 phút nữa" src="index_2.html" name="c-837utcd6rzwu" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style={{width: '100%', height: '100%'}} />
                </div>
            </div>
            <div style={{backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(204, 204, 204)', boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px', position: 'absolute', transition: 'visibility 0s linear 0.3s, opacity 0.3s linear 0s', opacity: 0, visibility: 'hidden', zIndex: 2000000000, left: '0px', top: '-10000px'}}>
                <div style={{width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 2000000000, backgroundColor: 'rgb(255, 255, 255)', opacity: '0.05'}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '11px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-11px', zIndex: 2000000000}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '10px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-10px', zIndex: 2000000000}} />
                <div style={{zIndex: 2000000000, position: 'relative'}}>
                    <iframe title="hình ảnh xác thực reCAPTCHA sẽ hết hạn sau 2 phút nữa" src="index_3.html" name="c-xoyknwz7mz5" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style={{width: '100%', height: '100%'}} />
                </div>
            </div>
            <div style={{backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(204, 204, 204)', boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px', position: 'absolute', transition: 'visibility 0s linear 0.3s, opacity 0.3s linear 0s', opacity: 0, visibility: 'hidden', zIndex: 2000000000, left: '0px', top: '-10000px'}}>
                <div style={{width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 2000000000, backgroundColor: 'rgb(255, 255, 255)', opacity: '0.05'}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '11px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-11px', zIndex: 2000000000}} />
                <div className="g-recaptcha-bubble-arrow" style={{border: '10px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-10px', zIndex: 2000000000}} />
                <div style={{zIndex: 2000000000, position: 'relative'}}>
                    <iframe title="hình ảnh xác thực reCAPTCHA sẽ hết hạn sau 2 phút nữa" src="index_4.html" name="c-9s3rhxajcuwj" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style={{width: '100%', height: '100%'}} />
                </div>
            </div>
        </>
    );
};

export default NewestCCDVs;