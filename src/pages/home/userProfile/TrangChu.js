import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";

function TrangChu() {
    const [userProfile, setUserProfile] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/top6Service")
            .then(response => {
                setUserProfile(response.data);

                console.log(response.data);

            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const filterUserProfile = () => {
        let gender = document.getElementById("gender").value;
        let dataToSend = {gender}

    }
    return (
        <body class="" style={{paddingTop: "0px"}}>
        <div>

            <div class="hidden">
                <audio src="../resources/raw/notification-sound.805a8904.mp3"></audio>
                <audio src="../resources/raw/notification-group-sound.4c7ac55b.mp3"></audio>
                <audio src="../resources/raw/unconvinced.1de6c75d.mp3"></audio>
            </div>
            <div class="notifications-wrapper"></div>
            <div class="message__popup  false">
                <div class="message__popup--icon"><img src="../resources/raw/popup-chat.png" class="" alt="PD"/></div>
            </div>
            <div class="wrapper">
                <div class="home-flex">
                    <div class="home-flex-category">
                        <div class="fixed-cate"><p><span>Danh mục game</span></p>
                            <ul class="list-group">
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__0ba80060-2b58-11ee-a657-a54d6be1d46a__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__0ba80060-2b58-11ee-a657-a54d6be1d46a__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Truy Kích PC</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Liên Minh Huyền
                                            Thoại</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Đấu Trường Chân
                                            Lý</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">PUBG Mobile</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">PUBG PC</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Liên Quân
                                            Mobile</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__99a18050-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__99a18050-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Liên Minh Tốc
                                            Chiến</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__39932230-34cc-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__39932230-34cc-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Free Fire</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__5dd9f670-34d4-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__5dd9f670-34d4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Valorant</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__f79153d0-33e4-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f79153d0-33e4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Naraka
                                            Bladepoint</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__40daec90-33e5-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__40daec90-33e5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">CSGO</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__e671c440-34d4-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__e671c440-34d4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Dota 2</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__38084d60-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__38084d60-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Call of Duty</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__62295df0-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__62295df0-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">GTA V</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Hát</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Tâm Sự</p></div>
                                    </div>
                                </li>
                                <li class="list-item ">
                                    <div class="media">
                                        <div class="media-left"><img class="media-object"
                                                                     alt="715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg"
                                                                     src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </div>
                                        <div class="media-body media-middle"><p class="media-heading">Khác</p></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="home-flex-content"><p class="btn-chat-global false"><span>Trò Chuyện</span></p>
                        <div class="hided">
                            <div class="slide extend-box">
                                <div class="global-chat">
                                    <div id="global-chat" class="global-chat-display">
                                        <div>
                                            <div class="text-center"><i class="fa fa-spinner fa-spin"></i></div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/cheneiiiv">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/91d31b69-d5d7-451a-8a66-d7acfea3afe0__59c39300-3454-11ed-838c-b120e70abb59__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/7.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span
                                                    class="cursor-pointer">VyVy </span> </strong> : </p>
                                                    <p class="mess-global">ướt đc rent</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/ldglongheo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/de11e18b-7ec3-4ab6-af6d-385719867e38__f2b77d90-32f2-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">LDG Longheoo </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/deft"
                                                                              class="link">deft</a> MID RỪNG 1K ĐIỂM
                                                        NHẬN CARRY
                                                        ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/duckyducky">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/0dd08b6d-bfba-49fa-9a49-d409efc55cb8__cf9afbe0-60c4-11ec-911d-399f024e5d9b__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đức Ai Chơi </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/duckyduckyducky"
                                                                              class="link">duckyduckyducky</a> TOP 1K
                                                        ĐIỂM ĐƠN
                                                        NHẬN CARRY ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/manmanbaby">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/d9918033-153e-4386-89fc-9f56c066b60d__40851cf0-33a5-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Mẫn Mẫn </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/manmanlady"
                                                                              class="link">manmanlady</a> nhận all LOL,
                                                        TFT(NA,VN), PUBG MB, PUBG PC, VLR(newbie), tâm sự, nói chuyện,
                                                        stream
                                                        phim, hát vu vơ ♥️♥️</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/page61f7830fbd300b5d4aafb29f">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/c1284631-9f9c-4a09-ad0a-dd79d3e3b59b__18290ab0-bf29-11ec-ba81-7bfd4ef70d64__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span
                                                    class="cursor-pointer">Homeless </span>
                                                </strong> : </p>
                                                    <p class="mess-global">+1 thuê nợ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/tunamkim">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/59f86c46-ec30-4e01-8e6d-4ac01e3eb279__f6c1dce0-3a32-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/8.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Đã hướng nội còn trầm cảm </span>
                                                </strong> : </p>
                                                    <p class="mess-global">Sợ chơi thiếu</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/playerduocompage61b19e3df6d8a534dac2b807">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/c3d93cca-0213-43a0-ada6-8a05f7d3b66e__0d40bf70-5bec-11ed-838c-b120e70abb59__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">𝒽𝒾𝓃 </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/hinlulu"
                                                                              class="link">hinlulu</a>
                                                        nhận TFT, all LOL, Vịt, Nói chuyện, Xem phim,.....</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/vuhotran">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/31b74d09-49d8-4612-bb7c-5536806d1336__6c04f6e0-9b5a-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Vũ Hồ </span>
                                                </strong> : </p>
                                                    <p class="mess-global">bạn nào bán hộp prime lol ib mình với</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/tunamkim">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/59f86c46-ec30-4e01-8e6d-4ac01e3eb279__f6c1dce0-3a32-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/8.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Đã hướng nội còn trầm cảm </span>
                                                </strong> : </p>
                                                    <p class="mess-global">nhất là thiếu em</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/hamay3005">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/99dcfeb4-fe55-4288-b7fb-1d2716727afc__bd378680-43ad-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">T í n </span>
                                                </strong> : </p>
                                                    <p class="mess-global">nhất là thiếu đồ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/ldglongheo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/de11e18b-7ec3-4ab6-af6d-385719867e38__f2b77d90-32f2-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">LDG Longheoo </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/deft"
                                                                              class="link">deft</a> MID RỪNG 1K ĐIỂM
                                                        NHẬN CARRY
                                                        ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/duckyducky">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/0dd08b6d-bfba-49fa-9a49-d409efc55cb8__cf9afbe0-60c4-11ec-911d-399f024e5d9b__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đức Ai Chơi </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/duckyduckyducky"
                                                                              class="link">duckyduckyducky</a> TOP 1K
                                                        ĐIỂM ĐƠN
                                                        NHẬN CARRY ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/h1dan1201">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/c18536af-e3ea-4b52-bbda-d1362edd9891__4babd480-9432-11eb-b3e2-9f2b10fcd071__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đoàn Văn Phúc </span> </strong> : </p>
                                                    <p class="mess-global">mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/beheo123">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/a0072b1c-5116-45a4-b618-f249e6a15fac__9f3db880-4659-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Con mèo nhỏ </span>
                                                </strong> : </p>
                                                    <p class="mess-global">Bụt thức chưa ta</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/manmanbaby">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/d9918033-153e-4386-89fc-9f56c066b60d__40851cf0-33a5-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Mẫn Mẫn </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/manmanlady"
                                                                              class="link">manmanlady</a> nhận all LOL,
                                                        TFT(NA,VN), PUBG MB, PUBG PC, VLR(newbie), tâm sự, nói chuyện,
                                                        stream
                                                        phim, hát vu vơ ♥️♥️</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/halequyen123">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/25eebf2f-6341-44b0-9107-97fb612f2d6f__f7561f20-3c0a-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Hà Lệ Quyên </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank" href=""
                                                                              class="link">halequyen145</a> mình nhận
                                                        các duo
                                                        game LOL - TFT - TỐC CHIẾN - LIÊN QUÂN - VALORANT :&gt;</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/hamay3005">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/99dcfeb4-fe55-4288-b7fb-1d2716727afc__bd378680-43ad-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">T í n </span>
                                                </strong> : </p>
                                                    <p class="mess-global">xin 50k cho chan tien a</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chuiyasuo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/9d9e7b77-4bde-4c1e-9fd7-b24b9561d279__d812aff0-f568-11ec-92ac-1b8d2f5bc2b5__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">Chúiii </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/yauachui"
                                                                              class="link">yauachui</a> nhận all LOL +
                                                        Valorant
                                                        + Naraka + các game Steam theo yêu cầu</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/playerduocompage61b19e3df6d8a534dac2b807">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/c3d93cca-0213-43a0-ada6-8a05f7d3b66e__0d40bf70-5bec-11ed-838c-b120e70abb59__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">𝒽𝒾𝓃 </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/hinlulu"
                                                                              class="link">hinlulu</a>
                                                        nhận TFT, all LOL, Vịt, Nói chuyện, Xem phim,.....</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/page64b8cd350c0f7864d131f8f9">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/1226afba-d9d6-4073-8c06-10c08e40a008__af103550-26c2-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">duni106 </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/duni106"
                                                                              class="link">duni106</a>
                                                    </p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/anuyyy">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/1fabd748-4517-41f9-b078-52917cc1b8d4__44e2bf10-37f5-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">pao </span> </strong> : </p>
                                                    <p class="mess-global">xin 2h duo cho du tien rut :&lt;</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/vuhotran">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/31b74d09-49d8-4612-bb7c-5536806d1336__6c04f6e0-9b5a-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Vũ Hồ </span>
                                                </strong> : </p>
                                                    <p class="mess-global">bạn nào bán hộp prime lol ib mìnhhh</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/sieunami2k4">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/22759df1-6bb3-4a38-a196-6549dbbe952b__ce47ab80-40f6-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">😿Sad Meoo😿 </span> </strong> : </p>
                                                    <p class="mess-global">em nhận LOL, TFT , tâm sự , tư vấn tình cảm,
                                                        mở nhạc
                                                        và những việc trong tầm tay ạ :&gt;</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/manmanbaby">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/d9918033-153e-4386-89fc-9f56c066b60d__40851cf0-33a5-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Mẫn Mẫn </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/manmanlady"
                                                                              class="link">manmanlady</a> nhận all LOL,
                                                        TFT(NA,VN), PUBG MB, PUBG PC, VLR(newbie), tâm sự, nói chuyện,
                                                        stream
                                                        phim, hát vu vơ ♥️♥️</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/ldglongheo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/de11e18b-7ec3-4ab6-af6d-385719867e38__f2b77d90-32f2-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">LDG Longheoo </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/deft"
                                                                              class="link">deft</a> MID RỪNG 1K ĐIỂM
                                                        NHẬN CARRY
                                                        ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/duckyducky">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/0dd08b6d-bfba-49fa-9a49-d409efc55cb8__cf9afbe0-60c4-11ec-911d-399f024e5d9b__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đức Ai Chơi </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/duckyduckyducky"
                                                                              class="link">duckyduckyducky</a> TOP 1K
                                                        ĐIỂM ĐƠN
                                                        NHẬN CARRY ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/knockdown">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/3ec51802-2d23-465c-91ec-a2a95de0c99a__b3b33690-038e-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Nguyễn Tú </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">Nạp/Rút PLD sang ATM, Momo, .. -- Thu Paypal
                                                        rate cao
                                                        -- Bán/Thu Card Zing - Garena -- Thu card các nhà mạng
                                                        --&gt; PLD</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/hieple9030">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/9762d3cf-6b7c-421b-a9db-5c401a73dcfa__413c20d0-092d-11eb-93fc-0f0cdf70889c__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">- OFF - </span>
                                                </strong> : </p>
                                                    <p class="mess-global">1 ngay nao dooooooooo</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/mintxink2k6">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/5c9e8e13-c602-457c-a2f9-0bc60c8873b1__0d55ec00-c943-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Empe đáng iuu </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank" href=""
                                                                              class="link">mintcut3</a>
                                                        +1 rent empe ạa</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chuiyasuo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/9d9e7b77-4bde-4c1e-9fd7-b24b9561d279__d812aff0-f568-11ec-92ac-1b8d2f5bc2b5__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">Chúiii </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/yauachui"
                                                                              class="link">yauachui</a> nhận all LOL +
                                                        Valorant
                                                        + Naraka + các game Steam theo yêu cầu</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/playerduocompage61b19e3df6d8a534dac2b807">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/c3d93cca-0213-43a0-ada6-8a05f7d3b66e__0d40bf70-5bec-11ed-838c-b120e70abb59__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">𝒽𝒾𝓃 </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/hinlulu"
                                                                              class="link">hinlulu</a>
                                                        nhận TFT, all LOL, Vịt, Nói chuyện, Xem phim,.....</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/ldglongheo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/de11e18b-7ec3-4ab6-af6d-385719867e38__f2b77d90-32f2-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">LDG Longheoo </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/deft"
                                                                              class="link">deft</a> MID RỪNG 1K ĐIỂM
                                                        NHẬN CARRY
                                                        ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/lieenml">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/699fec71-1e10-4f16-90ee-3d729e9aa56d__8efca720-464e-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/5.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Phuong Lien </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/lienmll"
                                                                              class="link">lienmll</a>
                                                    </p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/duckyducky">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/0dd08b6d-bfba-49fa-9a49-d409efc55cb8__cf9afbe0-60c4-11ec-911d-399f024e5d9b__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đức Ai Chơi </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/duckyduckyducky"
                                                                              class="link">duckyduckyducky</a> TOP 1K
                                                        ĐIỂM ĐƠN
                                                        NHẬN CARRY ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/icedevils">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/e3b6a57f-4759-42dc-a3d0-5158c730c471__0318dc90-ec4d-11eb-8dd9-1bd820f89ac6__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Ice devils </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/hubt17103528"
                                                                              class="link">hubt17103528</a></p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/page5b99fdd06ccbeb40c6698aa4">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/27f441c7-d9b6-4d81-875f-748285c1cb86__01f76f90-4db3-11eb-a34e-dd03c3a22289__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span
                                                    class="cursor-pointer">nghi </span> </strong> : </p>
                                                    <p class="mess-global">co ban nu nap nhan ban pubg pc ko</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/page63c0ba37b8ee22480e843c82">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b91279cb-7985-4c86-afcf-241a873c5f88__1d6c6080-d66b-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/2-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Nguyễn Mạnh Hùng </span>
                                                </strong> : </p>
                                                    <p class="mess-global">+1 tft tay cực to có thể coatring</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/lieenml">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/699fec71-1e10-4f16-90ee-3d729e9aa56d__8efca720-464e-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/5.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Phuong Lien </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/lienmll"
                                                                              class="link">lienmll</a>
                                                    </p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">emssss</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/nhimeo2002">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/6c727c45-1517-40db-a94b-a5f7e9bfe96d__0aca46b0-3b13-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Bé Ba </span>
                                                </strong> : </p>
                                                    <p class="mess-global">em nhận pubg pc ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/h1dan1201">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/c18536af-e3ea-4b52-bbda-d1362edd9891__4babd480-9432-11eb-b3e2-9f2b10fcd071__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đoàn Văn Phúc </span> </strong> : </p>
                                                    <p class="mess-global">mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/mintxink2k6">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/5c9e8e13-c602-457c-a2f9-0bc60c8873b1__0d55ec00-c943-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Empe đáng iuu </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank" href=""
                                                                              class="link">mintcut3</a>
                                                        +1 rent empe ạa</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/lieenml">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/699fec71-1e10-4f16-90ee-3d729e9aa56d__8efca720-464e-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/5.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Phuong Lien </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/lienmll"
                                                                              class="link">lienmll</a>
                                                    </p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/ldglongheo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/de11e18b-7ec3-4ab6-af6d-385719867e38__f2b77d90-32f2-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">LDG Longheoo </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/deft"
                                                                              class="link">deft</a> MID RỪNG 1K ĐIỂM
                                                        NHẬN CARRY
                                                        ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/duckyducky">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/0dd08b6d-bfba-49fa-9a49-d409efc55cb8__cf9afbe0-60c4-11ec-911d-399f024e5d9b__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đức Ai Chơi </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/duckyduckyducky"
                                                                              class="link">duckyduckyducky</a> TOP 1K
                                                        ĐIỂM ĐƠN
                                                        NHẬN CARRY ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/jugofd2">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/54b0eeab-efb9-48d6-b38e-84efb91c3795__77e61440-4671-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">JuGofd </span> </strong> : </p>
                                                    <p class="mess-global">lụm</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/nhimeo2002">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/6c727c45-1517-40db-a94b-a5f7e9bfe96d__0aca46b0-3b13-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Bé Ba </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/nhi2k2"
                                                                              class="link">nhi2k2</a>
                                                    </p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/cheneiiiv">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/91d31b69-d5d7-451a-8a66-d7acfea3afe0__59c39300-3454-11ed-838c-b120e70abb59__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/7.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span
                                                    class="cursor-pointer">VyVy </span> </strong> : </p>
                                                    <p class="mess-global">+1 thuê em mở hàng</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/1372z102">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/399c2ed2-8c04-4f38-b112-657bd85e1302__c6e6a0c0-2626-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span
                                                    class="cursor-pointer">NG </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/d0ublen"
                                                                              class="link">d0ublen</a>
                                                        mình nhận carry lol all rank</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/icedevils">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/e3b6a57f-4759-42dc-a3d0-5158c730c471__0318dc90-ec4d-11eb-8dd9-1bd820f89ac6__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Ice devils </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/hubt17103528"
                                                                              class="link">hubt17103528</a></p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/mintxink2k6">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/5c9e8e13-c602-457c-a2f9-0bc60c8873b1__0d55ec00-c943-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/4.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">Empe đáng iuu </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank" href=""
                                                                              class="link">mintcut3</a>
                                                        +1 rent empe ạa</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/ldglongheo">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/de11e18b-7ec3-4ab6-af6d-385719867e38__f2b77d90-32f2-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/3.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">LDG Longheoo </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/deft"
                                                                              class="link">deft</a> MID RỪNG 1K ĐIỂM
                                                        NHẬN CARRY
                                                        ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/duckyducky">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/0dd08b6d-bfba-49fa-9a49-d409efc55cb8__cf9afbe0-60c4-11ec-911d-399f024e5d9b__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Đức Ai Chơi </span> </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/duckyduckyducky"
                                                                              class="link">duckyduckyducky</a> TOP 1K
                                                        ĐIỂM ĐƠN
                                                        NHẬN CARRY ALL RANK</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/meow961999">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/36086ef6-1bc8-41d0-b953-6cb2e74b6c10__72301d10-dd63-11ed-a19f-23a3b10d190e__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/6.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">⚜️ M E O W ⚜️ </span>
                                                </strong> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/meowww99"
                                                                              class="link">meowww99</a> ㅡ Nhận PUBG MB +
                                                        GL,
                                                        PUBG PC, VALORANT, TFT (NA), CSGO, GTA5, Game STEAM, Stream
                                                        NETFIX,
                                                        ...v.v... 🥰</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/chipslsiuxing">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/b5fe998e-6736-40ca-9b1f-19846cf34734__bc7e95e0-44a1-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review"><span
                                                    class="cursor-pointer">Chipss👾 </span> </strong> : </p>
                                                    <p class="mess-global">nhận LOL-CSGO-VLR-ONCAM ạ</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/kphaihanvy">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/cef8ad02-d96d-49fc-87a8-ef73ea6103aa__2fbb6d50-3a6e-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/1-1.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-1"><span class="cursor-pointer">h a n v y 🌸 </span>
                                                </strong> : </p>
                                                    <p class="mess-global">+1 mo hang <a target="_blank"
                                                                                         href="https://playerduo.net/hanzykhongte"
                                                                                         class="link">hanzykhongte</a>
                                                    </p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/betiss">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/05a9716a-d354-4818-aefa-47093bfe1cc5__d6e85150-27b4-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/9.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-6"><span class="cursor-pointer">Baby Tis </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global"><a target="_blank"
                                                                              href="https://playerduo.net/betis"
                                                                              class="link">betis</a> nhận duo liên quân
                                                        , pubgmb
                                                        ,tốc chiến , tft , hát , NHẬN NẠP RÚT PLD SLL ) ,</p></div>
                                            </div>
                                            <div class="global_message__item media">
                                                <div class="media-left"><a target="_blank"
                                                                           href="https://playerduo.net/janny259">
                                                    <div class="avt-rank avt-sm"><img
                                                        src="../resources/raw/f3b23cf6-54a1-4756-b465-93cb4ab77536__3ef82970-44be-11ee-a657-a54d6be1d46a__page_avatar.jpg"
                                                        class="avt-1-15 avt-img" alt="PD"/><img
                                                        src="../resources/raw/10.png"
                                                        class="rank-1-15 rank-img"
                                                        alt="PlayerDuo"/></div>
                                                </a></div>
                                                <div class="media-body"><p class="chat-name"><strong
                                                    class="name-player-review color-vip-10"><span
                                                    class="cursor-pointer">Janny trader - ng chơi hệ LHD ✨ </span>
                                                </strong><i class="fas fa-check-circle"></i> : </p>
                                                    <p class="mess-global">trade pld, bán steamcode sll ib là onl</p>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="form-group"><span class="input-group"><input
                                        placeholder="Enter để gửi tin nhắn!" maxlength="255" type="text"
                                        id="formChatText"
                                        class="form-control" value=""/><p class="send-chat"><i
                                        class="fas fa-paper-plane"></i></p><span
                                        class="scope-icon input-group-addon"></span></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="slide banner carousel slide">
                            <div class="carousel-inner">
                                <div class="item active"><a href="https://beelevelup.com/" target="_blank"
                                                            rel="noopener noreferrer">
                                    <img
                                        src="../resources/raw/446982ba-1aeb-4730-8d52-8e4308776e4b__ca8ef380-0f15-11ee-a657-a54d6be1d46a__admin_banner.jpg"
                                        class="img-responsive" alt="banner"/>
                                </a></div>
                                <div class="item">
                                    <a href="https://www.facebook.com/groups/playerduovn" target="_blank"
                                       rel="noopener noreferrer">
                                        <img
                                            src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__ff5aee00-79ee-11ed-a19f-23a3b10d190e__admin_banner.jpg"
                                            class="img-responsive" alt="banner"/>
                                    </a>
                                </div>
                            </div>
                            <a class="carousel-control left" role="button" href="#"><span
                                class="glyphicon glyphicon-chevron-left"></span><span
                                class="sr-only">Previous</span></a><a
                            class="carousel-control right" role="button" href="#"><span
                            class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div>
                        <div class="action__box">
                            <div class="styles-module_sliderBase__swkx1 action__box--carousel" data-testid="carousel">
                                <div data-testid="sliderList" class="styles-module_slider__o0fqa">
                                    <div class="action__box--list">
                                        <div class="box-item create">
                                            <img src="../resources/raw/avatar6.png" class="" alt="PD"
                                                 id="avt-img-reponsiver"/>
                                            <div class="box-item-plus"><i class="fal fa-plus"></i></div>
                                        </div>
                                        <p class="player-name">Đăng Story</p>
                                    </div>
                                    {userProfile.map(user => (
                                        <div class="action__box--list">
                                            <div class="box-item">
                                                <img
                                                    src={user.account.avatar}
                                                    class="" alt="PD" id="avt-img-reponsiver"/>
                                                <div class="box-item-label">
                                                    <p><i class="far fa-eye"></i> {user.views} </p>
                                                </div>
                                            </div>
                                            <div class="player-name">
                                                <div class="avt-rank avt-sm">
                                                    <img
                                                        src={user.account.avatar}
                                                        class="avt-Cả1-15 avt-img" alt="PD"/>

                                                    <img src="../resources/raw/2-1.png" class="rank-1-15 rank-img"
                                                         alt="PlayerDuo"/>
                                                </div>
                                                <p>{user.lastName} {user.firstName}</p></div>
                                        </div>
                                    ))}

                                    <div class="action__box--list">
                                        <a href="https://playerduo.net/stories">
                                            <div class="box-item create">
                                                <div class="box-item-plus">
                                                    <i class="fas fa-arrow-right"></i>
                                                </div>
                                            </div>
                                            <p class="player-name">Xem thêm</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>

                            <div className="mobile-cate">
                                <div className="label-cate"><p><span>Danh mục game</span></p>
                                    <button type="button" className="btn btn-default"><i className="fal fa-search"></i>
                                    </button>
                                </div>
                                <div className="list-group">
                                    <ul className="scrolls">
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__0ba80060-2b58-11ee-a657-a54d6be1d46a__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__99a18050-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__39932230-34cc-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__5dd9f670-34d4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f79153d0-33e4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__40daec90-33e5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__e671c440-34d4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__38084d60-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__62295df0-34d5-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                        <li className="list-item"><img alt="avatar game"
                                                                       src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*search by filter*/}
                            <div class="filter-player  hidden">
                                <select class="form-control gender " id="gender">
                                    <option value="" selected="selected">Giới tính</option>
                                    <option value="female">Nữ</option>
                                    <option value="male">Nam</option>
                                </select>
                                <select class="form-control type ">
                                    <option value="" selected="selected">Thể loại</option>
                                    <option value="new">Người mới</option>
                                    <option value="hot">Hot</option>
                                    <option value="vip">Vip</option>
                                </select>
                                <div class="form-control ready false">Sẵn sàng</div>
                                <div class="form-control online false">Online</div>
                                <button type="button" class="form-control price false btn btn-default">Khoảng giá
                                </button>
                                <input type="text" class="form-control city" placeholder="Sống tại" readonly=""
                                       value=""/>
                                <input type="text" class="form-control name" placeholder="Tên/Url Player"
                                       autocomplete="off" maxlength="32" value=""/>
                                <input type="text" class="form-control category" placeholder="Tên game"
                                       autocomplete="off" value=""/>
                                <button type="button" onClick={filterUserProfile} class="form-control btn-filter btn btn-default"><i
                                    class="fa fa-search"></i>Tìm kiếm
                                </button>
                            </div>


                            <div class="list-player">
                                <div class="box vip-player">
                                    <header class="title-header vip"><h5 class="title-header-left">TOP 6 VIEWS HOT
                                        NHẤT</h5>
                                        <p class="title-header-right"><span>Làm mới</span><i
                                            class="fas fa-sync false"></i></p>
                                    </header>
                                    <div class="card-player row">
                                        {userProfile.map(user => (

                                            <div class="col-md-4">
                                                <div class="player-information-card-wrap ">
                                                    <div class="player-avatar">
                                                        <Link to={"/api/userDetail/" + user.id}>
                                                            <a target="_blank"
                                                               href="https://playerduo.net/daotrangdai97">
                                                                <img src={user.account.avatar} class=""
                                                                     style={{height: "100%"}} alt="PD"
                                                                     id="avt-img-reponsiver"/>
                                                            </a>
                                                        </Link>
                                                        <a target="_blank" class="player-price"
                                                           href="#"> {user.price}$/h</a>
                                                    </div>
                                                    <a target="_blank" class="player-information" href="#">
                                                        <h3 class="player-name">
                                                            <a target="_blank"
                                                               href="https://playerduo.net/daotrangdai97"> {user.lastName} {user.firstName} ❤️</a>
                                                            <i class="fas fa-check-circle kyc" aria-hidden="true"></i>
                                                            <div class="player-status ready"></div>
                                                        </h3>
                                                        <p>
                                                            {user.supplies && user.supplies.map(sup => (
                                                                <button>{sup.nameSupply}</button>
                                                            ))}
                                                            <div className="category">
                                                                <div className="div--flex">
                                                                    <div className="game-cate">
                                                                        <img src={user.account.avatar} alt=""/></div>
                                                                    <div className="box-item-label">
                                                                        <p><i className="far fa-eye"> {user.views}</i>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>

                                        ))}

                                    </div>
                                </div>
                                {/*<div class="box hot-player">*/}
                                {/*    <header class="title-header hot"><h5 class="title-header-left">HOT PLAYERS</h5>*/}
                                {/*        <p class="title-header-right"><span>Làm mới</span><i*/}
                                {/*            class="fas fa-sync false"></i></p>*/}
                                {/*    </header>*/}
                                {/*    <div class="card-player row">*/}

                                {/*        <div class="col-md-3">*/}
                                {/*            <div class="player-information-card-wrap">*/}
                                {/*                <div class="player-avatar"><a target="_blank"*/}
                                {/*                                              href="https://playerduo.net/xucuteee"><img*/}
                                {/*                    src="../resources/raw/7531f917-5e4b-4b8d-85d8-f531fdd3489f__7cb12d30-eae5-11ed-a657-a54d6be1d46a__player_avatar.jpg"*/}
                                {/*                    class="" alt="PD" id="avt-img-reponsiver"/></a>*/}
                                {/*                    <div class="sound-player pause"><i class="fas fa-play hidden"></i>*/}
                                {/*                        <audio*/}
                                {/*                            src="../resources/raw/7531f917-5e4b-4b8d-85d8-f531fdd3489f__adcbb7b0-8816-11ec-ba40-b5b607f164e2__audio_voice.mp3"></audio>*/}
                                {/*                        <div class="audio-player false">*/}
                                {/*                            <div></div>*/}
                                {/*                            <div></div>*/}
                                {/*                            <div></div>*/}
                                {/*                        </div>*/}
                                {/*                        <div class="btn-play"><span class="time-text"*/}
                                {/*                                                    id="tracktime">6.3"</span><i*/}
                                {/*                            class="fas fa-play"></i></div>*/}
                                {/*                    </div>*/}
                                {/*                    <a target="_blank" class="player-price"*/}
                                {/*                       href="https://playerduo.net/xucuteee">60,000*/}
                                {/*                        đ/h</a></div>*/}
                                {/*                <a target="_blank" class="player-information"*/}
                                {/*                   href="https://playerduo.net/xucuteee">*/}
                                {/*                    <h3 class="player-name"><a target="_blank"*/}
                                {/*                                               href="https://playerduo.net/xucuteee">Reina</a>*/}
                                {/*                        <div class="player-status ready"></div>*/}
                                {/*                    </h3>*/}
                                {/*                    <p class="player-title">đáng iu một chút thôi nha</p>*/}
                                {/*                    <div class="category">*/}
                                {/*                        <div class="div--flex">*/}
                                {/*                            <div class="game-cate"><img*/}
                                {/*                                src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"*/}
                                {/*                                class="" alt="Liên Minh Huyền Thoại"/><img*/}
                                {/*                                src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg"*/}
                                {/*                                class="" alt="Đấu trường chân lý"/><img*/}
                                {/*                                src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg"*/}
                                {/*                                class="" alt="Tâm Sự"/><img*/}
                                {/*                                src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg"*/}
                                {/*                                class="" alt="bật nhạc"/></div>*/}
                                {/*                            <div class="rate"><i class="fas fa-star"></i>*/}
                                {/*                                <p>4.9 <i>(178)</i></p></div>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a></div>*/}
                                {/*        </div>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            backgroundColor: "rgb(255, 255, 255)",
            border: "1px solid rgb(204, 204, 204)",
            boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 3px",
            position: "absolute",
            transition: "visibility 0s linear 0.3s, opacity 0.3s linear 0s",
            opacity: 0,
            visibility: "hidden",
            zIndex: "2000000000",
            left: "0px",
            top: "-10000px"
        }}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    zIndex: "2000000000",
                    backgroundColor: "rgb(255, 255, 255)",
                    opacity: "0.05"
                }}></div>
            <div class="g-recaptcha-bubble-arrow"
                 style={{
                     border: "11px solid transparent",
                     width: "0px",
                     height: "0px",
                     position: "absolute",
                     pointerEvents: "none",
                     marginTop: "-11px",
                     zIndex: "2000000000"
                 }}></div>
            <div class="g-recaptcha-bubble-arrow"
                 style={{
                     border: "10px solid transparent",
                     width: "0px",
                     height: "0px",
                     position: "absolute",
                     pointerEvents: "none",
                     marginTop: "-10px",
                     zIndex: "2000000000"
                 }}></div>
            <div style={{zIndex: "2000000000", position: "relative"}}>
                <iframe title="hình ảnh xác thực reCAPTCHA sẽ hết hạn sau 2 phút nữa" src="index_2.html"
                        name="c-837utcd6rzwu"
                        frameborder="0" scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        style={{width: "100%", height: "100%"}}></iframe>
            </div>
        </div>
        <div
            style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(204, 204, 204)",
                boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 3px",
                position: "absolute",
                transition: "visibility 0s linear 0.3s, opacity 0.3s linear 0s",
                opacity: 0,
                visibility: "hidden",
                zIndex: "2000000000",
                left: "0px",
                top: "-10000px"
            }}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    zIndex: "2000000000",
                    backgroundColor: "rgb(255, 255, 255)",
                    opacity: "0.05"
                }}></div>
            <div class="g-recaptcha-bubble-arrow"
                 style={{
                     border: "11px solid transparent",
                     width: "0px",
                     height: "0px",
                     position: "absolute",
                     pointerEvents: "none",
                     marginTop: "-11px",
                     zIndex: "2000000000"
                 }}></div>
            <div class="g-recaptcha-bubble-arrow"
                 style={{
                     border: "10px solid transparent",
                     width: "0px",
                     height: "0px",
                     position: "absolute",
                     pointerEvents: "none",
                     marginTop: "-10px",
                     zIndex: "2000000000"
                 }}></div>
            <div style={{zIndex: "2000000000", position: "relative"}}>
                <iframe title="hình ảnh xác thực reCAPTCHA sẽ hết hạn sau 2 phút nữa" src="index_3.html"
                        name="c-xoyknwz7mz5"
                        frameborder="0" scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        style={{width: "100%", height: "100%"}}></iframe>
            </div>
        </div>
        <div
            style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(204, 204, 204)",
                boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 3px",
                position: "absolute",
                transition: "visibility 0s linear 0.3s, opacity 0.3s linear 0s",
                opacity: 0,
                visibility: "hidden",
                zIndex: "2000000000",
                left: "0px",
                top: "-10000px"
            }}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    zIndex: "2000000000",
                    backgroundColor: "rgb(255, 255, 255)",
                    opacity: "0.05"
                }}></div>
            <div class="g-recaptcha-bubble-arrow"
                 style={{
                     border: "11px solid transparent",
                     width: "0px",
                     height: "0px",
                     position: "absolute",
                     pointerEvents: "none",
                     marginTop: "-11px",
                     zIndex: "2000000000"
                 }}></div>
            <div class="g-recaptcha-bubble-arrow"
                 style={{
                     border: "10px solid transparent",
                     width: "0px",
                     height: "0px",
                     position: "absolute",
                     pointerEvents: "none",
                     marginTop: "-10px",
                     zIndex: "2000000000"
                 }}></div>
            <div style={{zIndex: "2000000000", position: "relative"}}>
                <iframe title="hình ảnh xác thực reCAPTCHA sẽ hết hạn sau 2 phút nữa" src="index_4.html"
                        name="c-9s3rhxajcuwj"
                        frameborder="0" scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        style={{width: "100%", height: "100%"}}></iframe>
            </div>
        </div>
        </body>
    )
};
export default TrangChu;
