import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCCDVsBySupplies} from "../../service/CCDVsService";
import {setChosenSupplies} from "../../service/SupplyService";

const SidebarSupplies = () => {
    const dispatch = useDispatch();

    const supplies = useSelector(state => {
        return state.supplies.supplies.all;
    })
    const chosenSupplies = useSelector(state => {
        return state.supplies.supplies.chosen;
    });

    useEffect(() => {
        dispatch(getCCDVsBySupplies(chosenSupplies));
    }, [chosenSupplies])

    // Start js functions
    const updateChosenSupplies = (e, item) => {
        const li = e.target.closest("li");
        li.classList.toggle("active");

        let supply = {"id" : item.id}
        let index = chosenSupplies.map(e => (e.id)).indexOf(item.id)
        if (index > -1) {
            let newSupplies = chosenSupplies.filter((e, idx) => {
                if (idx != index) {
                    return e;
                }
            })
            dispatch(setChosenSupplies(newSupplies));
        } else {
            dispatch(setChosenSupplies([...chosenSupplies, supply]));
        }
    }

    // End js functions

    return (
        <>
            <div className="home-flex-category">
                <div className="fixed-cate"><p><span>Danh sách dịch vụ</span></p>
                    <ul className="list-group">

                        {supplies && supplies.map((item, key) => (
                            <li className="list-item " key={key} onClick={(e) => {updateChosenSupplies(e, item)}}>
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