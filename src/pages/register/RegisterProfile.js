import {ErrorMessage, Field, Form, Formik} from "formik";
import SignupCCDV from "../../services/SignupCCDV";
import React, {useState} from "react";
import {ErrorMessage, Field, Formik} from "formik";
import SignupCCDV from "../../service/custom/SignupCCDV";
import React from "react";
import * as Yup from "yup";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS cho DatePicker


const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Họ là bắt buộc'),
    lastName: Yup.string().required('Tên là bắt buộc'),
    country: Yup.string().required('Quốc tịch là bắt buộc'),
    address: Yup.string().required('Địa chỉ là bắt buộc'),
    phoneNumber: Yup.string().required('Số điện thoại là bắt buộc'),
    idCard: Yup.string().required('CCCD là bắt buộc'),
    price: Yup.string().required('Không được để trống'),
    nickName: Yup.string().required('Tên người dùng là bắt buộc'),
    height: Yup.string().required('Chiều cao là bắt buộc'),
    width: Yup.string().required('Cân nặng là bắt buộc')

});
const RegisterProfile =()=> {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const account = JSON.parse(localStorage.getItem("account"));

    return (
        <>
            <div className={'wrapper'}>
                <div className={'container'} style={{backgroundColor: 'whitesmoke'}}>
                    <div style={{display: 'flex', width: '100%'}}>
                        <div style={{width: '40%'}}>
                            <div>
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        country: '',
                                        address: '',
                                        height: '',
                                        width: '',
                                        phoneNumber: '',
                                        idCard: '',
                                        nickName: '',
                                        price: '',
                                        id: '',
                                        basicRequest: '',
                                        facebookLink: '',
                                        birthday: ''
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        // Đây là nơi xử lý submit form sau khi đã validate thành công
                                        console.log(values);
                                        // Lấy ID tài khoản từ token ( ID được lưu trong localStorage)
                                        const id = JSON.parse(localStorage.getItem("account")).id
                                        SignupCCDV.signupUserDetailProfile(id, values)
                                            .then(async (response) => {
                                                console.log(response)
                                                alert("thanh cong")
                                            })
                                    }}
                                >
                                    <Form>
                                        <tr>
                                            <td>
                                                <div className="fieldGroup">
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
                                                    <ErrorMessage name="firstName" component="div" className="error"/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fieldGroup">
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
                                                    <ErrorMessage name="lastName" component="div" className="error"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="fieldGroup">
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
                                                    <ErrorMessage name="country" component="div" className="error"/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fieldGroup">
                                                    <Field
                                                        type="text"
                                                        name="address"
                                                        placeholder="Địa chỉ"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                    />
                                                    <ErrorMessage name="address" component="div" className="error" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="fieldGroup">
                                                    <Field
                                                        type="text"
                                                        name="phoneNumber"
                                                        placeholder="Số điện thoại"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                    />
                                                    <ErrorMessage name="phoneNumber" component="div" className="error" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fieldGroup">
                                                    <Field
                                                        type="text"
                                                        name="idCard"
                                                        placeholder=" Số CCCD"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                    />
                                                    <ErrorMessage name="idCard" component="div" className="error" />
                                                </div>
                                            </td>
                                        </tr>
                                      <tr>
                                          <td>
                                              <div className="fieldGroup">
                                                  <Field
                                                      type="text"
                                                      name="height"
                                                      placeholder="Chiều cao"
                                                      maxLength="5000"
                                                      autoComplete="false"
                                                      style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                  />
                                                  <ErrorMessage name="height" component="div" className="error" />
                                              </div>
                                          </td>
                                          <td>
                                              <div className="fieldGroup">
                                                  <Field
                                                      type="text"
                                                      name="width"
                                                      placeholder="Cân nặng"
                                                      maxLength="5000"
                                                      autoComplete="false"
                                                      style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                  />
                                                  <ErrorMessage name="width" component="div" className="error" />
                                              </div>
                                          </td>
                                      </tr>
                                     <tr>
                                         <td>
                                             <div className="fieldGroup">
                                                 <Field
                                                     type="text"
                                                     name="basicRequest"
                                                     placeholder="Yêu cầu cơ bản"
                                                     maxLength="5000"
                                                     autoComplete="false"
                                                     style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                 />
                                                 <ErrorMessage name="basicRequest" component="div" className="error" />
                                             </div>
                                         </td>
                                         <td>
                                             <div className="fieldGroup">
                                                 <Field
                                                     type="text"
                                                     name="facebookLink"
                                                     placeholder="Link trang cá nhân"
                                                     maxLength="5000"
                                                     autoComplete="false"
                                                     style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                 />
                                                 <ErrorMessage name="facebookLink" component="div" className="error" />
                                             </div>
                                         </td>
                                     </tr>
                                       <tr>
                                           <td>
                                               <div className="fieldGroup">
                                                   <Field
                                                       type="text"
                                                       name="nickName"
                                                       placeholder="Tên người dùng"
                                                       maxLength="5000"
                                                       autoComplete="false"
                                                       style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                   />
                                                   <ErrorMessage name="nickName" component="div" className="error" />
                                               </div>
                                           </td>
                                           <td>
                                               <div className="fieldGroup">
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
                                                   <ErrorMessage name="price" component="div" className="error"/>
                                               </div>
                                           </td>
                                       </tr>

                                        <tr>
                                            <td>
                                                <div className="fieldGroup"

                                                >
                                                    <select key={'id'}   style={{
                                                        textAlign: 'center',
                                                        borderRadius: '7px',
                                                        padding: '7px',
                                                        margin: '10px',
                                                        outline: 'none'
                                                    }}>
                                                        <option value={1}>Miền bắc</option>
                                                        <option value={2}>Miền trung</option>
                                                        <option value={3}>Miền nam</option>
                                                    </select>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="fieldGroup" style={{marginLeft: '10px'}}>
                                                    <DatePicker
                                                        selected={selectedDate}
                                                        onChange={handleDateChange}
                                                        dateFormat="dd/MM/yyyy" // Định dạng ngày tháng năm
                                                        placeholderText="Sinh nhật"
                                                        style={{
                                                            textAlign: 'center',
                                                            borderRadius: '7px',
                                                            padding: '7px',
                                                            margin: '10px',
                                                            outline: 'none'
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="fieldGroup" style={{marginLeft: '70px'}}>
                                                    <button type={"submit"} style={{width: '100px'}}
                                                    >Lưu
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    </Form>

                                </Formik>

                            </div>


                        </div>
                        <div className="fieldGroup" style={{width: '60%', marginTop: '10px'}}>
                         <img src={account} alt="Avatar" />
                        </div>
                    </div>
            </div>
        </div>
    </>
)


}
export default RegisterProfile