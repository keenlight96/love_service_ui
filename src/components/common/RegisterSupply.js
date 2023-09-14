import React, {useEffect, useState} from "react";
import axios from "axios";
import "../../custom-css/RegisterSupply.css";
import $ from 'jquery'
import {useDispatch, useSelector} from "react-redux";
import {getAllActiveSupplies, getSupplyByUserID2, updateUserSupply} from "../../service/SupplyService";

function RegisterSupply(isRegister) {
    const dispatch = useDispatch();
    const supply = useSelector(state => {
        return state.supplies.supplies.all;
    });
    const userSupply = useSelector(state => {
        try {
            return state.supplies.supplies.userSupplies;
        } catch (e) {
            return [];
        }
    });
    // const [userSupply, setUserSupply] = useState([]);
    const idUser = JSON.parse(localStorage.getItem("account")).id;
    const [cost, setCost] = useState('');
    const [hour, setHour] = useState('');

    useEffect(() => {
        dispatch(getAllActiveSupplies());
        if (!isRegister) {
            dispatch(getSupplyByUserID2(idUser))
        }
    }, []);



    $('input[type=checkbox]').on('click', function () {
        $('input[type=checkbox]', this).prop('checked', function (i, checked) {
            return !checked
        })
        if ($('input[type=checkbox]', this).prop('checked'))
            $(this).addClass('selected');
        else
            $(this).removeClass('selected');
    });

    function handleChosenSupplies(e, item) {
        let targetSupply = {id : item};
        let newSupplies;
        if (e.target.checked) {
            if (!userSupply || userSupply.length == 0) {
                newSupplies = [targetSupply];
            } else {
                newSupplies = [...userSupply]
                newSupplies.push(targetSupply);
            }
            dispatch(updateUserSupply(newSupplies))
        } else {
            if (!userSupply || userSupply.length == 0) {
            } else {
                newSupplies = userSupply.filter(ele => {
                    if (ele.id != item) {
                        return ele;
                    }
                })
            }
            dispatch(updateUserSupply(newSupplies))
        }
    }

    function send() {
        const result = [];
        const costIP = $('#rentCost').val();
        $('input[type=checkbox]').each(function () {
            if ($(this).prop('checked')) {
                result.push(
                    {id: $(this).val()}
                );
            }
        });

        // sử dụng idUser để call API
        axios.post("http://localhost:8080/supplies/createSupply?id=" + idUser + "?cost=" + costIP , result).then(data => {
            alert("Thêm dữ liệu thành công")
        })

    }

    return (<>
        <div>
            <div className="pick-supply" style={{textAlign: "center"}}>
                <h4 className="col-12">Dịch vụ cung cấp</h4>
                <div style={{textAlign: "initial"}}>
                {supply.length > 0 && supply.map((s) => {
                    if (s.isActive === true) {
                        if (userSupply && userSupply.find(userSupply => userSupply.id === s.id)) {
                            return (
                                <div className="col-md-6">
                                        <input type="checkbox" name="checkbox" id={s.id} value={s.id} checked
                                               onClick={(e) => {handleChosenSupplies(e, s.id)}}/>
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        } else {
                            return (<div className="col-md-6">
                                    <input type="checkbox" name="checkbox" id={s.id} value={s.id}
                                           onClick={(e) => {handleChosenSupplies(e, s.id)}}/>
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        }
                    }
                })}
                </div>
            </div>
            {/*<table className="Cost">*/}
            {/*    <tr>*/}
            {/*        <td><label htmlFor="rentCost">Tiền Theo Tiếng :</label>*/}
            {/*        </td>*/}
            {/*        <td><input type="text" id="rentCost" placeholder={cost} required/>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*</table>*/}
            {/*<input type="button" id="send" value="Submit" onClick={send}/>*/}
        </div>

    </>)
}

export default RegisterSupply;