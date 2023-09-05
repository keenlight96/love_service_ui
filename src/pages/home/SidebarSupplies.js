import React from 'react';
import {useSelector} from "react-redux";

const SidebarSupplies = () => {
    const supplies = useSelector(state => {
        console.log(state)
        return state.supplies.supplies.all;
    })
    return (
        <>
            <div className="home-flex-category">
                <div className="fixed-cate"><p><span>Danh sách dịch vụ</span></p>
                    <ul className="list-group">

                        {supplies && supplies.map((item, key) => (
                            <li className="list-item " key={key}>
                                <div className="media">
                                    <div className="media-body media-middle"><p className="media-heading">{item.nameSupply}</p>
                                    </div>
                                </div>
                            </li>
                        ))}

                        {/*<li className="list-item ">*/}
                        {/*    <div className="media">*/}
                        {/*        <div className="media-left"><img className="media-object" alt="715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg" src="../resources/raw/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg" />*/}
                        {/*        </div>*/}
                        {/*        <div className="media-body media-middle"><p className="media-heading">Liên Minh Huyền Thoại</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarSupplies;