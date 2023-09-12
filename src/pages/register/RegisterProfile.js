import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import SignupCCDV from "../../service/custom/SignupCCDV";
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";


import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {useNavigate} from "react-router"; // Import CSS cho DatePicker
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Họ là bắt buộc'),
    lastName: Yup.string().required('Tên là bắt buộc'),
    country: Yup.string().required('Quốc tịch là bắt buộc'),
    address: Yup.string().required('Địa chỉ là bắt buộc'),
    phoneNumber: Yup.string().required('Số điện thoại là bắt buộc'),
    idCard: Yup.string().required('CCCD là bắt buộc'),
    price: Yup.string().required('Không được để trống'),
    // nickName: Yup.string().required('Tên người dùng là bắt buộc'),
    height: Yup.string().required('Chiều cao là bắt buộc'),
    weight: Yup.string().required('Cân nặng là bắt buộc')
});
const RegisterProfile =()=> {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const [supply, setSupply] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/supplies/getAllSupply')
            .then((res) => {
                setSupply(res.data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    }, []);
    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        }
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const getSelectedOptionId =()=> {
        var select = document.getElementById("zoneSelect");
        var selectedOption = select.options[select.selectedIndex];
        var selectedId = selectedOption.value;
        console.log("Selected ID: " + selectedId);
    }
    // Khai báo state để lưu trữ giá trị được chọn
    const [selectedId, setSelectedId] = useState(['']);
    const navigate = useNavigate();


    const account = JSON.parse(localStorage.getItem("account"));
    return (
        <>
            <div className={'wrapper'}>
                <div className={'container'} style={{backgroundColor: 'whitesmoke'}}>
                    <div style={{display: 'flex', width: '100%'}}>
                        <div style={{width: '100%'}}>
                            <div>
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        country: '',
                                        address: '',
                                        height: '',
                                        weight: '',
                                        phoneNumber: '',
                                        idCard: '',
                                        price: '',
                                        basicRequest: '',
                                        facebookLink: '',
                                        birthday: '',
                                        zone: {
                                            id: ''
                                        },
                                        supplies: [{
                                            id: ""
                                        },],
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        // Đây là nơi xử lý submit form sau khi đã validate thành công


                                        values.zone.id = selectedId.toString(); // Cập nhật giá trị zone từ selectedId
                                        values.supplies = selectedIds;

                                        console.log("id supply la",selectedIds)
                                        console.log("ID zone là", selectedId);
                                        // Chuyển đổi giá trị ngày thành định dạng "YYYY-MM-DD"
                                        const formattedDate = selectedDate.toISOString().split('T')[0];
                                        values.birthday = formattedDate;
                                        console.log("Giá trị đối tượng values là", values);
                                        // Lấy ID tài khoản từ token ( ID được lưu trong localStorage)
                                        const id = JSON.parse(localStorage.getItem("account")).id
                                        SignupCCDV.signupUserDetailProfile(id, values)
                                            .then(async (response) => {
                                                console.log(2)
                                                console.log(response.data)
                                                Swal.fire({
                                                    position: 'center',
                                                    icon: 'success',
                                                    title: 'Đăng kí thành công',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                navigate("/CCDV")

                                            })
                                    }}
                                >

                                    <Form>
                                        <div style={{display: 'flex'}}>
                                            <div>

                                                <tr>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="firstName"
                                                                placeholder="Họ"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="firstName" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="lastName"
                                                                placeholder="Tên"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="lastName" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="country"
                                                                placeholder="Quốc tịch"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="country" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="address"
                                                                placeholder="Địa chỉ"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="address" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="phoneNumber"
                                                                placeholder="Số điện thoại"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="phoneNumber" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="idCard"
                                                                placeholder=" Số CCCD"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="idCard" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="height"
                                                                placeholder="Chiều cao"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="height" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="weight"
                                                                placeholder="Cân nặng"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="weight" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="basicRequest"
                                                                placeholder="Yêu cầu cơ bản"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="basicRequest" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="facebookLink"
                                                                placeholder="Link trang cá nhân"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="facebookLink" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <Field
                                                                type="text"
                                                                name="price"
                                                                placeholder="Mức giá cho thuê theo giờ"
                                                                maxLength="5000"
                                                                autoComplete="false"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    margin: '10px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                            <ErrorMessage name="price" component="div"
                                                                          className="error"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{
                                                            textAlign: 'center',
                                                            borderRadius: '10px',
                                                            padding: '7px',
                                                            margin: '10px',
                                                            outline: 'none'
                                                        }}>
                                                            <DatePicker
                                                                selected={selectedDate}
                                                                onChange={handleDateChange}
                                                                dateFormat="dd/MM/yyyy"
                                                                placeholderText="Sinh nhật"
                                                                style={{
                                                                    border: '1px solid #ccc', // Thêm đường viền
                                                                    borderRadius: '7px',
                                                                    padding: '7px',
                                                                    outline: 'none'
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div>
                                                            <select
                                                                name="zone"
                                                                id="zoneSelect"
                                                                onChange={(event) => setSelectedId(event.target.value)}
                                                                value={selectedId}
                                                                style={{marginLeft:'10px'}}
                                                            >
                                                                <option value="">Chọn khu vực</option>
                                                                <option value={1}>Bắc</option>
                                                                <option value={2}>Trung</option>
                                                                <option value={3}>Nam</option>
                                                            </select>

                                                        </div>
                                                    </td>


                                                </tr>
                                            </div>
                                            <div style={{width:'600px'}}>
                                                <table style={{width:'100%'}}>
                                                    <thead>
                                                    <tr>
                                                        <th>Chọn</th>
                                                        <th>Tên dịch vụ</th>

                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {supply.map((supplyItem) => (
                                                        <tr key={supplyItem.id}>
                                                            <td>
                                                                <input
                                                                    type="checkbox"
                                                                    name="supplies"
                                                                    value={supplyItem.id}
                                                                    checked={selectedIds.includes(supplyItem.id)}
                                                                    onChange={(event) =>
                                                                        handleCheckboxChange(event, supplyItem.id)
                                                                    }
                                                                />
                                                            </td>
                                                            <td>{supplyItem.nameSupply}</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div style={{marginLeft: '170px'}}>

                                         <button type={"submit"} style={{width: '100px'}}
                                            >Lưu
                                            </button>



                                        </div>
                                    </Form>

                                </Formik>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </>
)


}
export default RegisterProfile