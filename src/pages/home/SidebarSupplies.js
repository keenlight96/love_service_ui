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
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarSupplies;