import ReactDOM from 'react-dom';
import React, {useEffect, useState} from "react";
import "./modalCreateBill.css"
import axios from "axios";
import $ from 'jquery'
import {useDispatch, useSelector} from "react-redux";
import {getAllBillIn7DayByCCDV} from "../../../service/BillsService";

const ModalCreateBill = ({isShowing, hide, userDetail}) => {
    const user=useSelector(state => (state.user.user.current));

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const currentTime = new Date();
    const [hourRent, setHourRent] = useState([]);
    const [test, setTest] = useState(new Array(168).fill(0));
    const [total, setTotal] = useState(userDetail.price);
    const [day, setDay] = useState((new Date()).getDate());
    const [hour, setHour] = useState(1);
    const [bill, setBill] = useState({
        address: '',
        dateCreate: '',
        dateStart: '',
        dateEnd: '',
        price: userDetail.price,
        total: userDetail.price * 1,
        hour: 1,
        firstMessage: '',
        accountCCDV: {
            id: userDetail.id
        },
        accountUser: {}
    });
    const [halo, setHalo] = useState([]);

    useEffect(() => {
        dispatch(getAllBillIn7DayByCCDV(userDetail.id));
        fillDay();
        axios.get(`http://localhost:8080/bills/getAllBill7DayByIDCCDV?id=${userDetail.id}`).then(data => {
            fillData(data.data);
            console.log("nạp");
        }).catch(() => {
            console.log("check api")
        })
    }, [message]);

    const fillDay = () => {
        const b = [];
        for (let i = 0; i < 7; i++) {
            const a = new Date();
            a.setDate((a.getDate() + i));
            b.push(a);
        }
        setHalo(b)
    }
    const pricing = (valueTag) => {
        setTotal(userDetail.price * valueTag.target.value);
        setBill({...bill, total: userDetail.price * valueTag.target.value});
        setHour(valueTag.target.value)
    }
    const getData = (e) => {
        const number = e.target.value - currentTime.getDate();
        const temp = [];
        for (let i = 0; i < 24; i++) {
            temp.push(test[(i + (number * 24))]);
        }
        setHourRent(temp);
        setDay(e.target.value);
    }
    const submit = () => {
        let check = false;
        for (let i = 0; i < hourRent.length; i++) {
            if (hourRent[i] === 2) {
                check = true;
                break
            }
        }
        if (user ) {
        } else {check = false;}
        if (check) {
            let tempBill = {
                ...bill,
                total: total,
                hour: hour,
                dateCreate: new Date(),
                firstMessage: $("[name='MessageBills']").val(),
                address: $("[name='address']").val(),
                accountUser: {
                    id: JSON.parse(localStorage.getItem("account")).id
                }
            }
            axios.post("http://localhost:8080/bills/createBill", tempBill, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}}).then(data => {
                hide();
                alert(data.data);
            }).catch(
                (e) => {
                    console.log(e);
                }
            ).finally(() => {
                setMessage("1")
            })
        }
    }


    const fillData = (data) => {
        const tempTest = [...test];
        for (const item of data) {
            const number = (new Date(item.dateStart)).getHours() + ((new Date(item.dateStart)).getDate() - currentTime.getDate()) * 24;
            for (let i = number; i < number + item.hour; i++) {
                tempTest[i] = 1;
            }
        }
        for (let i = 0; i < 24; i++) {
            if (currentTime.getHours() >= i) {
                tempTest[i] = 1;
            }
        }
        setTest(tempTest);
        const temp = [];
        for (let i = 0; i < 24; i++) {
            temp.push(tempTest[i]);
        }
        $("[name='MessageBills']").text("");
        $("[name='address']").text("");
        setHourRent(temp);
        setHour(1)
    }
    const handClick = (index) => {
        let check = true;
        const temp = [...test];
        const number = index + ((day - currentTime.getDate()) * 24);
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === 2) {
                temp[i] = 0;
            }
        }
        for (let i = number; i < (parseInt(number) + parseInt(hour)); i++) {
            if (temp[i] === 1) {
                check = false;
            }
        }
        if (check) {
            for (let i = number; i < (parseInt(number) + parseInt(hour)); i++) {
                if (temp[i] === 0) {
                    temp[i] = 2;
                }
            }
            setTest(temp);
        }
        const number1 = day - currentTime.getDate();
        const temp1 = [];
        for (let i = 0; i < 24; i++) {
            temp1.push(temp[(i + (number1 * 24))]);
        }
        setHourRent(temp1);
        const a = new Date();
        a.setDate(day);
        a.setHours(index);
        a.setMinutes(0);
        a.setSeconds(0, 0);
        const b = new Date(a.getTime());
        b.setHours((b.getHours() + parseInt(hour)));
        setBill({...bill, dateStart: a, dateEnd: b});
    }


    return isShowing ? ReactDOM.createPortal(
        <div role="dialog">
            <div className="fade modal-backdrop in"/>
            <div role="dialog" tabIndex={-1} className="fade modal-donate in modal"
                 style={{display: 'block', paddingLeft: '17px'}}>
                <div className="modal-dialog">
                    <div className="modal-content" role="document">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={hide}><span
                                aria-hidden="true">×</span><span
                                className="sr-only">Close</span></button>
                            <h4 className="modal-title"><span>Thuê người yêu </span></h4></div>
                        <div className="modal-body" style={{
                            overflow: 'auto', maxHeight: '550px'
                        }}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Player:</td>
                                    <td>{userDetail.account.nickname}</td>
                                </tr>
                                <tr>
                                    <td><span>Thời gian muốn thuê</span>:</td>
                                    <td><select name="hour" className="form-control" onChange={pricing}>
                                        <option value={1}>1&nbsp;giờ</option>
                                        <option value={2}>2&nbsp;giờ</option>
                                        <option value={3}>3&nbsp;giờ</option>
                                        <option value={4}>4&nbsp;giờ</option>
                                        <option value={5}>5&nbsp;giờ</option>
                                        <option value={6}>6&nbsp;giờ</option>
                                        <option value={7}>7&nbsp;giờ</option>
                                        <option value={8}>8&nbsp;giờ</option>
                                        <option value={9}>9&nbsp;giờ</option>
                                        <option value={10}>10&nbsp;giờ</option>
                                        <option value={11}>11&nbsp;giờ</option>
                                        <option value={12}>12&nbsp;giờ</option>
                                        <option value={13}>13&nbsp;giờ</option>
                                        <option value={14}>14&nbsp;giờ</option>
                                        <option value={15}>15&nbsp;giờ</option>
                                        <option value={16}>16&nbsp;giờ</option>
                                        <option value={17}>17&nbsp;giờ</option>
                                        <option value={18}>18&nbsp;giờ</option>
                                        <option value={19}>19&nbsp;giờ</option>
                                        <option value={20}>20&nbsp;giờ</option>
                                        <option value={21}>21&nbsp;giờ</option>
                                        <option value={22}>22&nbsp;giờ</option>
                                        <option value={23}>23&nbsp;giờ</option>
                                        <option value={24}>24&nbsp;giờ</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td><span>Chi phí</span>:</td>
                                    <td><span className="price">{total}đ</span></td>
                                </tr>
                                <tr>
                                    <td><span>Số dư hiện tại</span>:</td>
                                    {user  ? <td>
                                        <span className="total-amount">{user.balance}đ</span><span
                                        className="load-more-credit">+</span></td> : <td>
                                        <span className="total-amount">0đ</span><span
                                        className="load-more-credit">+</span></td>}

                                </tr>
                                <tr>
                                    <td>Địa Chỉ :</td>
                                    <td><textarea id="textAddress" placeholder="Nhập địa chỉ  " name="address"
                                                  maxLength={255} type="text" className="form-control"
                                                  defaultValue={""}/><p className="err-message"/></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><textarea id="testMessage"
                                                              placeholder=" Gửi lời nhắn cho người được thuê "
                                                              name="MessageBills"
                                                              maxLength={255} type="text" className="form-control"
                                                              defaultValue={""}/><p className="err-message"/></td>
                                </tr>

                                <tr>
                                    <td>Chọn Ngày :</td>
                                    <td><select name="dateCreate" className="form-control" onChange={getData}>
                                        <option id="day0" value={halo[0].getDate()}>
                                            Ngày :&nbsp;{halo[0].getDate()}-{halo[2].getMonth()}-{halo[2].getFullYear()}
                                        </option>
                                        <option id="day1" value={halo[1].getDate()}>
                                            Ngày :&nbsp;{halo[1].getDate()}-{halo[2].getMonth()}-{halo[2].getFullYear()}
                                        </option>
                                        <option id="day2" value={halo[2].getDate()}>
                                            Ngày :&nbsp;{halo[2].getDate()}-{halo[2].getMonth()}-{halo[2].getFullYear()}
                                        </option>
                                        <option id="day3" value={halo[3].getDate()}>
                                            Ngày :&nbsp;{halo[3].getDate()}-{halo[3].getMonth()}-{halo[3].getFullYear()}
                                        </option>

                                        <option id="day4" value={halo[4].getDate()}>
                                            Ngày :&nbsp;{halo[4].getDate()}-{halo[4].getMonth()}-{halo[4].getFullYear()}
                                        </option>

                                        <option id="day5" value={halo[5].getDate()}>
                                            Ngày :&nbsp;{halo[5].getDate()}-{halo[5].getMonth()}-{halo[5].getFullYear()}
                                        </option>

                                        <option id="day6" value={halo[6].getDate()}>
                                            Ngày :&nbsp;{halo[6].getDate()}-{halo[6].getMonth()}-{halo[6].getFullYear()}
                                        </option>

                                    </select></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div className="table-boxTime">
                                            {hourRent.length > 0 && hourRent.map((value, index) => (
                                                value === 0 ?
                                                    <div className="item-box" onClick={() => handClick(index)}
                                                         key={index}>&nbsp;{index}h00</div> :
                                                    value === 1 ?
                                                        <div className="item-box-unavailable"
                                                             key={index}>&nbsp;{index}h00:&nbsp;Thuê </div> :
                                                        value === 2 ?
                                                            <div className="item-box-pick"
                                                                 onClick={() => handClick(index)}
                                                                 key={index}>&nbsp;{index}h00:&nbsp;Chọn </div> : <></>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-fill btn btn-danger" onClick={submit}><span>Thuê</span>
                            </button>
                            <button type="button" className="btn btn-default" onClick={hide}><span>Đóng</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    ) : null;
}
export default ModalCreateBill;