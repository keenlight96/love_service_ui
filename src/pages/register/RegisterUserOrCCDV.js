import {useNavigate} from "react-router";
import SignupCCDV from "../../service/custom/SignupCCDV";
import Swal from "sweetalert2";

function RegisterUserOrCCDV() {
    const navigate = useNavigate();

    const registerUser = async () => {
        try {
            const accountGoogle = JSON.parse(localStorage.getItem("googleAccount"));
            let account = {
                username: accountGoogle.sub,
                email: accountGoogle.email,
                nickName: accountGoogle.name,
                avatar: accountGoogle.picture,
            }
            SignupCCDV.registerAndProfileGoogle(account)
                .then(async (response) => {
                    if (response.data.validStatus === 'SUCCESSFULL') {
                        await Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Đăng kí thành công',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/login")
                    } else {
                        await Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Có lỗi xảy ra. Vui lòng thử lại.',
                        });
                        navigate("/login")
                    }
                });
        } catch (e) {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Có lỗi xảy ra. Vui lòng thử lại.',
            });
            navigate("/login")
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


                                    <div id={"signInDiv"}></div>

                                    <div className={"row"}>
                                        <div className={"col-md-6"} onClick={() => {registerUser()}}>
                                            <a className="create-new" href={"#"}>
                                                <p><span>Đăng ký người dùng</span></p>
                                            </a>
                                        </div>
                                        <div className={"col-md-6"}>
                                            <a className="create-new" href={"/registerProfileGoogle"}>
                                                <p><span>Đăng ký cung cấp dịch vụ</span></p>
                                            </a>
                                        </div>
                                    </div>
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

export default RegisterUserOrCCDV;