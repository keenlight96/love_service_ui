import SidebarSupplies from "../home/SidebarSupplies";
import TopServiceCCDV from "../home/TopServiceCCDV";
import NewCcdVs from "../home/NewCCDVs";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addChatReceivers, setActiveReceiver, setMsgBoxToggle} from "../../service/ChattingService";
import ShowImages from "./ShowImages";
import {convertToFormattedDate} from "../../service/custom/general.function";

function Detail(){
    const [userDetail, setUserDetail] = useState({});
    const [image, setImage] = useState([]);
    const [interest, setInterest] = useState([])
    const [bill, setBill] = useState([])
    const {username} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const msgBoxToggle = useSelector(state => {
        return state.chatting.chatting.msgBoxToggle;
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/userDetail/` + username,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}})
            .then(response => {
                // console.log(response.data.userProfile);
                // let {birthday} = response.data.userProfile;
                // let newBirthday = convertToFormattedDate(birthday);
                // console.log(newBirthday);
                // let formattedUserProfile = {...response.data.userProfile, [birthday]: newBirthday};

                setUserDetail(response.data.userProfile);
                setImage(response.data.image)
                setInterest(response.data.interests)
                setBill(response.data.bills)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const addNewChat = () => {
        let newReceiver = {
            id: userDetail.account.id,
            username: userDetail.account.username,
            nickname: userDetail.account.nickname,
            avatar: userDetail.account.avatar,
            role: {
                id: userDetail.account.role.id,
                nameRole: userDetail.account.role.nameRole,
            },
            status: {
                id: userDetail.account.status.id,
                nameStatus: userDetail.account.status.nameStatus,
            },
            isActive: userDetail.account.isActive
        }
        dispatch(addChatReceivers(newReceiver));
        dispatch(setActiveReceiver(newReceiver));

        if (!msgBoxToggle) {
            dispatch(setMsgBoxToggle());
        }
    }

    //Js function

    return(
        <>
        <title>User Profile</title>
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
        <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet" />
        <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="../resources/0.cbdbec7b.chunk.css" />
        <link rel="stylesheet" type="text/css" href="../resources/3.fe7e74cf.chunk.css" />
        <link rel="stylesheet" type="text/css" href="../resources/10.697bc269.chunk.css" />
        <link rel="stylesheet" href="../resources/css-user-profile.css" />
            <div >
                <div className="hidden">
                    <audio src="../resources/raw/notification-sound.805a8904.mp3"/>
                    <audio src="../resources/raw/notification-group-sound.4c7ac55b.mp3"/>
                    <audio src="../resources/raw/unconvinced.1de6c75d.mp3"/>
                </div>
                <div className="notifications-wrapper"/>
                <div className="message__popup  false">
                    <div className="message__popup--icon">
                        <img src="../resources/raw/popup-chat.png" className alt="PD"/></div>
                </div>
                <div className="wrapper">
                    <div className="container player-infomation">
                        <div className="player-profile-left-wrap col-md-3">
                            <div className="avt-player false">
                                <div>
                                    <div className="avt avt-lg">
                                        {
                                            userDetail.account && <img src={userDetail.account.avatar} alt="Avatar"
                                                                       style={{width: "100%", height: "100%"}}/>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/*<div className="rent-time-wrap"><p className="ready">Đang sẵn sàng</p></div>*/}
                            {/*<div className="social-icon">*/}
                            {/*    <div className="icon-wrap user-page">*/}
                            {/*        <a href="https://playerduo.net/rabbitnee" target="_blank" rel="noopener noreferrer">*/}
                            {/*            {userDetail.account && <img src={userDetail.account.avatar} style={{width:"50px",height:"50px"}} alt="PD" title="Trang cá nhân"*/}
                            {/*                                        className="option-icon img-rounded"/>}*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="member-since">
                                <div>Ngày tham gia:</div>
                                <span>
                                {new Date(userDetail.dateCreate).toLocaleDateString()}
                            </span>
                            </div>
                        </div>
                        <div className="player-profile-right-wrap col-md-3 col-md-push-6">
                            <div className="right-player-profile"><p className="price-player-profile">{userDetail.price} đ/h</p>
                                <div className="rateting-style"><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star-half-alt"></i>&nbsp;<span>352 <span>Đánh giá</span></span>
                                </div>
                                <div className="text-center">
                                    <button className="btn-my-style red">Thuê</button>
                                    {/*<button className="btn-my-style white">Donate</button>*/}
                                    <button className="btn-my-style white" onClick={() => {addNewChat()}}>
                                        <i className="fas fa-comment-alt"></i>Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="player-profile-main-wrap col-md-6 col-md-pull-3">
                            <div>
                                <div className="row">
                                    <div className="center-item col-md-12">
                                        <span className="name-player-profile hidden-over-name">{userDetail.account && userDetail.account.nickname}</span>
                                        {/*<button className="btn-follow-player"><i className="fas fa-heart"></i>&nbsp;*/}
                                        {/*    <span className="plus">*/}
                                        {/*        <span>Theo dõi</span>*/}
                                        {/*    </span>*/}
                                        {/*</button>*/}
                                    </div>
                                </div>
                                <div className="nav-player-profile row">
                                    <div className="col-md-3 col-xs-6">
                                        <div className="item-nav-name"><span>Đã được thuê</span></div>
                                        <div className="item-nav-value">{bill.length}&nbsp;<span> lần</span></div>
                                    </div>
                                    <div className="col-md-3 col-xs-6">
                                        <div className="item-nav-name"><span>Số lượt xem</span></div>
                                        <div className="item-nav-value">{userDetail.views} <span> lượt</span></div>
                                    </div>
                                    {/*<div className="col-md-3 col-xs-6">*/}
                                    {/*    <div className="item-nav-name"><span>Tỷ lệ hoàn thành</span></div>*/}
                                    {/*    <div className="item-nav-value">100&nbsp;%</div>*/}
                                    {/*</div>*/}
                                </div>
                                <div>
                                    <div className="game-category row">
                                        <div className="title-player-profile row">
                                            <div className="col-xs-6"><span>Dịch vụ</span></div>
                                        </div>
                                        {userDetail.supplies && userDetail.supplies.length > 0 && userDetail.supplies.map((item, key) => (
                                            <div className="choose-game" style={{background: "url(&quot;715867c6-698f-411a-b4f9-1e9093130b60__2649fa50-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg&quot;) center center no-repeat"}}>
                                                    <p className="overlay" key={key}>{item.nameSupply}</p>

                                            </div>
                                        ))}

                                    </div>
                                    <div>
                                        <div className="title-player-profile row">
                                            <div className="col-xs-6"><span>Thông tin</span></div>
                                        </div>
                                        <div className="content-player-profile">
                                            <div className="album-of-player">
                                                {image.length > 0 && <ShowImages images={image}/>}

                                                {/*<div>*/}
                                                {/*    <a href="https://playerduo.net/api/upload-service/images/029f1f12-4fb8-4b21-8171-ca7bf863e2f8__ae016c20-4679-11ee-a657-a54d6be1d46a__player_album.jpg"*/}
                                                {/*       style={{display: "block"}}>*/}
                                                {/*        {image && image.map(image => (*/}
                                                {/*            <img key={image.id} src={image.img}*/}
                                                {/*                 alt={`Ảnh chân dung ${image.id}`}*/}
                                                {/*                 style={{width: "50px", height: "50px"}}/>))}*/}
                                                {/*    </a>*/}

                                                {/*    <div className="clearfix"></div>*/}
                                                {/*</div>*/}
                                            </div>
                                            <table className={"table table-bordered"}>
                                                <tbody>
                                                <tr>
                                                    <td>Họ tên</td>
                                                    <td>{userDetail.firstName} {userDetail.lastName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Giới tính</td>
                                                    <td>{userDetail.gender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Năm sinh</td>
                                                    <td>{new Date(userDetail.birthday).toLocaleDateString()}</td>
                                                </tr>
                                                <tr>
                                                    <td>Chiều cao</td>
                                                    <td>{userDetail.height}</td>
                                                </tr>
                                                <tr>
                                                    <td>Cân nặng</td>
                                                    <td>{userDetail.weight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Địa chỉ</td>
                                                    <td>{userDetail.address}, {userDetail.country}</td>
                                                </tr>
                                                <tr>
                                                    <td>Mô tả về bản thân</td>
                                                    <td>{userDetail.describes}</td>
                                                </tr>
                                                <tr>
                                                    <td>Yêu cầu với người thuê</td>
                                                    <td>{userDetail.basicRequest}</td>
                                                </tr>
                                                <tr>
                                                    <td>Facebook</td>
                                                    <td><a href={userDetail.facebookLink} target="_blank"
                                                           rel="noopener noreferrer">{userDetail.facebookLink}</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            {/*<p>Tên: {userDetail.firstName} {userDetail.lastName}</p>*/}
                                            {/*<p>Địa Chỉ: {userDetail.address}, {userDetail.country}</p>*/}
                                            {/*<p>Năm Sinh: {userDetail.birthday}</p>*/}
                                            {/*<p>Giới Tính: {userDetail.gender}</p>*/}
                                            {/*<p>Chiều Cao: {userDetail.height}</p>*/}
                                            {/*<p>Cân Nặng: {userDetail.weight}</p>*/}
                                            {/*<p>Mô tả về bản thân: {userDetail.describes}</p>*/}
                                            {/*<p>Yêu cầu với người thuê: {userDetail.basicRequest}</p>*/}
                                        </div>
                                        <div>
                                            <div>
                                                <div className="title-player-profile row">
                                                    <div className="col-xs-6"><span>Đánh giá</span></div>
                                                </div>
                                                <div className="text-center review-duo-player row">
                                                    <div className="col-md-12">
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/79e3149c-ec0a-49bc-b15f-a0b38e5a23d9__27f3bc20-14be-11ed-92ac-1b8d2f5bc2b5__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/>
                                                                    <img src="../resources/raw/4.png"
                                                                         className="rank-1-15 rank-img"
                                                                         alt="PlayerDuo"/>
                                                                </div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/traiyeumeo">
                                                                    <p
                                                                        className="name-player-review color-vip-1">Hữu
                                                                        Lulu</p></a>
                                                                    <p className="time-player-review"><span>20:29:56 29/8/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;2h)</span>
                                                                </div>
                                                                <p className="content-player-review">Dễ thương</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/17d6baa2-8102-41a9-84d1-d54828c6c45e__a8fd8110-46cd-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/>
                                                                    <img src="../resources/raw/14-1.png"
                                                                         className="rank-1-15 rank-img"
                                                                         alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/page61d7d8a16afb847ad39c91bf">
                                                                    <p className="name-player-review color-vip-14">Hoàng
                                                                        Mjn™️</p></a>
                                                                    <p className="time-player-review"><span>03:07:42 15/8/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;1h)</span>
                                                                </div>
                                                                <p className="content-player-review">1 sao</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/6be09225-9c6a-4334-a0f3-5bb74406f487__8121abb0-33ec-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/><img
                                                                    src="../resources/raw/10-1.png"
                                                                    className="rank-1-15 rank-img"
                                                                    alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/anhtamheone">
                                                                    <p
                                                                        className="name-player-review color-vip-10">-
                                                                        ATM</p></a>
                                                                    <p className="time-player-review"><span>21:41:25 11/8/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;1h)</span>
                                                                </div>
                                                                <p className="content-player-review">Đau để trưởng
                                                                    thành</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/ed3a6cba-07d7-46d3-aff5-d6cc547e1ecf__b372abe0-439c-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/junseo">
                                                                    <p className="name-player-review">Dunn</p></a>
                                                                    <p className="time-player-review"><span>04:59:18 3/8/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;1h)</span>
                                                                </div>
                                                                <p className="content-player-review">⭐⭐⭐⭐⭐</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/a383d1b5-c026-4e2c-9efb-48eb5c5fa0ee__02b241b0-10d1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/><img
                                                                    src="../resources/raw/3.png"
                                                                    className="rank-1-15 rank-img"
                                                                    alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/minhquann">
                                                                    <p
                                                                        className="name-player-review color-vip-1">Minh
                                                                        Quân</p></a>
                                                                    <p className="time-player-review"><span>01:16:52 30/6/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;8h)</span>
                                                                </div>
                                                                <p className="content-player-review">dth</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/dfd390d0-598e-42f4-be7d-61ea27b15e83__52c6e810-b9e5-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/><img
                                                                    src="../resources/raw/1-1.png"
                                                                    className="rank-1-15 rank-img"
                                                                    alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/page5e3b1230aec0db0a2f982738">
                                                                    <p className="name-player-review color-vip-1">Anh
                                                                        Tuan</p></a>
                                                                    <p className="time-player-review"><span>04:25:50 22/6/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;1h)</span>
                                                                </div>
                                                                <p className="content-player-review">.</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/upload_5a5fa35b31030f87671090dad3bbadeb.jpg.png"
                                                                    className="avt-1-15 avt-img" alt="PD"/><img
                                                                    src="../resources/raw/7-1.png"
                                                                    className="rank-1-15 rank-img"
                                                                    alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/page5b99fcf16ccbeb40c6674c50">
                                                                    <p className="name-player-review color-vip-6">noel
                                                                        một mình</p></a>
                                                                    <p className="time-player-review"><span>23:17:27 1/6/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;1h)</span>
                                                                </div>
                                                                <p className="content-player-review">Thủy no1 =))</p>
                                                            </div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/avatar9.png"
                                                                    className="avt-1-15 avt-img"
                                                                    alt="PD"/><img src="../resources/raw/1-1.png"
                                                                                   className="rank-1-15 rank-img"
                                                                                   alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/page5f39cabb7687ab35ae406812">
                                                                    <p className="name-player-review color-vip-1">văn
                                                                        Phước</p></a>
                                                                    <p className="time-player-review"><span>06:26:20 21/5/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;2h)</span>
                                                                </div>
                                                                <p className="content-player-review">ok</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/40d0273e-dc9a-4d3b-97cb-b5d60108788c__2cc85db0-2736-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/><img
                                                                    src="../resources/raw/5.png"
                                                                    className="rank-1-15 rank-img"
                                                                    alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/minh07092001">
                                                                    <p
                                                                        className="name-player-review color-vip-1">M
                                                                        💔</p></a>
                                                                    <p className="time-player-review"><span>08:07:05 17/5/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;1h)</span>
                                                                </div>
                                                                <p className="content-player-review">bạn này đáng iu
                                                                    nè</p></div>
                                                        </div>
                                                        <div className="full-size">
                                                            <div className="review-image-small">
                                                                <div className="avt-rank avt-md"><img
                                                                    src="../resources/raw/5479a954-2ca4-4043-a3bf-fdd87d0ae4af__a5140ef0-e482-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                                    className="avt-1-15 avt-img" alt="PD"/><img
                                                                    src="../resources/raw/2-1.png"
                                                                    className="rank-1-15 rank-img"
                                                                    alt="PlayerDuo"/></div>
                                                            </div>
                                                            <div className="wrapper-content-rating">
                                                                <div className="review-content"><a target="_blank"
                                                                                                   href="https://playerduo.net/page600ce889399d5e2bc1ed8e5d">
                                                                    <p className="name-player-review color-vip-1">Haro</p>
                                                                </a>
                                                                    <p className="time-player-review"><span>13:14:44 3/5/2023</span>
                                                                    </p></div>
                                                                <div className="review-rating">
                                                                    <div className="rateting-style"><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i><i
                                                                        className="fas fa-star"></i>&nbsp;
                                                                    </div>
                                                                    <span
                                                                        className="time-rent-review">(<span>Thuê</span>&nbsp;8h)</span>
                                                                </div>
                                                                <p className="content-player-review">sap xep lai thoi
                                                                    gian ngu nghi nhe</p></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="page_account"><p className="active">1</p>
                                                            <p className="">2</p>
                                                            <p className="">3</p>
                                                            <p className="">4</p>
                                                            <p className="">5</p>
                                                            <p className="active" style={{cursor: "auto"}}>1/36</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detail