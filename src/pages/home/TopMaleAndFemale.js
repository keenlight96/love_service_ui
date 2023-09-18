import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const TopMaleAndFemale = () =>{
    const topMaleCCDVs = useSelector(state => {
        return state.CCDVs.CCDVs.topMaleCCDV;
    })
    const topFemaleCCDVs = useSelector(state => {
        return state.CCDVs.CCDVs.topFemaleCCDV;
    })
    return (
        <>
            <div className="box newest-ccdvs">
                <header className="title-header vip"><h5 className="title-header-left">TOP CCDV</h5>
                    {/*<p className="title-header-right"><span>Làm mới</span><i className="fas fa-sync false" /></p>*/}
                </header>
                <div className="card-player row">
                    {topFemaleCCDVs && topFemaleCCDVs.map((item, key) => (
                        <Link to={"/profile/" + item.userProfile.account.username}>
                            <div className="col-md-3" key={key}>
                                <div className="player-information-card-wrap">
                                    <div className="player-avatar">
                                        <a style={{width:'auto',height:'30px'}} target="_blank" className="FoE4bG" href="/profile/female5">{item.countRent == null ? 0 : item.countRent.toFixed()}: Lượt thuê</a>
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
                                                    <p>{item.rate == null ? 0 : item.rate.toFixed(1).replace(".", ",")} <i>({item.countRate})</i></p>
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
                        </Link>
                    ))}
                    {topMaleCCDVs && topMaleCCDVs.map((item, key) => (
                        <Link to={"/profile/" + item.userProfile.account.username}>
                        <div className="col-md-3" key={key}>
                            <div className="player-information-card-wrap">
                                <div className="player-avatar">
                                    <a style={{width:'auto',height:'30px'}} target="_blank" className="FoE4bG" href="/profile/female5">{item.countRent == null ? 0 : item.countRent.toFixed()}: Lượt thuê</a>
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
                                                <p>{item.rate == null ? 0 : item.rate.toFixed(1).replace(".", ",")} <i>({item.countRate})</i></p>
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
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
export default TopMaleAndFemale;