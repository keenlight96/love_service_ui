export default function Navbar() {
    return (
        <nav className=" navbar navbar-expand-lg bg-body-tertiary">
            <div className="ml-5 container-fluid">
                <header className="ml-5 menu__header" id="header-menu">
                    <div className="navbar-header">
                        <a href="https://playerduo.net/" className="logo">
                            <img alt="logo playerduo" src="../resources/raw/logo.png"/>
                        </a>
                    </div>
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-left">
                            <li className="item-search">
                                <nav className="Navbar__Item">
                                    <div className="Navbar__Link">
                                        <div className="Group-search visible ">
                                    <span className="search input-group">
                                        <input placeholder="Nickname/Url ..." type="text" className="form-control"
                                               value="" />
                                        <span className="input-group-addon" style={{paddingRight:10, backgroundColor:"white"}}>
                                            <button type="button" className="btn btn-default" style={{backgroundColor:"white"}}>
                                                <i className="fal fa-search" aria-hidden="true"></i>
                                            </button>
                                        </span>
                                    </span>
                                        </div>
                                    </div>
                                </nav>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-center">
                            <li className="item-icon"><a className="group-user " href="https://playerduo.net/"><i
                                className="fal fa-home-alt"></i></a></li>
                            <li className="item-icon"><a className="group-user " href="https://playerduo.net/stories"><i
                                className="fal fa-camera-movie"></i></a></li>
                            <li className="item-icon group-fb"><a className="group-user"><i
                                className="fal fa-trophy-alt"></i></a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="item-icon notificate dropdown">
                                <a id="basic-nav-dropdown" role="button"
                                   className="dropdown-toggle"
                                   aria-haspopup="true"
                                   aria-expanded="false" href="#">
                                    <div className="item-title"><i className="fal fa-bell"></i></div>
                                </a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                    <div className="content">
                                        <div className="tab-notif-common"><h5><span>Thông báo</span></h5>
                                            <div className="tab-action"><p className="active"><span>Chính</span></p>
                                                <p className=""><span>Khác</span></p>
                                                <p className=""><span>Theo dõi</span></p>
                                                <p className=""><span>Tương tác</span></p></div>
                                        </div>
                                        <div>
                                            <div className="infinite-scroll-component "
                                                 style={{height: "400px", overflow: "auto"}}>
                                                <div className="text-center" style={{color: "rgb(51, 51, 51)"}}>
                                                    <span>Đợi chút xíu ...</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon balance"><a className="money-user"><i
                                className="far fa-plus"></i> 0 đ</a>
                            </li>
                            <li className="item-icon item-avatar dropdown">
                                <a id="header-nav-dropdown" role="button"
                                   className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#">
                                    <img src="../resources/raw/avatar6.png" className="avt-img" alt="PD"/>
                                </a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="header-nav-dropdown">
                                    <li role="presentation" className="page-user"><a role="menuitem" tabIndex="-1"
                                                                                     href="#">
                                        <img
                                            src="../resources/raw/avatar6.png" className="avt-img" alt="PD"/>
                                        <div className="text-logo"><h5>keenlight</h5>
                                            <p>ID : <span>keenlight</span></p>
                                            <p className="label-user-page"><span>Xem trang cá nhân của bạn</span></p>
                                        </div>
                                    </a></li>
                                    <li role="presentation" className="menu-item hidden-lg hidden-md"><a role="menuitem"
                                                                                                         tabIndex="-1"
                                                                                                         href="#"><i
                                        className="fas fa-plus"></i> <span>Số dư</span> : <span
                                        className="money">0 đ</span></a>
                                    </li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-minus"></i> <span>Rút tiền</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-credit-card"></i> <span>Mua thẻ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-user-lock"></i> <span>Tạo khóa bảo vệ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-clock"></i> <span>Lịch sử giao dịch</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-users"></i> <span>Danh sách theo dõi</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-cogs"></i> <span>Cài đặt tài khoản</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-power-off"></i> <span>Đăng xuất</span></a></li>
                                    <div className="menu-item list-flag">
                                        <div className="box-item">
                                            <div className="flag-all active">
                                                <img src="../resources/raw/2.png" className="flag flag-vn" alt="PD"/>
                                            </div>
                                            <div className="flag-all false">
                                                <img src="../resources/raw/1.png" className="flag flag-en" alt="PD"/>
                                            </div>
                                        </div>
                                        <div className="box-item">
                                            <a href="https://www.facebook.com/groups/playerduovn" target="_blank"
                                               rel="noopener noreferrer"><span>Group</span>
                                            </a>
                                            <a href="https://www.facebook.com/playerduo" target="_blank"
                                               rel="noopener noreferrer">
                                                <span>Fanpage</span>
                                            </a>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon mode"><a className="group-user"><i className="fas fa-moon"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-mobile hidden">
                        <ul className="navbar-nav">
                            <li className="item-icon notificate dropdown"><a id="basic-nav-dropdown" role="button"
                                                                             className="dropdown-toggle"
                                                                             aria-haspopup="true"
                                                                             aria-expanded="false" href="#">
                                <div className="item-title"><i className="fal fa-bell"></i></div>
                            </a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                    <div className="content">
                                        <div className="tab-notif-common"><h5><span>Thông báo</span></h5>
                                            <div className="tab-action"><p className="active"><span>Chính</span></p>
                                                <p className=""><span>Khác</span></p>
                                                <p className=""><span>Theo dõi</span></p>
                                                <p className=""><span>Tương tác</span></p></div>
                                        </div>
                                        <div>
                                            <div className="infinite-scroll-component "
                                                 style={{height: "400px", overflow: "auto"}}>
                                                <div className="text-center" style={{color: "rgb(51, 51, 51)"}}>
                                                    <span>Đợi chút xíu ...</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon item-avatar dropdown"><a id="header-nav-dropdown" role="button"
                                                                              className="dropdown-toggle"
                                                                              aria-haspopup="true"
                                                                              aria-expanded="false" href="#"><img
                                src="../resources/raw/avatar6.png"
                                className="avt-img"
                                alt="PD"/></a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="header-nav-dropdown">
                                    <li role="presentation" className="page-user"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><img
                                        src="../resources/raw/avatar6.png" className="avt-img" alt="PD"/>
                                        <div className="text-logo"><h5>keenlight</h5>
                                            <p>ID : <span>keenlight</span></p>
                                            <p className="label-user-page"><span>Xem trang cá nhân của bạn</span></p>
                                        </div>
                                    </a></li>
                                    <li role="presentation" className="menu-item hidden-lg hidden-md"><a role="menuitem"
                                                                                                         tabIndex="-1"
                                                                                                         href="#"><i
                                        className="fas fa-plus"></i> <span>Số dư</span> : <span
                                        className="money">0 đ</span></a>
                                    </li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-minus"></i> <span>Rút tiền</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-credit-card"></i> <span>Mua thẻ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-user-lock"></i> <span>Tạo khóa bảo vệ</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-clock"></i> <span>Lịch sử giao dịch</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-users"></i> <span>Danh sách theo dõi</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-cogs"></i> <span>Cài đặt tài khoản</span></a></li>
                                    <li role="presentation" className="menu-item"><a role="menuitem" tabIndex="-1"
                                                                                     href="#"><i
                                        className="fas fa-power-off"></i> <span>Đăng xuất</span></a></li>
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
                        <a className="btn-bars"><i className="fal fa-bars"></i></a>
                        <div className="flex-side hidden">
                            <div className="overlay"></div>
                            <div className="content">
                                <div className="box-search">
                                    <nav className="Navbar__Item">
                                        <div className="Navbar__Link">
                                            <div className="Group-search visible "><span className="search input-group"><input
                                                placeholder="Nickname/Url ..." type="text" className="form-control"
                                                value=""/><span
                                                className="input-group-addon"><button type="button"
                                                                                      className="btn btn-default"><i
                                                className="fal fa-search" aria-hidden="true"></i></button></span></span>
                                            </div>
                                        </div>
                                    </nav>
                                    <a className="btn-close"><i className="fal fa-times fa-2x"></i></a></div>
                                <ul className="list-page"><a href="https://playerduo.net/">
                                    <li className="item-icon "><a className="group-user"><i
                                        className="fal fa-home-alt"></i>
                                        <span>Trang chủ</span></a></li>
                                </a><a href="https://playerduo.net/stories">
                                    <li className="item-icon "><a className="group-user"><i
                                        className="fal fa-camera-movie"></i> Stories</a>
                                    </li>
                                </a>
                                    <li className="item-icon"><a className="group-user"><i
                                        className="fal fa-trophy-alt"></i>
                                        <span>Bảng xếp hạng</span></a>
                                    </li>
                                </ul>
                                <div className="list-mode">
                                    <div className="item"><p className="title"><span>Chế độ</span></p><a
                                        className="func mode"><i
                                        className="fas fa-moon op"></i><i className="fas fa-sun false"></i></a></div>
                                    <div className="item"><p className="title"><span>Cộng đồng</span></p>
                                        <div className="func group"><a
                                            href="https://www.facebook.com/groups/playerduovn"
                                            target="_blank" rel="noopener noreferrer"><i
                                            className="fal fa-globe"></i></a><a
                                            href="https://www.facebook.com/playerduo"
                                            target="_blank" rel="noopener noreferrer"><i
                                            className="fab fa-facebook-f"></i></a></div>
                                    </div>
                                    <div className="item"><p className="title"><span>Ngôn ngữ</span></p><a
                                        className="func lang"><img
                                        src="../resources/raw/1.png" className="flag op" alt="PD"/><img
                                        src="../resources/raw/2.png" className="flag false" alt="PD"/></a>
                                    </div>
                                    <div className="item"><p className="title"><span>Tải App</span></p>
                                        <div className="func app"><a href="https://testflight.apple.com/join/r6H9YvY4"
                                                                     target="_blank"
                                                                     rel="noopener noreferrer"
                                                                     download="">PlayerChat</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </nav>
    )
};