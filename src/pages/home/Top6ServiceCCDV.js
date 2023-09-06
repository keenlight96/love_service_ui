import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";

function Top6ServiceCCDV() {
    const [userProfile, setUserProfile] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/userDetail/top6Service")
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
        <>


            <div class="box vip-player">
                <header class="title-header vip"><h5 class="title-header-left">TOP 6 VIEWS HOT
                    NHẤT</h5>
                    <p class="title-header-right"><span>Làm mới</span><i
                        class="fas fa-sync false"></i></p>
                </header>
                <div class="card-player row">
                    {userProfile.map(user => (
                        <div class="col-md-3">
                            <div class="player-information-card-wrap ">
                                <div class="player-avatar">
                                    <Link to={"/userDetail/" + user.id}>
                                        <a target="_blank"
                                           href="#">
                                            <img src={user.account.avatar} class=""
                                                 style={{height: "100%"}} alt="PD"
                                                 id="avt-img-reponsiver"/>
                                        </a>
                                    </Link>
                                    <a target="_blank" class="player-price"
                                       href="home/userProfile#"> {user.price}$/h</a>
                                </div>
                                <a target="_blank" class="player-information"
                                   href="home/userProfile#">
                                    <h3 class="player-name">
                                        <a target="_blank"
                                           href="https://playerduo.net/daotrangdai97"> {user.lastName} {user.firstName} ❤️</a>
                                        <i class="fas fa-check-circle kyc" aria-hidden="true"></i>
                                        <div class="player-status ready"></div>
                                    </h3>
                                    <p>
                                        {user.supplies && user.supplies.map(sup => (
                                            <span>{sup.nameSupply}</span>
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
        </>
    )
};
export default Top6ServiceCCDV;
