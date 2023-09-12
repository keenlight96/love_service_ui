import React, {useEffect, useState} from "react";
import axios from "axios";
import "../../custom-css/RegisterSupply.css";
import $ from 'jquery'
import {useDispatch, useSelector} from "react-redux";
import {getAllActiveSupplies} from "../../service/SupplyService";
import {getSupplyByUserID} from "../../service/CCDVsService";

function RegisterSupply() {
    const dispatch = useDispatch();
    const supply = useSelector(state => {
        console.log(state)
        return state.supplies.supplies.all;
    });
    const userSupply = useSelector(state => {
        return state.supplies.supplies.user.supplies;
    });
    // const [userSupply, setUserSupply] = useState([]);
    const idUser = JSON.parse(localStorage.getItem("account")).id;
    const [cost, setCost] = useState('');
    const [hour, setHour] = useState('');

    useEffect(() => {
        dispatch(getAllActiveSupplies());
        dispatch(getSupplyByUserID(idUser))
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
        <span>Đăng Ký Dịch Vụ</span>
        <div className="container">
            <div className="row pick-supply">
                <h2 className="col-12">Các dịch vụ cơ bản gồm :</h2>
                {supply.length > 0 && supply.map((s) => {
                    if (s.type === 1 && s.isActive === true) {
                        if (userSupply && userSupply.find(userSupply => userSupply.id === s.id)) {
                            return (
                                <div className="col-4">
                                        <input type="checkbox" name="checkbox" id={s.id} value={s.id} checked/>
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        } else {
                            return (<div className="col-4">
                                    <input type="checkbox" name="checkbox" id={s.id} value={s.id}
                                    />
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        }
                    }
                })}
            </div>
            <div className="row pick-supply">
                <h2 className="col-12">Dịch vụ miễn phí :</h2>
                {supply.length > 0 && supply.map((s) => {
                    if (s.type === 2 && s.isActive === true) {
                        if (userSupply &&userSupply.find(userSupply => userSupply.id === s.id)) {
                            return (<div className="col-4">
                                    <input type="checkbox" name="checkbox" id={s.id} value={s.id} checked/>
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        } else {
                            return (<div className="col-4">
                                    <input type="checkbox" name="checkbox" id={s.id} value={s.id}/>
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        }
                    }
                })}
            </div>
            <div className="row pick-supply">
                <h2 className="col-12">Dịch vụ mở rộng :</h2>
                {supply.length > 0 && supply.map((s) => {
                    if (s.type === 3 && s.isActive === true) {
                        if (userSupply &&userSupply.find(userSupply => userSupply.id === s.id)) {
                            return (<div className="col-4">
                                    <input type="checkbox" name="checkbox" id={s.id} value={s.id} checked/>
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        } else {
                            return (<div className="col-4">
                                    <input type="checkbox" name="checkbox" id={s.id} value={s.id}/>
                                    <label htmlFor={s.id}>{s.nameSupply}</label>
                                </div>
                            );
                        }
                    }
                })}
            </div>
            <table className="Cost">
                <tr>
                    <td><label htmlFor="rentCost">Tiền Theo Tiếng :</label>
                    </td>
                    <td><input type="text" id="rentCost" placeholder={cost} required/>
                    </td>
                </tr>
            </table>
            <input type="button" id="send" value="Submit" onClick={send}/>
        </div>

    </>)
}

export default RegisterSupply;