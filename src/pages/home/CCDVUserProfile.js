import SidebarSupplies from "./SidebarSupplies";
import React, {useState} from "react";
import RegisterSupply from "../../feature/RegisterSupply";

const CCDVUserProfile = () => {
 const [iClick, setIsClick]=useState(true);

 

    return (<>
        <div class="setting__main--menu col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="menu">
                <div class="menu__setting  panel-group">
                    <div class="menu__setting--main panel panel-default">
                        <div class="panel-heading">
                            <div class="panel-title"><a aria-expanded="true" class="" role="button" href="#">TÀI
                                KHOẢN <i class="fas fa-chevron-down"></i></a></div>
                        </div>
                        <div class="panel-collapse collapse in" style={{ height: "0px" }}>
                            <div class="panel-body">
                                <div class="panel-group">
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class=" active panel-title"><i class="fas fa-user-tie"></i> Thông
                                                tin cá nhân
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-sliders-h"></i> Thống kê
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="fas fa-cog"></i> Cài đặt <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Email</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Tài khoản và mật khẩu</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Khoá bảo vệ</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Vip</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Hiển thị</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="fas fa-history"></i> Lịch sử giao dịch <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử donate</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử duo</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử tạo code</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Biến động số dư</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử mua thẻ</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-credit-card"></i> Thanh toán
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-wallet"></i> Ví</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__setting--main panel panel-default">
                        <div class="panel-heading">
                            <div class="panel-title"><a aria-expanded="true" class="" role="button" href="#">TRANG
                                CÁ NHÂN <i class="fas fa-chevron-down"></i></a></div>
                        </div>
                        <div class="panel-collapse collapse in" style={{ height: "0px" }}>
                            <div class="panel-body">
                                <div class="panel-group">
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="fas fa-tags"></i> Hashtags <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Dành cho sáng tạo nội dung
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="fas fa-cog"></i> Cài đặt <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Url</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Mạng xã hội</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Hiển thị</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="fas fa-users"></i> Thành viên <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Bậc</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Danh sách thành viên</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử đã đăng ký</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="far fa-dot-circle"></i> Mục tiêu <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Cài đặt</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-ban"></i> Danh sách chặn
                                                comment
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__setting--main panel panel-default">
                        <div class="panel-heading">
                            <div class="panel-title"><a aria-expanded="true" class="" role="button" href="#">VÍ ĐIỆN
                                TỬ <i class="fas fa-chevron-down"></i></a></div>
                        </div>
                        <div class="panel-collapse collapse in" style={{ height: "0px" }}>
                            <div class="panel-body">
                                <div class="panel-group">
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="fas fa-credit-card"></i> Cài đặt <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Thông tin</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-link"></i> Link Pay</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__setting--main panel panel-default">
                        <div class="panel-heading">
                            <div class="panel-title"><a aria-expanded="true" class="" role="button" href="#">PLAYER
                                <i class="fas fa-chevron-down"></i></a></div>
                        </div>
                        <div class="panel-collapse collapse in" style={{ height: "0px" }}>
                            <div class="panel-body">
                                <div class="panel-group">
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-user-tie"></i> Tổng quan
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-user-friends"></i> Khách
                                                hàng thân thiết
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="fas fa-cog"></i> Cài đặt <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Url</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Thông tin Player</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Albums Player</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Cài đặt Duo</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Khác</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="title-sub  panel-title"><a aria-expanded="false"
                                                                                   class="collapsed" role="button"
                                                                                   href="#"><i
                                                class="far fa-calendar-alt"></i> Lịch sử nhận Duo, Donate <i
                                                class="fas fa-chevron-right"></i></a></div>
                                        </div>
                                        <div class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="panel-group">
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử nhận duo</div>
                                                        </div>
                                                    </div>
                                                    <div class="menu__setting--last panel panel-default">
                                                        <div class="panel-heading">
                                                            <div class="panel-title">Lịch sử nhận donate</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-ban"></i> Danh sách chặn
                                                User
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-book"></i> Hướng Dẫn Player
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-link"></i> Link Player</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__setting--main panel panel-default">
                        <div class="panel-heading">
                            <div class="panel-title"><a aria-expanded="true" class="" role="button" href="#">DONATE
                                <i class="fas fa-chevron-down"></i></a></div>
                        </div>
                        <div class="panel-collapse collapse in" style={{ height: "0px" }}>
                            <div class="panel-body">
                                <div class="panel-group">
                                    <div class="menu__setting--sub panel panel-default">
                                        <div class="panel-heading">
                                            <div class="  panel-title"><i class="fas fa-cog"></i> Cài đặt</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-drawer-setting visible-xs"><i class="fas fa-chevron-right"></i></div>
            </div>
        </div>

    </>)
}
export default CCDVUserProfile