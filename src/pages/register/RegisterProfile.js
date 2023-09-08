import {ErrorMessage, Field, Formik} from "formik";
import SignupCCDV from "../../service/custom/SignupCCDV";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Họ là bắt buộc'),
    lastName: Yup.string().required('Tên là bắt buộc'),
    country: Yup.string().required('Quốc tịch là bắt buộc'),
    address: Yup.string().required('Địa chỉ là bắt buộc'),
    phoneNumber: Yup.string().required('Số điện thoại là bắt buộc'),
    idCard: Yup.string().required('CCCD là bắt buộc'),
    price:Yup.string().required('Không được để trống'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    nickName: Yup.string().required('Tên người dùng là bắt buộc')
});
const RegisterProfile =()=>{

return(
    <>
        <div className={'wrapper-register'}>
            <div className={'container-register'}>
                <div className={'layoutForm'}>
                    <div className={'layout1'} >
                        <img src="https://img.lovepik.com/photo/40036/8981.jpg_wh860.jpg" className="" alt="PD" style={{height:'100%'}}/>
                    </div>
                    <div  className={'contentmain'} style={{width:'430px'}}>
                        <div >
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    country:'',
                                    address:'',
                                    phoneNumber:'',
                                    idCard:'',
                                    email: '',
                                    nickName:'',
                                    price:''
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values, actions) => {
                                    // Đây là nơi xử lý submit form sau khi đã validate thành công
                                    console.log(values);
                                    SignupCCDV.signupUserDetailProfile(values)
                                        .then( async (response) => {
                                            alert('Đăng kí thành công')
                                        })
                                        .finally(() => {
                                            actions.setSubmitting(false);
                                        });
                                }}
                            >
                                {({ handleSubmit, isSubmitting }) => (
                                    <form onSubmit={handleSubmit}>
                                        <tr>
                                            <td>
                                        <div className="fieldGroup">
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="Họ"
                                                maxLength="5000"
                                                autoComplete="false"
                                                style={{ textAlign: 'center' ,borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none' }}
                                            />
                                            <ErrorMessage name="firstName" component="div" className="error" />
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
                                                style={{ textAlign: 'center' ,borderRadius: '7px',padding:'7px',margin:'10px', outline: 'none'}}
                                            />
                                            <ErrorMessage name="lastName" component="div" className="error" />
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
                                                        style={{ textAlign: 'center',borderRadius: '7px',padding:'7px',margin:'10px' , outline: 'none'}}
                                                    />
                                                    <ErrorMessage name="country" component="div" className="error" />
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
                                                       style={{ textAlign: 'center',borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none'}}
                                                   />
                                                   <ErrorMessage name="price" component="div" className="error" />
                                               </div>
                                           </td>
                                       </tr>
                                        <tr>
                                            <td>
                                                <span>Chọn vùng </span>
                                                <select key={'id'}>
                                                    <option value={1}>Miền bắc</option>
                                                    <option value={2}>Miền trung</option>
                                                    <option value={3}>Miền nam</option>
                                                </select>
                                            </td>
                                            <td>
                                                <link to={''}/>
                                            </td>
                                        </tr>
                                    </form>
                                )}
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