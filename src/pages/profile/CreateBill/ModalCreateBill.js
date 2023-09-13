import ReactDOM from 'react-dom';
import React, {useEffect, useState} from "react";
import "./modalCreateBill.css"
import axios from "axios";
import $ from 'jquery'

const ModalCreateBill = ({isShowing, hide, userDetail}) => {
    const [message,setMessage]=useState('');
    const currentTime = new Date();
    const [hourRent, setHourRent] = useState([]);
    const [test, setTest] = useState(new Array(72).fill(0))
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
        accountUser: {
            id: JSON.parse(localStorage.getItem("account")).id
        }
    })
    const [total, setTotal] = useState('');
    const [day, setDay] = useState((new Date()).getDate());
    const [hour, setHour] = useState(1)

    useEffect(() => {
        setTotal(userDetail.price);
        axios.get(`http://localhost:8080/bills/getAllBill7DayByIDCCDV?id=` + userDetail.id).then(data => {
            fillData(data.data);
            console.log("nạp");
            console.log(data.data);
        }).catch(() => {
            console.log("check api")
        })
    }, [message]);
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
        let start = new Date()
        start.setDate(start.getDate() + (parseInt(day) - parseInt(start.getDate())));
        for (let i = 0; i < hourRent.length; i++) {
            if (hourRent[i] === 2) {
                start.setHours(i)
                check = true;
                break
            }
        }
        start.setMinutes(0);
        start.setSeconds(0);
        const end = new Date(start.getTime());
        end.setHours((end.getHours() + parseInt(hour)))
        console.log(start)
        console.log(end)
        if (check) {
            setBill({
                ...bill,
                total: total,
                hour: hour,
                dateCreate: ((new Date().getTime())),
                dateStart: (start),
                dateEnd: (end),
                firstMessage: $("[name='MessageBills']").val(),
                address: $("[name='address']").val(),
            })
            axios.post("http://localhost:8080/bills/createBill",  bill,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}}).then(data => {
                console.log(bill);
                console.log("done")
                hide();
                setMessage("done")
            }).catch(
                (e) => {
                    console.log(e);
                    console.log("méo")
                }
            )
        }
    }
    const fillData = (data) => {
        const tempTest = [...test];
        for (const item of data) {
            const number = (new Date(item.dateStart)).getHours() + ((new Date(item.dateStart)).getDate() - currentTime.getDate()) * 24;
            for (let i = number; i <= number + item.hour; i++) {
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
        setHourRent(temp);
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
            if (temp[i] === 0) {
                temp[i] = 2;
            } else if (temp[i] === 1) {
                check = false;
            }
        }
        if (check) {
            setTest(temp)
        }
        const number1 = day - currentTime.getDate();
        const temp1 = [];
        for (let i = 0; i < 24; i++) {
            temp1.push(temp[(i + (number1 * 24))]);
        }
        // setUseState bất đồng bộ vkl , nên cmn ko bao giờ bắt set 1 thg = giá trị 1 thg khác
        setHourRent(temp1);
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
                            <h4 className="modal-title"><span>Thuê player</span></h4></div>
                        <div className="modal-body" style={{
                            overflow: 'auto', maxHeight: '600px'
                        }}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Player:</td>
                                    <td>{userDetail.lastName}</td>
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
                                    <td><span className="total-amount">{userDetail.balance}đ</span><span
                                        className="load-more-credit">+</span></td>
                                </tr>
                                <tr>
                                    <td>Địa Chỉ :</td>
                                    <td><textarea placeholder="Nhập địa chỉ  " name="address"
                                                  maxLength={255} type="text" className="form-control"
                                                  defaultValue={""}/><p className="err-message"/></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><textarea placeholder=" Gửi lời nhắn cho người được thuê "
                                                              name="MessageBills"
                                                              maxLength={255} type="text" className="form-control"
                                                              defaultValue={""}/><p className="err-message"/></td>
                                </tr>

                                <tr>
                                    <td>Chọn Ngày :</td>
                                    <td><select name="dateCreate" className="form-control" onChange={getData}>
                                        <option value={currentTime.getDate()}>Hôm Nay:&nbsp;
                                            {currentTime.getDate()}-{currentTime.getMonth()}-{currentTime.getFullYear()}
                                        </option>
                                        <option value={currentTime.getDate() + 1}>Ngày Mai:&nbsp;
                                            {currentTime.getDate() + 1}-{currentTime.getMonth()}-{currentTime.getFullYear()}
                                        </option>
                                        <option value={currentTime.getDate() + 2}>Ngày Kia:&nbsp;
                                            {currentTime.getDate() + 2}-{currentTime.getMonth()}-{currentTime.getFullYear()}
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
                                                             key={index}>&nbsp;{index}h00 </div> :
                                                        value === 2 ?
                                                            <div className="item-box-pick"
                                                                 onClick={() => handClick(index)}
                                                                 key={index}>&nbsp;{index}h00:Đặt </div> : <></>
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
