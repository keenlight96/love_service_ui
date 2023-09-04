import {useEffect, useState} from "react";
import axios from "axios";
import "./createSupply.css";
import $ from 'jquery'

function CreateSupply() {
    const [supply, setSupply] = useState([]);
    const [userSupply, setUserSupply] = useState([]);
    const idUser = localStorage.getItem("idUser");
    const [cost, setCost] = useState('');
    const [hour, setHour] = useState('');
    const [User,setUser]=useState('');

    useEffect(() => {
        axios.get("http://localhost:8080/supplies/getAllSupply").then(data => {
            setSupply(data.data);
        });
        // sử dụng idUser để call API
        axios.get("http://localhost:8080/supplies/getSupplyByUserID?id=1").then(data => {
            setUser(data.data)
            setUserSupply(data.data.supply);
            setCost(data.data.price);
            setHour(data.data.minHour)
        });
    }, []);

    $('.row').on('click', function () {
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
        const hourIP = $('#minHour').val();
        $('input[type=checkbox]').each(function () {
            if ($(this).prop('checked')) {
                result.push(
                    {id: $(this).val()}
                );
            }
        });
        // dùng để post cả obj user và ké api :D
        // User.minHour=hourIP;
        // User.price=costIP;

        // sử dụng idUser để call API
        axios.post("http://localhost:8080/supplies/createSupply?id=" + idUser + "?cost=" + costIP + "?hour=" + hourIP, result).then(data => {
            alert("Thêm dữ liệu thành công")
        })

    }

    return (<>
        <div className="container">
            <div className="row">
                <h2 className="col-12">Các dịch vụ cơ bản gồm :</h2>
                {supply.length > 0 && supply.map((s) => {
                    if (s.type === 1 && s.isActive === true) {
                        if (userSupply.find(userSupply => userSupply.id === s.id)) {
                            return (<div className="col-4">
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
            <div className="row">
                <h2 className="col-12">Dịch vụ miễn phí :</h2>
                {supply.length > 0 && supply.map((s) => {
                    if (s.type === 2 && s.isActive === true) {
                        if (userSupply.find(userSupply => userSupply.id === s.id)) {
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
            <div className="row">
                <h2 className="col-12">Dịch vụ mở rộng :</h2>
                {supply.length > 0 && supply.map((s) => {
                    if (s.type === 3 && s.isActive === true) {
                        if (userSupply.find(userSupply => userSupply.id === s.id)) {
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
            <table>
                <tr>
                    <td><label htmlFor="rentCost">Tiền Theo Tiếng :</label>
                    </td>
                    <td><input type="text" id="rentCost" placeholder={cost} required/>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="rentCost">Thời gian thuê tối thiểu :</label>
                    </td>
                    <td><input type="text" id="minHour" placeholder={hour} required/>
                    </td>
                </tr>
            </table>
            <input type="button" id="send" value="Submit" onClick={send}/>
        </div>

    </>)
}

export default CreateSupply;