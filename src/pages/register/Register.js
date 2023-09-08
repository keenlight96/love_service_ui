import React from 'react';
import {ErrorMessage, Field, Formik} from 'formik';
import * as Yup from 'yup';
import '../../custom-css/cssRegister.css'
import SignupCCDV from "../../service/custom/SignupCCDV";

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Tên đăng nhập là bắt buộc'),
    password: Yup.string().required('Mật khẩu là bắt buộc'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp')
        .required('Nhập lại mật khẩu là bắt buộc'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    nickName: Yup.string().required('Tên người dùng là bắt buộc')
});
const SignupForm = () => {
    return (
       <>
           <div className={'wrapper-register'}>
               <div className={'container-register'}>
                   <div className={'layoutForm'}>
                       <div className={'layout1'} >
                           <img src="https://img.lovepik.com/photo/40036/8981.jpg_wh860.jpg" className="" alt="PD" style={{height:'100%'}}/>
                       </div>
                       <div  className={'contentmain'}>
                           <div >
                               <Formik
                                   initialValues={{
                                       username: '',
                                       password: '',
                                       confirmPassword: '',
                                       email: '',
                                       nickName:'',
                                   }}
                                   validationSchema={validationSchema}
                                   onSubmit={(values, actions) => {
                                       // Đây là nơi xử lý submit form sau khi đã validate thành công
                                       console.log(values);
                                       SignupCCDV.registerAndProfile(values)
                                           .then( async (response) => {
                                               console.log(response)
                                           if (response.data.validStatus === 'NAME_EXISTED') {
                                                   alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
                                               } else if (response.data.validStatus === 'EMAIL_EXIST') {
                                                   alert("Email đã được đăng ký. Vui lòng sử dụng email khác.");
                                               }  else if (response.data.validStatus === 'SUCCESSFULL') {
                                                  alert("Đăng ký thành công.");
                                               }
                                   })
                                           .finally(() => {
                                               actions.setSubmitting(false);
                                           });
                                   }}
                               >
                                   {({ handleSubmit, isSubmitting }) => (
                                       <form onSubmit={handleSubmit}>
                                           <div className="fieldGroup">
                                               <Field
                                                   type="text"
                                                   name="username"
                                                   placeholder="Tên đăng nhập"
                                                   maxLength="5000"
                                                   autoComplete="false"
                                                   style={{ textAlign: 'center' ,borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none' }}
                                               />
                                               <ErrorMessage name="username" component="div" className="error" />
                                           </div>
                                           <div className="fieldGroup">
                                               <Field
                                                   type="password"
                                                   name="password"
                                                   placeholder="Mật khẩu"
                                                   maxLength="5000"
                                                   autoComplete="false"
                                                   style={{ textAlign: 'center' ,borderRadius: '7px',padding:'7px',margin:'10px', outline: 'none'}}
                                               />
                                               <ErrorMessage name="password" component="div" className="error" />
                                           </div>
                                           <div className="fieldGroup">
                                               <Field
                                                   type="password"
                                                   name="confirmPassword"
                                                   placeholder="Nhập lại mật khẩu"
                                                   maxLength="5000"
                                                   autoComplete="false"
                                                   style={{ textAlign: 'center',borderRadius: '7px',padding:'7px',margin:'10px' , outline: 'none'}}
                                               />
                                               <ErrorMessage name="confirmPassword" component="div" className="error" />
                                           </div>
                                           <div className="register-verify-email">
                                               <div className="fieldGroup" style={{ display: 'flex',  justifyContent: 'center', outline: 'none' }}>
                                                       <Field
                                                           type="email"
                                                           name="email"
                                                           placeholder="Xác thực Email"
                                                           maxLength="5000"
                                                           autoComplete="false"
                                                           style={{
                                                               textAlign: 'center',
                                                               width: '160px',
                                                               marginTop: '10px',
                                                               marginBottom: '10px',
                                                               borderRadius: '7px',
                                                               padding: '7px',
                                                               marginLeft: '20px',
                                                               marginRight: '0px',
                                                               borderRight: '0',
                                                               borderTopRightRadius: '0', // Không bo tròn góc trên bên phải
                                                               borderBottomRightRadius: '0',
                                                               outline: 'none',
                                                               // Không bo tròn góc dưới bên phải
                                                           }}
                                                       />
                                                   <div>
                                                       <button type="button" disabled={isSubmitting}  style={{
                                                           backgroundColor: '#FFE4E1',
                                                           width: '100px',
                                                           height: '40px',
                                                           marginTop: '10px',
                                                           marginBottom: '1px',
                                                           marginLeft: '1px',

                                                           border: '0px',
                                                           borderRadius: '7px',
                                                           borderTopLeftRadius: '0', // Không bo tròn góc trên bên trái
                                                           borderBottomLeftRadius: '0',   // Không bo tròn góc dưới bên trái
                                                       }}>
                                                           <span>Lấy mã</span>
                                                       </button>
                                                   </div>
                                               </div>
                                               <ErrorMessage name="email" component="div" className="error" />
                                           </div>
                                           <div >
                                               <div className="fieldGroup">
                                                   <Field
                                                       type="text"
                                                       name="nickName"
                                                       placeholder="Tên người dùng"
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
                                                   <ErrorMessage name="nickName" component="div" className="error"/>
                                               </div>
                                           </div>
                                           <div className="recaptcha">
                                               {/* Đoạn mã reCAPTCHA */}
                                           </div>
                                           <button type={"submit"} disabled={isSubmitting}
                                                   style={{
                                                       backgroundColor: '#FFE4E1',
                                                       marginTop: '2px',
                                                       marginLeft:'39px',
                                                       marginBottom:'20px',
                                                       height: '30px',
                                                       borderRadius: '10px',
                                                       alignContent:'center'
                                                   }}>
                                               <span style={{margin: '20px', padding: '10px',}}>Đăng ký tài khoản</span>
                                           </button>
                                       </form>
                                   )}
                               </Formik>
                               <div className="change-link" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                   <a className="create-new">
                                       <p>
                                           <span>Đăng nhập</span>
                                       </p>
                                   </a>
                                   <a className="create-new">
                                       <p>
                                           <span>Quên mật khẩu?</span>
                                       </p>
                                   </a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </>
    );
};

export default SignupForm;
