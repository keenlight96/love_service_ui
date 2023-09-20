import * as Yup from "yup";
import formik, {ErrorMessage, Field, Formik} from "formik";
import SignupCCDV from "../../service/custom/SignupCCDV";
import React, {useEffect, useState} from "react";
import "../../custom-css/cssRegister.css"
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {useLocation, useNavigate} from "react-router";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(8, 'Tên đăng nhập phải có ít nhất 8 ký tự'),
    password: Yup.string()
        .required('Mật khẩu là bắt buộc')
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .matches(/(?=.*\d)/, 'Mật khẩu phải chứa ít nhất một chữ số'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp')
        .required('Nhập lại mật khẩu là bắt buộc'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    nickName: Yup.string().required('Tên người dùng là bắt buộc')
});

const RegisterCCDV =() =>{
    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');
    // const [idAccount, setIdAccount] = useState('');
    useEffect(() => {
        setMessage('');
        setMessage2('');
    }, []);


    const resetMessage = () => {
        setMessage('');
        setMessage2('');
    }
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <>
            <div style={{display:'flex', backgroundColor:'lightpink',justifyContent:'center'}}>
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
                                        SignupCCDV.registerUser(values)
                                            .then( async (response) => {
                                                // setIdAccount(response.data.id)
                                                console.log(response.data)
                                                if (response.data.validStatus === 'NAME_EXISTED_EMAIL_EXIST') {
                                                    setMessage("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
                                                    setMessage2("Email đã được đăng ký. Vui lòng sử dụng email khác.");
                                                    return
                                                }else if (response.data.validStatus === 'NAME_EXISTED') {
                                                    setMessage("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
                                                    return
                                                } else if (response.data.validStatus === 'EMAIL_EXIST') {
                                                    setMessage2("Email đã được đăng ký. Vui lòng sử dụng email khác.");
                                                    return
                                                }  else if (response.data.validStatus === 'SUCCESSFULL') {
                                                    // alert("Đăng ký thành công.");
                                                    //  Swal.fire({
                                                    //     position: 'center',
                                                    //     icon: 'success',
                                                    //     title: 'Đăng kí thành công, kiểm tra email để xác minh tài khoản.',
                                                    //     showConfirmButton: false,
                                                    //     timer: 1500
                                                    // });
                                                }
                                                const id = response.data.id
                                                navigate('/registerProfile',{state : {data : id}})

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
                                                    onFocus = {resetMessage}
                                                    style={{ textAlign: 'center' ,borderRadius: '7px',padding:'7px' ,margin:'10px', outline: 'none' }}
                                                />
                                                <ErrorMessage name="username" component="div" className="error" />
                                                {message&& (
                                                    <div className="error">
                                                        {message}
                                                    </div>
                                                )}
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
                                                    onFocus = {resetMessage}
                                                    style={{ textAlign: 'center',borderRadius: '7px',padding:'7px',margin:'10px' , outline: 'none'}}
                                                />
                                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                                            </div>
                                            <div className="register-verify-email">
                                                <div className="fieldGroup" >
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="Xác thực Email"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        onFocus = {resetMessage}
                                                        style={{ textAlign: 'center',borderRadius: '7px',padding:'7px',margin:'10px' , outline: 'none'}}

                                                    />

                                                </div>
                                                <ErrorMessage name="email" component="div" className="error" />
                                                {message2 && (
                                                    <div className="error">
                                                        {message2}
                                                    </div>
                                                )}
                                            </div>
                                            <div >
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
                                            </div>
                                            <div className="recaptcha">
                                                {/* Đoạn mã reCAPTCHA */}
                                            </div>
                                            {/*<Link to={`/registerProfile/${idAccount}`}>*/}
                                                <button
                                                    type={"submit"}
                                                    disabled={isSubmitting}
                                                    style={{
                                                        backgroundColor: '#FFE4E1',
                                                        marginTop: '2px',
                                                        marginLeft:'39px',
                                                        marginBottom:'20px',
                                                        height: '30px',
                                                        borderRadius: '10px',
                                                        alignContent:'center'
                                                    }}>
                                                    <span style={{margin:'20px',padding:'10px',}} >Đăng ký tài khoản</span>
                                                </button>
                                            {/*</Link>*/}
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

             </div>
        </>
    )
}
export default RegisterCCDV;