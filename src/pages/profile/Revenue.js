import {Bar} from "react-chartjs-2";
import {Chart, registerables} from 'chart.js';
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
Chart.register(...registerables);

function Revenue() {
    const [modal, setModal] = useState(false);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const {id} = useParams();
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };
    function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
    const labels = [];
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        labels.push(i.toString());
    }
    const [data, setData] = useState({
        labels: labels,
        datasets: [
            {
                label: 'Sample Data',
                data: [900,1000,2000,600,500,300,360,800,5000,200,100,2500,4900,4500,2900,3900,3100,2300,890,1900,800,3500,4300,4800,4900,5100,5000,4700,4600,4800],
                backgroundColor: ['rgba(75,192,192,0.82)', 'rgba(255,99,132,0.8)', 'rgba(255,205,86,0.82)'],
                borderColor: ['rgb(75,161,192)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)'],
                borderWidth: 1,
            },
        ],
    });
    useEffect(() => {
        fetchDataFromBackend();
    }, []);
    function fetchDataFromBackend() {
        axios.get('http://localhost:8080/revenues/totalRevenueByDay/1')
            .then((response) => {
                setData(response.data)
                console.log(response.data)
                const newData = {
                    ...data,
                    labels: response.data.labels,
                    datasets: [
                        {
                            ...data.datasets[0],
                            data: response.data,
                        },
                    ],
                };
                setData(newData);
            })
            .catch((error) => {
                console.error('Lỗi khi gọi API từ backend:', error);
            });
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };




    return (
        <>
            <meta httpEquiv="origin-trial"
                  content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="/>
            <meta httpEquiv="origin-trial"
                  content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="/>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="Pragma" content="no-cache"/>
            <meta httpEquiv="Expires" content={-1}/>
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,maximum-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="description" content="Tham gia cộng đồng game thủ lớn nhất Việt Nam."/>
            <meta name="keywords" content="Tham gia cộng đồng game thủ lớn nhất Việt Nam."/>
            <meta name="google-site-verification" content="KYBoGz-bgnBnLpEUr3USGpSo1rVAvTS9LH44oCeunFw"/>
            <meta name="google" value="notranslate"/>
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta content="index,follow" name="googlebot"/>
            <meta name="copyright" content=" PlayerDuo 2022"/>
            <meta name="keywords" content="Playerduo, player duo, play dua, thuê gái chơi game"/>
            <meta name="description"
                  content="PlayerDuo Cộng đồng game thủ lớn nhất Việt Nam, Cùng chơi với những game thủ chuyên nghiệp, hot streamer, hot girl và những người nổi tiếng."/>
            <title>Game Community</title>
            <meta content="index,follow" name="googlebot"/>
            <meta name="copyright" content=" PlayerDuo 2022"/>
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content="Game Community"/>
            <meta property="og:description" content="Tham gia cộng đồng game thủ lớn nhất Việt Nam."/>
            <meta property="og:image" content="https://files.playerduo.net/production/images/thumbs.png"/>
            <meta property="og:video" content/>
            <title>Game Community</title>
            <link rel="apple-touch-icon" sizes="57x57" href="https://playerduo.net/favicons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="https://playerduo.net/favicons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="https://playerduo.net/favicons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="https://playerduo.net/favicons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114"
                  href="https://playerduo.net/favicons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120"
                  href="https://playerduo.net/favicons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144"
                  href="https://playerduo.net/favicons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152"
                  href="https://playerduo.net/favicons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180"
                  href="https://playerduo.net/favicons/apple-icon-180x180.png"/>
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
            <link rel="stylesheet" type="text/css" href="../resources/9.cb7de3a7.chunk.css"/>
            <link rel="stylesheet" href="../resources/css-user-information.css"/>
            <noscript>Bạn cần có cho phép Javascript hoạt động để chạy ứng dụng PlayerDuo.</noscript>
            <div id="root">
                <div className="hidden">
                    <audio src="../resources/raw/notification-sound.805a8904.mp3"/>
                    <audio src="../resources/raw/notification-group-sound.4c7ac55b.mp3"/>
                    <audio src="../resources/raw/unconvinced.1de6c75d.mp3"/>
                </div>
                <div className="notifications-wrapper"/>
                <div className="message__popup  false">
                    <div className="message__popup--icon"><img src="../resources/raw/popup-chat.png" className
                                                               alt="PD"/></div>
                </div>
                <div className="wrapper">
                    <div className="setting__main row">
                        <div className="setting__main--menu col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="menu">
                                <div className="menu__setting  panel-group">
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title"><a aria-expanded="true" className
                                                                            role="button"
                                                                            href="#">TÀI
                                                KHOẢN <i className="fas fa-chevron-down"/></a></div>
                                        </div>
                                        <div className="panel-collapse collapse in" style={{}}>
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className=" active panel-title"><i
                                                                className="fas fa-user-tie"/> Thông
                                                                tin cá nhân
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-sliders-h"/> Thống kê
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title"><a
                                                                aria-expanded="false" className="collapsed"
                                                                role="button" href="#"><i
                                                                className="fas fa-cog"/> Cài
                                                                đặt <i className="fas fa-chevron-right"/></a></div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Email</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Tài khoản
                                                                                và
                                                                                mật khẩu
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Khoá bảo vệ
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Vip</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Hiển thị
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title"><a
                                                                aria-expanded="false" className="collapsed"
                                                                role="button" href="#"><i
                                                                className="fas fa-history"/> Lịch sử giao dịch <i
                                                                className="fas fa-chevron-right"/></a></div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử
                                                                                donate
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử duo
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử tạo
                                                                                code
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Biến động
                                                                                số
                                                                                dư
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử mua
                                                                                thẻ
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-credit-card"/> Thanh toán
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-wallet"/> Ví
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title"><a aria-expanded="true" className
                                                                            role="button"
                                                                            href="#">VÍ ĐIỆN
                                                TỬ <i className="fas fa-chevron-down"/></a></div>
                                        </div>
                                        <div className="panel-collapse collapse in" style={{}}>
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title"><a
                                                                aria-expanded="false" className="collapsed"
                                                                role="button" href="#"><i
                                                                className="fas fa-credit-card"/> Cài đặt <i
                                                                className="fas fa-chevron-right"/></a></div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Thông tin
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-link"/> Link Pay
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title"><a aria-expanded="true" className
                                                                            role="button"
                                                                            href="#">PLAYER
                                                <i className="fas fa-chevron-down"/></a></div>
                                        </div>
                                        <div className="panel-collapse collapse in" style={{}}>
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-user-tie"/> Tổng quan
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-user-friends"/> Khách
                                                                hàng thân thiết
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title"><a
                                                                aria-expanded="false" className="collapsed"
                                                                role="button" href="#"><i
                                                                className="fas fa-cog"/> Cài
                                                                đặt <i className="fas fa-chevron-right"/></a></div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Url</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Thông tin
                                                                                Player
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Albums
                                                                                Player
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Cài đặt Duo
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Khác</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title"><a
                                                                aria-expanded="false" className="collapsed"
                                                                role="button" href="#"><i
                                                                className="far fa-calendar-alt"/> Lịch sử nhận Duo,
                                                                Donate <i className="fas fa-chevron-right"/></a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử
                                                                                nhận
                                                                                duo
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử
                                                                                nhận
                                                                                donate
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-ban"/> Danh sách chặn
                                                                User
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-book"/> Hướng Dẫn Player
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-link"/> Link Player
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title"><a aria-expanded="true" className
                                                                            role="button"
                                                                            href="#">DONATE
                                                <i className="fas fa-chevron-down"/></a></div>
                                        </div>
                                        <div className="panel-collapse collapse in" style={{}}>
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title"><i
                                                                className="fas fa-cog"/> Cài đặt
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-drawer-setting visible-xs"><i className="fas fa-chevron-right"/>
                                </div>
                            </div>
                        </div>
                        {/*body*/}
                        <div className="col-lg-9 col-md-3 col-sm-12 col-xs-12">
                            <div className="box vip-player">
                                <h3>Doanh Thu</h3>
                                <button onClick={openModal}>Xem Doanh Thu</button>

                                <table>
                                    <tr>
                                        <td style={{padding:"5px"}}>Từ ngày:</td>
                                        <td style={{padding:"5px"}}>Đến ngày:</td>
                                        <td style={{padding:"5px"}}>Lọc theo:</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding:"5px"}}><input style={{ borderRadius:"5px"}} type="date"/></td>
                                        <td style={{padding:"5px"}}><input style={{ borderRadius:"5px"}} type="date"/></td>
                                        <td style={{padding:"5px"}}>
                                            <select style={{height:"26px",borderRadius:"5px"}}>
                                                <option>Chọn</option>
                                                <option>Ngày hôm nay</option>
                                                <option>Tháng này</option>
                                            </select>
                                        </td>
                                        <td><button select style={{height:"26px",borderRadius:"5px"}} >Enter</button></td>
                                    </tr>
                                </table>
                                <div>
                                    <Bar data={data} options={options}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*modal bill chi tiết*/}
            {modal && (
                <>
                    <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet"/>
                    <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet"/>
                    <div role="dialog">
                        <div className="fade modal-backdrop in"/>
                        <div role="dialog" tabIndex={-1} className="fade modal-donate in modal"
                             style={{display: "block"}}>
                            <div className="modal-dialog">
                                <div className="modal-content" role="document">
                                    <div className="modal-header">
                                        <button type="button" className="close" onClick={closeModal}>
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h4 className="modal-title">
                                            <span>Nhập Mật Khẩu Xác Nhận </span>
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>
                                                   Mật Khẩu:
                                                </td>
                                                <td>
                                                    <input style={{width:"300px", height:"30px", borderRadius:"5px", padding:"8px"}} type="password" placeholder="Vui lòng nhập mật khẩu"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" onClick={closeModal}>
                                            <span>Xác Nhận </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Revenue;