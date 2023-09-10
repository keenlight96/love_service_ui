import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const CCDVsByFilter =() =>{

    const filterCCDVs = useSelector(state => {
        return state.CCDVs.CCDVs.filterCCDV;
    })
    console.log(filterCCDVs + 1)
    return (
        <>
            {filterCCDVs && filterCCDVs.map((item, key) => (
                <Link to={"/userDetail/" + item.userProfile.id}>
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
                                    <a target="_blank" href={"/profile/" + item.userProfile.account.username}>{item.userProfile.firstName}  {item.userProfile.lastName}</a>
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
                </Link>
            ))}
        </>
    )
}


export default CCDVsByFilter;