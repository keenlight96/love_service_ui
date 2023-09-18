import LoginService from "../../service/custom/login";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {useState} from "react";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {checkToken} from "../../service/UserService";


function Login() {
    // Lấy "source" từ URL
    const searchParams = new URLSearchParams(window.location.search);
    const sourceParam = searchParams.get('source');
    const dispatch = useDispatch();
    if (sourceParam === 'email_activation'){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Kích hoạt thành công. Hãy đăng nhập ngay.',
            showConfirmButton: false,
            timer: 1500
        });
    }
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const signUpSchema = yup.object().shape({
        username: yup.string()
            .min(4, "tài khoản phải lớn 4 ký tự!")
            .max(50, "Too Long!")
            .required("tài khoản không được để trống")
            .matches(
                /^[a-z0-9]*$/,
                "tài khoản không được chứa ký tự đặc biệt, và được viết hoa"
            ),
        password: yup.string()
            .min(4, "mật khẩu dài ít nhất 5 ký tự trở lên")
            .max(50, "Too Long!")
            .required("mật khẩu không được để trống")
            .matches(
                /^[a-zA-Z0-9]*$/,
                "mật khẩu không được chứa ký tự đặc biệt"
            ),
    })
    const handleLogin = async (values) => {
        try {
            const response = await LoginService.login(values);
            const data = response.data;
            console.log(data.isActive);
            localStorage.setItem("token", data.token);
            localStorage.setItem("account", JSON.stringify(data));
            if ((data.status.nameStatus === "active"||data.status.nameStatus === "inActive")&& data.isActive) {
                dispatch(checkToken());
                if (data.role.nameRole ==="ROLE_ADMIN") {
                    navigate("admin");
                } else if (data.role.nameRole ==="ROLE_USER") {
                    navigate("/");
                } else if (data.role.nameRole ===("ROLE_CCDV")) {
                    console.log("1")
                    navigate("/");
                }
            } else if (data.status.nameStatus === "emailverify") {
                navigate("/login");
                setMessage("tài khoản xác nhận email");
            } else if (data.status.nameStatus === "register") {
                navigate("/login");
                setMessage("tài khoản chưa được chấp nhận");
            } else if (data.status.nameStatus === "block") {
                navigate("/login");
                setMessage("tài khoản của bạn đã bị khóa");
            } else if (!data.isActive) {
                navigate("/login");
                setMessage("tài khoản của bạn đã bị xóa");
            } else {
                // else này đang ko nhận
                navigate("/login");
                setMessage(data);
            }
        } catch (error) {
            navigate("/login");
            setMessage("tài khoản hoặc mật khẩu không chính xác");
        }
    }
    return (
        <>
            <link rel="shortcut icon" href="../resources/raw/favicon.ico"/>
            <link href="/resources/all.css" rel="stylesheet"/>
            <link href="/resources/css.css" rel="stylesheet"/>
            <title>PlayerDuo - Thuê người yêu</title>
            <link href="/resources/8.97b85fe3.chunk.css" rel="stylesheet"/>
            <link href="/resources/main.3e229f12.chunk.css" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/resources/9.cb7de3a7.chunk.css"/>
            <link rel="stylesheet" href="/resources/css-login.css"/>
            <link rel="stylesheet" type="text/css" href="/resources/css/style.css"/>
            <title>React App</title>
                <div className="notifications-wrapper"></div>
                <div className="main-singin-box">
                    <div className="wrapper">
                        <div className="container">

                            <div className="leftside">
                                <div className="air-balloon one">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                                <div className="air-balloon two">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                                <div className="air-balloon three">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                                <div className="air-balloon foure">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                            </div>

                            <div className="row login-page">
                                <div className="col-md-7 hidden-sm hidden-xs image-login">
                                    <img style={{height: '100%', borderRadius: '8px', boxShadow: '5px 5px 7px 0'}}
                                         src="/resources/img/imgbackground.jpg" className=""
                                         alt="PD"/>
                                </div>
                                <div className="content-main" style={{
                                    width: '450px',
                                    border: '1px',
                                    borderRadius: '8px',
                                    backgroundColor: '#fff',
                                    padding: '20px',
                                    boxShadow: '5px 5px 7px 0'
                                }}>
                                    <h3 style={{color: '#f0564a'}}>Nơi kết nối yêu thương</h3>
                                    <Formik
                                        initialValues={{
                                            username: '',
                                            password: '',
                                        }}
                                        onSubmit={(values) => handleLogin(values)}
                                        validationSchema={signUpSchema}
                                    >
                                        <Form>
                                            <div className="fieldGroup">
                                                <Field type="text" name="username"
                                                       placeholder="Tên đăng nhập hoặc email"
                                                       maxLength={18} autoComplete="false"/>
                                                <ErrorMessage name={'username'}/>
                                                {
                                                    message && <p style={{textAlign: 'center'}}>{message}</p>
                                                }
                                            </div>
                                            <div className="fieldGroup">
                                                <Field type="password" name="password" placeholder="Mật khẩu"
                                                       maxLength={50} autoComplete="false"/>
                                                <ErrorMessage name={'password'}/>
                                            </div>
                                            <p className="forgot-password">
                                                <a href="src/pages/login/Login#"><span>Quên mật khẩu?</span></a>
                                            </p>
                                            <button type="submit"><span>Đăng nhập</span></button>
                                        </Form>
                                    </Formik>
                                    <button className="btn btn-default">
                                        <i className="fab fa-facebook"></i>
                                        <span>Đăng nhập bằng Facebook</span>
                                    </button>
                                    <a className="create-new">
                                        <p><span>Đăng ký tài khoản</span></p>
                                    </a>
                                </div>
                            </div>

                            <div className="rightside">
                                <div className="air-balloon one">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                                <div className="air-balloon two">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                                <div className="air-balloon three">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                                <div className="air-balloon foure">
                                    <img src="/resources/img/404-balloon.png" alt="404-balloon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fb-root" style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}
                     className="fb_reset">
                </div>

        </>
    );
};

export default Login;