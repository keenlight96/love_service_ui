import LoginService from "../service/login";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {useState} from "react";


function Login() {
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
            if (data.status.nameStatus === "active" && data.isActive == "true") {
                if (data.role.nameRole ==="ROLE_ADMIN") {
                    navigate("admin");
                } else if (data.role.nameRole ==="ROLE_USER") {
                    navigate("home");
                } else if (data.role.nameRole ===("ROLE_CCDV")) {
                    navigate("home");
                }
            } else if (data.status.nameStatus === "register") {
                navigate("/login");
                setMessage("tài khoản chưa được chấp nhận");
            } else if (data.status.nameStatus === "block") {
                navigate("/login");
                setMessage("tài khoản của bạn đã bị khóa");
            } else if (data.isActive == "false") {
                navigate("allBills");
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
                 <header class="menu__header" id="header-menu">
                    <div class="navbar-header"><a href="https://playerduo.net/" class="logo"><img alt="logo playerduo"
                                                                                                  src="../resources/raw/logo.png"/></a>
                    </div>
                    <div class="navbar">
                        <ul class="nav navbar-nav navbar-left">
                            <li class="item-search">
                                <nav class="Navbar__Item">
                                    <div class="Navbar__Link">
                                        <div class="Group-search visible "><span class="search input-group"><input
                                            disabled=""
                                            placeholder="Nickname/Url ..."
                                            type="text"
                                            class="form-control"
                                            value=""/><span
                                            class="input-group-addon"><button disabled="" type="button"
                                                                              class="btn btn-default"><i
                                            class="fal fa-search" aria-hidden="true"></i></button></span></span></div>
                                    </div>
                                </nav>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-center">
                            <li class="item-icon"><a class="group-user " href="https://playerduo.net/"><i
                                class="fal fa-home-alt"></i></a></li>
                            <li class="item-icon"><a class="group-user " href="https://playerduo.net/stories"><i
                                class="fal fa-camera-movie"></i></a></li>
                            <li class="item-icon group-fb"><a class="group-user"><i class="fal fa-trophy-alt"></i></a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li class="item-icon group-fb"><a class="group-user flag"><i class="fal fa-globe"></i></a>
                            </li>
                            <li class="item-icon group-fb"><a class="group-user"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li class="item-icon authent"><a class="money-user" href=""><i
                                class="fal fa-power-off"></i><span>Đăng nhập</span></a>
                            </li>
                            <li class="item-icon mode"><a class="group-user"><i class="fas fa-moon"></i></a></li>
                        </ul>
                    </div>
                    <div class="navbar-mobile hidden">
                        <button type="button" class="btn-login btn btn-default"><span>Đăng nhập</span></button>
                        <a class="btn-bars"><i class="fal fa-bars"></i></a>
                        <div class="flex-side hidden">
                            <div class="overlay"></div>
                            <div class="content">
                                <div class="box-search">
                                    <nav class="Navbar__Item">
                                        <div class="Navbar__Link">
                                            <div class="Group-search visible "><span class="search input-group"><input
                                                disabled=""
                                                placeholder="Nickname/Url ..."
                                                type="text"
                                                class="form-control"
                                                value=""/><span
                                                class="input-group-addon"><button disabled="" type="button"
                                                                                  class="btn btn-default"><i
                                                class="fal fa-search" aria-hidden="true"></i></button></span></span>
                                            </div>
                                        </div>
                                    </nav>
                                    <a class="btn-close"><i class="fal fa-times fa-2x"></i></a></div>
                                <ul class="list-page"><a href="https://playerduo.net/">
                                    <li class="item-icon "><a class="group-user"><i class="fal fa-home-alt"></i>
                                        <span>Trang chủ</span></a></li>
                                </a><a href="https://playerduo.net/stories">
                                    <li class="item-icon "><a class="group-user"><i
                                        class="fal fa-camera-movie"></i> Stories</a>
                                    </li>
                                </a>
                                    <li class="item-icon"><a class="group-user"><i class="fal fa-trophy-alt"></i> <span>Bảng xếp hạng</span></a>
                                    </li>
                                </ul>
                                <div class="list-mode">
                                    <div class="item"><p class="title"><span>Chế độ</span></p><a class="func mode"><i
                                        class="fas fa-moon op"></i><i class="fas fa-sun false"></i></a></div>
                                    <div class="item"><p class="title"><span>Cộng đồng</span></p>
                                        <div class="func group"><a href="https://www.facebook.com/groups/playerduovn"
                                                                   target="_blank" rel="noopener noreferrer"><i
                                            class="fal fa-globe"></i></a><a href="https://www.facebook.com/playerduo"
                                                                            target="_blank" rel="noopener noreferrer"><i
                                            class="fab fa-facebook-f"></i></a></div>
                                    </div>
                                    <div class="item"><p class="title"><span>Ngôn ngữ</span></p><a
                                        class="func lang"><img
                                        src="../resources/raw/1.png" class="flag op" alt="PD"/><img
                                        src="../resources/raw/2.png"
                                        class="flag false"
                                        alt="PD"/></a>
                                    </div>
                                    <div class="item"><p class="title"><span>Tải App</span></p>
                                        <div class="func app"><a href="https://testflight.apple.com/join/r6H9YvY4"
                                                                 target="_blank"
                                                                 rel="noopener noreferrer" download="">PlayerChat</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
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
                                                <a href="#"><span>Quên mật khẩu?</span></a>
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