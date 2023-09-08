import React, {useState} from "react";
import SidebarSupplies from "./SidebarSupplies";
import RegisterSupply from "../../components/common/RegisterSupply";

const CCDVUserProfile = () => {
 const [isClicked, setIsClicked]=useState(false);

    const handleClick = (e) => {
        console.log(e)
        const a=e.target.parentElement.querySelector('.')
        // a.classList.toggle('active');
        console.log(a);
        setIsClicked(!isClicked);
    };

    return (<>
        <div>
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
    </div>

        <div className="wrapper">
            <div className="setting__main row">
                <div className="setting__main--menu col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="menu">
                        <div className="menu__setting  panel-group">
                            <div className="menu__setting--main panel panel-default" onClick={(e) => {handleClick(e)}}>
                                <div className="panel-heading">
                                    <div className="panel-title"><a aria-expanded={isClicked?"true":"false"} className={isClicked?"":"collapsed"} role="button" href="#">TÀI
                                        KHOẢN <i className={isClicked?"fas fa-chevron-down":"fas fa-chevron-right"} /></a></div>
                                </div>
                                <div className={isClicked?"panel-collapse collapse in":"panel-collapse collapse"} style={isClicked?{height: '0px'}:{}}>
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <div className="menu__setting--sub panel panel-default" onClick={(e) => {handleClick(e)}}>
                                                <div className="panel-heading">
                                                    <div className=" active panel-title"><i className="fas fa-user-tie" /> Thông
                                                        tin cá nhân
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu__setting--sub panel panel-default">
                                                <div className="panel-heading">
                                                    <div className="  panel-title"><i className="fas fa-sliders-h" /> Thống kê
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu__setting--sub panel panel-default">
                                                <div className="panel-heading">
                                                    <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="fas fa-cog" /> Cài đặt <i className="fas fa-chevron-right" /></a></div>
                                                </div>
                                                <div className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Email</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Tài khoản và mật khẩu</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Khoá bảo vệ</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Vip</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Hiển thị</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu__setting--sub panel panel-default">
                                                <div className="panel-heading">
                                                    <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="fas fa-history" /> Lịch sử giao dịch <i className="fas fa-chevron-right" /></a></div>
                                                </div>
                                                <div className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Lịch sử donate</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Lịch sử duo</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Lịch sử tạo code</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Biến động số dư</div>
                                                                </div>
                                                            </div>
                                                            <div className="menu__setting--last panel panel-default">
                                                                <div className="panel-heading">
                                                                    <div className="panel-title">Lịch sử mua thẻ</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu__setting--sub panel panel-default">
                                                <div className="panel-heading">
                                                    <div className="  panel-title"><i className="fas fa-credit-card" /> Thanh toán
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu__setting--sub panel panel-default">
                                                <div className="panel-heading">
                                                    <div className="  panel-title"><i className="fas fa-wallet" /> Ví</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* đợi dùng /}
                            {/*<div className="menu__setting--main panel panel-default">*/}
                            {/*    <div className="panel-heading">*/}
                            {/*        <div className="panel-title"><a aria-expanded="true" className role="button" href="#">TRANG*/}
                            {/*            CÁ NHÂN <i className="fas fa-chevron-down" /></a></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="panel-collapse collapse in" style={{}}>*/}
                            {/*        <div className="panel-body">*/}
                            {/*            <div className="panel-group">*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="fas fa-tags" /> Hashtags <i className="fas fa-chevron-right" /></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="panel-collapse collapse">*/}
                            {/*                        <div className="panel-body">*/}
                            {/*                            <div className="panel-group">*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Dành cho sáng tạo nội dung*/}
                            {/*                                        </div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="fas fa-cog" /> Cài đặt <i className="fas fa-chevron-right" /></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="panel-collapse collapse">*/}
                            {/*                        <div className="panel-body">*/}
                            {/*                            <div className="panel-group">*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Url</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Mạng xã hội</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Hiển thị</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="fas fa-users" /> Thành viên <i className="fas fa-chevron-right" /></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="panel-collapse collapse">*/}
                            {/*                        <div className="panel-body">*/}
                            {/*                            <div className="panel-group">*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Bậc</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Danh sách thành viên</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Lịch sử đã đăng ký</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="far fa-dot-circle" /> Mục tiêu <i className="fas fa-chevron-right" /></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="panel-collapse collapse">*/}
                            {/*                        <div className="panel-body">*/}
                            {/*                            <div className="panel-group">*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Cài đặt</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Lịch sử</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-ban" /> Danh sách chặn*/}
                            {/*                            comment*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="menu__setting--main panel panel-default">*/}
                            {/*    <div className="panel-heading">*/}
                            {/*        <div className="panel-title"><a aria-expanded="true" className role="button" href="#">VÍ ĐIỆN*/}
                            {/*            TỬ <i className="fas fa-chevron-down" /></a></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="panel-collapse collapse in" style={{}}>*/}
                            {/*        <div className="panel-body">*/}
                            {/*            <div className="panel-group">*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="fas fa-credit-card" /> Cài đặt <i className="fas fa-chevron-right" /></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="panel-collapse collapse">*/}
                            {/*                        <div className="panel-body">*/}
                            {/*                            <div className="panel-group">*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Thông tin</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Lịch sử</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-link" /> Link Pay</div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="menu__setting--main panel panel-default">*/}
                            {/*    <div className="panel-heading">*/}
                            {/*        <div className="panel-title"><a aria-expanded="true" className role="button" href="#">PLAYER*/}
                            {/*            <i className="fas fa-chevron-down" /></a></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="panel-collapse collapse in" style={{}}>*/}
                            {/*        <div className="panel-body">*/}
                            {/*            <div className="panel-group">*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-user-tie" /> Tổng quan*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-user-friends" /> Khách*/}
                            {/*                            hàng thân thiết*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="fas fa-cog" /> Cài đặt <i className="fas fa-chevron-right" /></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="panel-collapse collapse">*/}
                            {/*                        <div className="panel-body">*/}
                            {/*                            <div className="panel-group">*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Url</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Thông tin Player</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Albums Player</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Cài đặt Duo</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Khác</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="title-sub  panel-title"><a aria-expanded="false" className="collapsed" role="button" href="#"><i className="far fa-calendar-alt" /> Lịch sử nhận Duo, Donate <i className="fas fa-chevron-right" /></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="panel-collapse collapse">*/}
                            {/*                        <div className="panel-body">*/}
                            {/*                            <div className="panel-group">*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Lịch sử nhận duo</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="menu__setting--last panel panel-default">*/}
                            {/*                                    <div className="panel-heading">*/}
                            {/*                                        <div className="panel-title">Lịch sử nhận donate</div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-ban" /> Danh sách chặn*/}
                            {/*                            User*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-book" /> Hướng Dẫn Player*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-link" /> Link Player</div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="menu__setting--main panel panel-default">*/}
                            {/*    <div className="panel-heading">*/}
                            {/*        <div className="panel-title"><a aria-expanded="true" className role="button" href="#">DONATE*/}
                            {/*            <i className="fas fa-chevron-down" /></a></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="panel-collapse collapse in" style={{}}>*/}
                            {/*        <div className="panel-body">*/}
                            {/*            <div className="panel-group">*/}
                            {/*                <div className="menu__setting--sub panel panel-default">*/}
                            {/*                    <div className="panel-heading">*/}
                            {/*                        <div className="  panel-title"><i className="fas fa-cog" /> Cài đặt</div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="btn-drawer-setting visible-xs"><i className="fas fa-chevron-right" /></div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="aside">
                        <div className="row flowaccount">
                            <div className="col-sm-4 col-xs-12">
                                <div className="border"><p>TỔNG TIỀN ĐÃ NẠP</p><span>0đ </span></div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="border"><p>TỔNG TIỀN ĐÃ DONATE</p><span>0đ </span></div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="border"><p>SỐ GIỜ ĐÃ THUÊ</p><span>0 Giờ</span></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 personalinfo"><h3>Thông tin cá nhân</h3>
                                <div className="d-flex img-avatar"><img src="../resources/raw/avatar6.png" className alt="avatar" sizes="sm" />
                                    <div className="cropimg-avatar">
                                        <button type="button"><span> Thay Đổi<p>JPG, GIF or PNG, &lt;5 MB. </p></span>
                                        </button>
                                    </div>
                                </div>
                                <form className="from-userinfo">
                                    <div className="fieldGroup "><p className="control-label">Họ và tên</p><input type="text" name="name" placeholder maxLength={5000} autoComplete="false" defaultValue="keenlight" />
                                    </div>
                                    <div className="fieldGroup "><p className="control-label">Biệt danh</p><input type="text" name="nickName" placeholder maxLength={5000} autoComplete="false" defaultValue="keenlight" />
                                    </div>
                                    <p className="control-label">Ngày sinh</p>
                                    <div className="datefield">
                                        <div className="react-datepicker-wrapper">
                                            <div className="react-datepicker__input-container">
                                                <button className="example-custom-input" type="button" />
                                            </div>
                                        </div>
                                        <div />
                                    </div>
                                    <p className="control-label">Ngôn ngữ</p><select name="language">
                                    <option disabled>--- Chọn ngôn ngữ ---</option>
                                    <option value="5b99f97c978dff3d115260c7" selected="selected">Tiếng Việt</option>
                                </select>
                                    <p className="control-label">Quốc gia</p><select name="country">
                                    <option value="5b99f97c978dff3d115260e3">Afghanistan</option>
                                    <option value="5b99f97c978dff3d115260e4">Albania</option>
                                    <option value="5b99f97c978dff3d115260e5">Algeria</option>
                                    <option value="5b99f97c978dff3d115260e6">Andorra</option>
                                    <option value="5b99f97c978dff3d115260e7">Angola</option>
                                    <option value="5b99f97c978dff3d115260e8">Anguilla</option>
                                    <option value="5b99f97c978dff3d115260e9">Antigua and Barbuda</option>
                                    <option value="5b99f97c978dff3d115260ea">Argentina</option>
                                    <option value="5b99f97c978dff3d115260eb">Armenia</option>
                                    <option value="5b99f97c978dff3d115260ec">Aruba</option>
                                    <option value="5b99f97c978dff3d115260ed">Australia</option>
                                    <option value="5b99f97c978dff3d115260ee">Austria</option>
                                    <option value="5b99f97c978dff3d115260ef">Azerbaijan</option>
                                    <option value="5b99f97c978dff3d115260f0">Bahamas</option>
                                    <option value="5b99f97c978dff3d115260f1">Bahrain</option>
                                    <option value="5b99f97c978dff3d115260f2">Bangladesh</option>
                                    <option value="5b99f97c978dff3d115260f3">Barbados</option>
                                    <option value="5b99f97c978dff3d115260f4">Belarus</option>
                                    <option value="5b99f97c978dff3d115260f5">Belgium</option>
                                    <option value="5b99f97c978dff3d115260f6">Belize</option>
                                    <option value="5b99f97c978dff3d115260f7">Benin</option>
                                    <option value="5b99f97c978dff3d115260f8">Bermuda</option>
                                    <option value="5b99f97c978dff3d115260f9">Bhutan</option>
                                    <option value="5b99f97c978dff3d115260fa">Bolivia</option>
                                    <option value="5b99f97c978dff3d115260fb">Bonaire</option>
                                    <option value="5b99f97c978dff3d115260fc">Bosnia-Herzegovina</option>
                                    <option value="5b99f97c978dff3d115260fd">Botswana</option>
                                    <option value="5b99f97c978dff3d115260fe">Bouvet Island</option>
                                    <option value="5b99f97c978dff3d115260ff">Brazil</option>
                                    <option value="5b99f97c978dff3d11526100">Brunei</option>
                                    <option value="5b99f97c978dff3d11526101">Bulgaria</option>
                                    <option value="5b99f97c978dff3d11526102">Burkina Faso</option>
                                    <option value="5b99f97c978dff3d11526103">Burundi</option>
                                    <option value="5b99f97c978dff3d11526104">Cambodia</option>
                                    <option value="5b99f97c978dff3d11526105">Cameroon</option>
                                    <option value="5b99f97c978dff3d11526106">Canada</option>
                                    <option value="5b99f97c978dff3d11526107">Cape Verde</option>
                                    <option value="5b99f97c978dff3d11526108">Cayman Islands</option>
                                    <option value="5b99f97c978dff3d11526109">Central African Republic</option>
                                    <option value="5b99f97c978dff3d1152610a">Chad</option>
                                    <option value="5b99f97c978dff3d1152610b">Chile</option>
                                    <option value="5b99f97c978dff3d1152610c">China</option>
                                    <option value="5b99f97c978dff3d1152610d">Christmas Island</option>
                                    <option value="5b99f97c978dff3d1152610e">Cocos (Keeling) Islands</option>
                                    <option value="5b99f97c978dff3d1152610f">Colombia</option>
                                    <option value="5b99f97c978dff3d11526110">Comoros</option>
                                    <option value="5b99f97c978dff3d11526111">Congo, Democratic Republic of the (Zaire)
                                    </option>
                                    <option value="5b99f97c978dff3d11526112">Congo, Republic of</option>
                                    <option value="5b99f97c978dff3d11526113">Cook Islands</option>
                                    <option value="5b99f97c978dff3d11526114">Costa Rica</option>
                                    <option value="5b99f97c978dff3d11526115">Croatia</option>
                                    <option value="5b99f97c978dff3d11526116">Cuba</option>
                                    <option value="5b99f97c978dff3d11526117">Curacao</option>
                                    <option value="5b99f97c978dff3d11526118">Cyprus</option>
                                    <option value="5b99f97c978dff3d11526119">Czech Republic</option>
                                    <option value="5b99f97c978dff3d1152611a">Denmark</option>
                                    <option value="5b99f97c978dff3d1152611b">Djibouti</option>
                                    <option value="5b99f97c978dff3d1152611c">Dominica</option>
                                    <option value="5b99f97c978dff3d1152611d">Dominican Republic</option>
                                    <option value="5b99f97c978dff3d1152611e">Ecuador</option>
                                    <option value="5b99f97c978dff3d1152611f">Egypt</option>
                                    <option value="5b99f97c978dff3d11526120">El Salvador</option>
                                    <option value="5b99f97c978dff3d11526121">Equatorial Guinea</option>
                                    <option value="5b99f97c978dff3d11526122">Eritrea</option>
                                    <option value="5b99f97c978dff3d11526123">Estonia</option>
                                    <option value="5b99f97c978dff3d11526124">Ethiopia</option>
                                    <option value="5b99f97c978dff3d11526125">Falkland Islands</option>
                                    <option value="5b99f97c978dff3d11526126">Faroe Islands</option>
                                    <option value="5b99f97c978dff3d11526127">Fiji</option>
                                    <option value="5b99f97c978dff3d11526128">Finland</option>
                                    <option value="5b99f97c978dff3d11526129">France</option>
                                    <option value="5b99f97c978dff3d1152612a">French Guiana</option>
                                    <option value="5b99f97c978dff3d1152612b">Gabon</option>
                                    <option value="5b99f97c978dff3d1152612c">Gambia</option>
                                    <option value="5b99f97c978dff3d1152612d">Georgia</option>
                                    <option value="5b99f97c978dff3d1152612e">Germany</option>
                                    <option value="5b99f97c978dff3d1152612f">Ghana</option>
                                    <option value="5b99f97c978dff3d11526130">Gibraltar</option>
                                    <option value="5b99f97c978dff3d11526131">Greece</option>
                                    <option value="5b99f97c978dff3d11526132">Greenland</option>
                                    <option value="5b99f97c978dff3d11526133">Grenada</option>
                                    <option value="5b99f97c978dff3d11526134">Guadeloupe (French)</option>
                                    <option value="5b99f97c978dff3d11526135">Guam (USA)</option>
                                    <option value="5b99f97c978dff3d11526136">Guatemala</option>
                                    <option value="5b99f97c978dff3d11526137">Guinea</option>
                                    <option value="5b99f97c978dff3d11526138">Guyana</option>
                                    <option value="5b99f97c978dff3d11526139">Haiti</option>
                                    <option value="5b99f97c978dff3d1152613a">Holy See</option>
                                    <option value="5b99f97c978dff3d1152613b">Honduras</option>
                                    <option value="5b99f97c978dff3d1152613c">Hong Kong</option>
                                    <option value="5b99f97c978dff3d1152613d">Hungary</option>
                                    <option value="5b99f97c978dff3d1152613e">Iceland</option>
                                    <option value="5b99f97c978dff3d1152613f">India</option>
                                    <option value="5b99f97c978dff3d11526140">Indonesia</option>
                                    <option value="5b99f97c978dff3d11526141">Iran</option>
                                    <option value="5b99f97c978dff3d11526142">Iraq</option>
                                    <option value="5b99f97c978dff3d11526143">Ireland</option>
                                    <option value="5b99f97c978dff3d11526144">Israel</option>
                                    <option value="5b99f97c978dff3d11526145">Italy</option>
                                    <option value="5b99f97c978dff3d11526146">Ivory Coast (Cote D`Ivoire)</option>
                                    <option value="5b99f97c978dff3d11526147">Jamaica</option>
                                    <option value="5b99f97c978dff3d11526148">Japan</option>
                                    <option value="5b99f97c978dff3d11526149">Jordan</option>
                                    <option value="5b99f97c978dff3d1152614a">Kazakhstan</option>
                                    <option value="5b99f97c978dff3d1152614b">Kenya</option>
                                    <option value="5b99f97c978dff3d1152614c">Kiribati</option>
                                    <option value="5b99f97c978dff3d1152614d">Kosovo</option>
                                    <option value="5b99f97c978dff3d1152614e">Kuwait</option>
                                    <option value="5b99f97c978dff3d1152614f">Kyrgyzstan</option>
                                    <option value="5b99f97c978dff3d11526150">Laos</option>
                                    <option value="5b99f97c978dff3d11526151">Latvia</option>
                                    <option value="5b99f97c978dff3d11526152">Lebanon</option>
                                    <option value="5b99f97c978dff3d11526153">Lesotho</option>
                                    <option value="5b99f97c978dff3d11526154">Liberia</option>
                                    <option value="5b99f97c978dff3d11526155">Libya</option>
                                    <option value="5b99f97c978dff3d11526156">Liechtenstein</option>
                                    <option value="5b99f97c978dff3d11526157">Lithuania</option>
                                    <option value="5b99f97c978dff3d11526158">Luxembourg</option>
                                    <option value="5b99f97c978dff3d11526159">Macau</option>
                                    <option value="5b99f97c978dff3d1152615a">Macedonia</option>
                                    <option value="5b99f97c978dff3d1152615b">Madagascar</option>
                                    <option value="5b99f97c978dff3d1152615c">Malawi</option>
                                    <option value="5b99f97c978dff3d1152615d">Malaysia</option>
                                    <option value="5b99f97c978dff3d1152615e">Maldives</option>
                                    <option value="5b99f97c978dff3d1152615f">Mali</option>
                                    <option value="5b99f97c978dff3d11526160">Malta</option>
                                    <option value="5b99f97c978dff3d11526161">Marshall Islands</option>
                                    <option value="5b99f97c978dff3d11526162">Martinique (French)</option>
                                    <option value="5b99f97c978dff3d11526163">Mauritania</option>
                                    <option value="5b99f97c978dff3d11526164">Mauritius</option>
                                    <option value="5b99f97c978dff3d11526165">Mayotte</option>
                                    <option value="5b99f97c978dff3d11526166">Mexico</option>
                                    <option value="5b99f97c978dff3d11526167">Micronesia</option>
                                    <option value="5b99f97c978dff3d11526168">Moldova</option>
                                    <option value="5b99f97c978dff3d11526169">Monaco</option>
                                    <option value="5b99f97c978dff3d1152616a">Mongolia</option>
                                    <option value="5b99f97c978dff3d1152616b">Montenegro</option>
                                    <option value="5b99f97c978dff3d1152616c">Montserrat</option>
                                    <option value="5b99f97c978dff3d1152616d">Morocco</option>
                                    <option value="5b99f97c978dff3d1152616e">Mozambique</option>
                                    <option value="5b99f97c978dff3d1152616f">Myanmar</option>
                                    <option value="5b99f97c978dff3d11526170">Namibia</option>
                                    <option value="5b99f97c978dff3d11526171">Nauru</option>
                                    <option value="5b99f97c978dff3d11526172">Nepal</option>
                                    <option value="5b99f97c978dff3d11526173">Netherlands</option>
                                    <option value="5b99f97c978dff3d11526174">New Caledonia (French)</option>
                                    <option value="5b99f97c978dff3d11526175">New Zealand</option>
                                    <option value="5b99f97c978dff3d11526176">Nicaragua</option>
                                    <option value="5b99f97c978dff3d11526177">Niger</option>
                                    <option value="5b99f97c978dff3d11526178">Nigeria</option>
                                    <option value="5b99f97c978dff3d11526179">Niue</option>
                                    <option value="5b99f97c978dff3d1152617a">Norfolk Island</option>
                                    <option value="5b99f97c978dff3d1152617b">North Korea</option>
                                    <option value="5b99f97c978dff3d1152617c">Northern Mariana Islands</option>
                                    <option value="5b99f97c978dff3d1152617d">Norway</option>
                                    <option value="5b99f97c978dff3d1152617e">Oman</option>
                                    <option value="5b99f97c978dff3d1152617f">Pakistan</option>
                                    <option value="5b99f97c978dff3d11526180">Palau</option>
                                    <option value="5b99f97c978dff3d11526181">Panama</option>
                                    <option value="5b99f97c978dff3d11526182">Papua New Guinea</option>
                                    <option value="5b99f97c978dff3d11526183">Paraguay</option>
                                    <option value="5b99f97c978dff3d11526184">Peru</option>
                                    <option value="5b99f97c978dff3d11526185">Philippines</option>
                                    <option value="5b99f97c978dff3d11526186">Pitcairn Island</option>
                                    <option value="5b99f97c978dff3d11526187">Poland</option>
                                    <option value="5b99f97c978dff3d11526188">Polynesia (French)</option>
                                    <option value="5b99f97c978dff3d11526189">Portugal</option>
                                    <option value="5b99f97c978dff3d1152618a">Puerto Rico</option>
                                    <option value="5b99f97c978dff3d1152618b">Qatar</option>
                                    <option value="5b99f97c978dff3d1152618c">Reunion</option>
                                    <option value="5b99f97c978dff3d1152618d">Romania</option>
                                    <option value="5b99f97c978dff3d1152618e">Russia</option>
                                    <option value="5b99f97c978dff3d1152618f">Rwanda</option>
                                    <option value="5b99f97c978dff3d11526190">Saint Helena</option>
                                    <option value="5b99f97c978dff3d11526191">Saint Kitts and Nevis</option>
                                    <option value="5b99f97c978dff3d11526192">Saint Lucia</option>
                                    <option value="5b99f97c978dff3d11526193">Saint Pierre and Miquelon</option>
                                    <option value="5b99f97c978dff3d11526194">Saint Vincent and Grenadines</option>
                                    <option value="5b99f97c978dff3d11526195">Samoa</option>
                                    <option value="5b99f97c978dff3d11526196">San Marino</option>
                                    <option value="5b99f97c978dff3d11526197">Sao Tome and Principe</option>
                                    <option value="5b99f97c978dff3d11526198">Saudi Arabia</option>
                                    <option value="5b99f97c978dff3d11526199">Senegal</option>
                                    <option value="5b99f97c978dff3d1152619a">Serbia</option>
                                    <option value="5b99f97c978dff3d1152619b">Seychelles</option>
                                    <option value="5b99f97c978dff3d1152619c">Sierra Leone</option>
                                    <option value="5b99f97c978dff3d1152619d">Singapore</option>
                                    <option value="5b99f97c978dff3d1152619e">Sint Maarten</option>
                                    <option value="5b99f97c978dff3d1152619f">Slovakia</option>
                                    <option value="5b99f97c978dff3d115261a0">Slovenia</option>
                                    <option value="5b99f97c978dff3d115261a1">Solomon Islands</option>
                                    <option value="5b99f97c978dff3d115261a2">Somalia</option>
                                    <option value="5b99f97c978dff3d115261a3">South Africa</option>
                                    <option value="5b99f97c978dff3d115261a4">South Georgia and South Sandwich Islands
                                    </option>
                                    <option value="5b99f97c978dff3d115261a5">South Korea</option>
                                    <option value="5b99f97c978dff3d115261a6">South Sudan</option>
                                    <option value="5b99f97c978dff3d115261a7">Spain</option>
                                    <option value="5b99f97c978dff3d115261a8">Sri Lanka</option>
                                    <option value="5b99f97c978dff3d115261a9">Sudan</option>
                                    <option value="5b99f97c978dff3d115261aa">Suriname</option>
                                    <option value="5b99f97c978dff3d115261ab">Svalbard and Jan Mayen Islands</option>
                                    <option value="5b99f97c978dff3d115261ac">Swaziland</option>
                                    <option value="5b99f97c978dff3d115261ad">Sweden</option>
                                    <option value="5b99f97c978dff3d115261ae">Switzerland</option>
                                    <option value="5b99f97c978dff3d115261af">Syria</option>
                                    <option value="5b99f97c978dff3d115261b0">Taiwan</option>
                                    <option value="5b99f97c978dff3d115261b1">Tajikistan</option>
                                    <option value="5b99f97c978dff3d115261b2">Tanzania</option>
                                    <option value="5b99f97c978dff3d115261b3">Thailand</option>
                                    <option value="5b99f97c978dff3d115261b4">Timor-Leste (East Timor)</option>
                                    <option value="5b99f97c978dff3d115261b5">Togo</option>
                                    <option value="5b99f97c978dff3d115261b6">Tokelau</option>
                                    <option value="5b99f97c978dff3d115261b7">Tonga</option>
                                    <option value="5b99f97c978dff3d115261b8">Trinidad and Tobago</option>
                                    <option value="5b99f97c978dff3d115261b9">Tunisia</option>
                                    <option value="5b99f97c978dff3d115261ba">Turkey</option>
                                    <option value="5b99f97c978dff3d115261bb">Turkmenistan</option>
                                    <option value="5b99f97c978dff3d115261bc">Turks and Caicos Islands</option>
                                    <option value="5b99f97c978dff3d115261bd">Tuvalu</option>
                                    <option value="5b99f97c978dff3d115261be">Uganda</option>
                                    <option value="5b99f97c978dff3d115261bf">Ukraine</option>
                                    <option value="5b99f97c978dff3d115261c0">United Arab Emirates</option>
                                    <option value="5b99f97c978dff3d115261c1">United Kingdom</option>
                                    <option value="5b99f97c978dff3d115261c2">United States</option>
                                    <option value="5b99f97c978dff3d115261c3">Uruguay</option>
                                    <option value="5b99f97c978dff3d115261c4">Uzbekistan</option>
                                    <option value="5b99f97c978dff3d115261c5">Vanuatu</option>
                                    <option value="5b99f97c978dff3d115261c6">Venezuela</option>
                                    <option value="5b99f97c978dff3d115261c7" selected="selected">Vietnam</option>
                                    <option value="5b99f97c978dff3d115261c8">Virgin Islands</option>
                                    <option value="5b99f97c978dff3d115261c9">Wallis and Futuna Islands</option>
                                    <option value="5b99f97c978dff3d115261ca">Yemen</option>
                                    <option value="5b99f97c978dff3d115261cb">Zambia</option>
                                    <option value="5b99f97c978dff3d115261cc">Zimbabwe</option>
                                    <option value="5b99f97c978dff3d115261cd">Åland Islands</option>
                                </select>
                                    <p className="control-label">Thành phố</p><select name="city">
                                    <option value="5b99f9e35180d13ea22a97fc" selected="selected">An Giang</option>
                                    <option value="5b99f9e35180d13ea22a97fd"> Bà Rịa Vũng Tàu</option>
                                    <option value="5b99f9e35180d13ea22a97fe"> Bình Dương</option>
                                    <option value="5b99f9e35180d13ea22a97ff"> Bình Phước</option>
                                    <option value="5b99f9e35180d13ea22a9800"> Bình Thuận</option>
                                    <option value="5b99f9e35180d13ea22a9801"> Bình Định</option>
                                    <option value="5b99f9e35180d13ea22a9802"> Bạc Liêu</option>
                                    <option value="5b99f9e35180d13ea22a9803"> Bắc Cạn</option>
                                    <option value="5b99f9e35180d13ea22a9804"> Bắc Giang</option>
                                    <option value="5b99f9e35180d13ea22a9805"> Bắc Ninh</option>
                                    <option value="5b99f9e35180d13ea22a9806"> Bến Tre</option>
                                    <option value="5b99f9e35180d13ea22a9807"> Cao Bằng</option>
                                    <option value="5b99f9e35180d13ea22a9808"> Cà Mau</option>
                                    <option value="5b99f9e35180d13ea22a9809"> Cần Thơ</option>
                                    <option value="5b99f9e35180d13ea22a980a"> Đà Nẵng</option>
                                    <option value="5b99f9e35180d13ea22a980b"> Đăk Lăk</option>
                                    <option value="5b99f9e35180d13ea22a980c"> Điện Biên</option>
                                    <option value="5b99f9e35180d13ea22a980d"> Đồng Nai</option>
                                    <option value="5b99f9e35180d13ea22a980e"> Đồng Tháp</option>
                                    <option value="5b99f9e35180d13ea22a980f"> Gia Lai</option>
                                    <option value="5b99f9e35180d13ea22a9810"> Hà Giang</option>
                                    <option value="5b99f9e35180d13ea22a9811"> Hà Nam</option>
                                    <option value="5b99f9e35180d13ea22a9812"> Hà Nội</option>
                                    <option value="5b99f9e35180d13ea22a9813"> Hà Tây</option>
                                    <option value="5b99f9e35180d13ea22a9814"> Hà Tĩnh</option>
                                    <option value="5b99f9e35180d13ea22a9815"> Hà Đông</option>
                                    <option value="5b99f9e35180d13ea22a9816"> Hòa Bình</option>
                                    <option value="5b99f9e35180d13ea22a9817"> Hưng Yên</option>
                                    <option value="5b99f9e35180d13ea22a9818"> Hạ Long</option>
                                    <option value="5b99f9e35180d13ea22a9819"> Hải Dương</option>
                                    <option value="5b99f9e35180d13ea22a981a"> Hải Phòng</option>
                                    <option value="5b99f9e35180d13ea22a981b"> Hồ Chí Minh</option>
                                    <option value="5b99f9e35180d13ea22a981c"> Khánh Hòa</option>
                                    <option value="5b99f9e35180d13ea22a981d"> Kiên Giang</option>
                                    <option value="5b99f9e35180d13ea22a981e"> KonTum</option>
                                    <option value="5b99f9e35180d13ea22a981f"> Lai Châu</option>
                                    <option value="5b99f9e35180d13ea22a9820"> Long An</option>
                                    <option value="5b99f9e35180d13ea22a9821"> Lào Cai</option>
                                    <option value="5b99f9e35180d13ea22a9822"> Lâm Đồng</option>
                                    <option value="5b99f9e35180d13ea22a9823"> Lạng Sơn</option>
                                    <option value="5b99f9e35180d13ea22a9824"> Nam Định</option>
                                    <option value="5b99f9e35180d13ea22a9825"> Nghệ An</option>
                                    <option value="5b99f9e35180d13ea22a9826"> Ninh Bình</option>
                                    <option value="5b99f9e35180d13ea22a9827"> Ninh Thuận</option>
                                    <option value="5b99f9e35180d13ea22a9828"> Phú Thọ</option>
                                    <option value="5b99f9e35180d13ea22a9829"> Phú Yên</option>
                                    <option value="5b99f9e35180d13ea22a982a"> Quảng Bình</option>
                                    <option value="5b99f9e35180d13ea22a982b"> Quảng Nam</option>
                                    <option value="5b99f9e35180d13ea22a982c"> Quảng Ngãi</option>
                                    <option value="5b99f9e35180d13ea22a982d"> Quảng Ninh</option>
                                    <option value="5b99f9e35180d13ea22a982e"> Quảng Trị</option>
                                    <option value="5b99f9e35180d13ea22a982f"> Sóc Trăng</option>
                                    <option value="5b99f9e35180d13ea22a9830"> Sơn La</option>
                                    <option value="5b99f9e35180d13ea22a9831"> Thanh Hóa</option>
                                    <option value="5b99f9e35180d13ea22a9832"> Thái Bình</option>
                                    <option value="5b99f9e35180d13ea22a9833"> Thái Nguyên</option>
                                    <option value="5b99f9e35180d13ea22a9834"> Thừa Thiên Huế</option>
                                    <option value="5b99f9e35180d13ea22a9835"> Tiền Giang</option>
                                    <option value="5b99f9e35180d13ea22a9836"> Trà Vinh</option>
                                    <option value="5b99f9e35180d13ea22a9837"> Tuyên Quang</option>
                                    <option value="5b99f9e35180d13ea22a9838"> Tây Ninh</option>
                                    <option value="5b99f9e35180d13ea22a9839"> Vĩnh Long</option>
                                    <option value="5b99f9e35180d13ea22a983a"> Vĩnh Phúc</option>
                                    <option value="5b99f9e35180d13ea22a983b"> Yên Bái</option>
                                    <option value="5b99f9e35180d13ea22a983c">Khác</option>
                                </select>
                                    <p className="control-label">Giới tính</p>
                                    <div className="d-flex"><label className="gender--radio"><input name="gender" type="radio" defaultValue="male" defaultChecked="checked" />Nam<span /></label><label className="gender--radio"><input name="gender" type="radio" defaultValue="female" />Nữ<span /></label></div>
                                    <hr />
                                    <button type="submit" className="btn-update">Cập nhật</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default CCDVUserProfile