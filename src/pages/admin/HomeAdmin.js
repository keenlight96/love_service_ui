import React, {useEffect, useState} from "react";
import UserList from "./UserList";
import {useDispatch} from "react-redux";
import {getAccountCCDVFilter, getAccountUserFilter, getAllUser} from "../../service/AdminService";
import AllUserList from "./AllUserList";

const HomeAdmin = () => {
    const dispatch = useDispatch();
    const [filter,setFilter] =useState({
        username: "",
        status: ""
    })
    useEffect(() =>{
        dispatch(getAllUser());
        dispatch(getAccountUserFilter(filter));
        dispatch(getAccountCCDVFilter(filter));
    },[])
    return (
        <>
            <link rel="stylesheet" href="/template_admin/css/css_sidebar.css"/>
            <div className="wrapper">
                <div className="home-flex">
                    <div className="home-flex-category">
                        <nav className="sidebar">
                            <ul id="sidebar_menu">
                                <li className="">
                                    <a className="has-arrow" href="#" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/dashboard.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Tất cả các đơn  </span>
                                        </div>
                                    </a>
                                    <ul className="mm-collapse">
                                        <li>
                                            <a href="index_2.html">Hóa đơn chi tiết</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mm-active">
                                    <a className="has-arrow" href="#" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/2.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Tài khoản người dùng </span>
                                        </div>
                                    </a>
                                    <ul className="mm-collapse mm-show">
                                        <li>
                                            <a href="editor.html">Tất cả các tài khoản</a>
                                        </li>
                                        <li>
                                            <a href="mail_box.html">Tài khoản bị khóa</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a className="has-arrow" href="#" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/4.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Tài khoản người CCDV</span>
                                        </div>
                                    </a>
                                    <ul className="mm-collapse">
                                        <li>
                                            <a href="admin_list.html">Tất cả tài khoản </a>
                                        </li>
                                        <li>
                                            <a href="admin_list.html">Tất cả tài khoản bị khóa </a>
                                        </li>
                                        <li>
                                            <a href="add_new_admin.html">Tài khoản chưa duyệt</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a className="has-arrow" href="#" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/11.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Quyền</span>
                                        </div>
                                    </a>
                                    <ul className="mm-collapse">
                                        <li>
                                            <a href="module_setting.html">Cài đặt quyền</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="invoice.html" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/7.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Hóa đơn</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="calender.html" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/10.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Top doanh thu tuần</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a className="has-arrow" href="#" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/21.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Widgets</span>
                                        </div>
                                    </a>
                                    <ul className="mm-collapse">
                                        <li>
                                            <a href="chart_box_1.html">Chart Boxes 1</a>
                                        </li>
                                        <li>
                                            <a href="profilebox.html">Profile Box</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a className="has-arrow" href="#" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="img/menu-icon/12.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Maps</span>
                                        </div>
                                    </a>
                                    <ul className="mm-collapse">
                                        <li>
                                            <a href="mapjs.html">Maps JS</a>
                                        </li>
                                        <li>
                                            <a href="vector_map.html">Vector Maps</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="home-flex-content">
                        <UserList/>
                        <AllUserList/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeAdmin;