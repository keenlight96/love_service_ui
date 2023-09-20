import React, {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik, useFormikContext} from "formik";
import {DatePicker, Modal} from "antd";
import RegisterSupply from "../../components/common/RegisterSupply";
import {useSelector} from "react-redux";

const UserInfo = () => {

    const [accounts, setAccounts] = useState('');
    const [zone,setzone]= useState('');
    const accountId = JSON.parse(localStorage.getItem("account") || "{}").id;
    console.log('id:' , accountId)


    useEffect(() => {
        axios.get(`http://localhost:8080/accounts/account-profile/${accountId}`)
            .then(res => {
                if (res.data) {
                    console.log('thongtin:', res.data);
                    setAccounts(res.data);
                    if (res.data.gender== null){
                        setInitialGender("Nam/Nữ");
                    }else{
                        setInitialGender(res.data.gender)
                    }
                    if(res.data.zone==null){
                        setzone("Bắc/Trung/Nam");
                    }else {
                        setzone(res.data.zone.zone)
                    }
                } else {
                    console.log('Không có dữ liệu');
                }
            })
            .catch(error => {
                console.error('Lỗi khi tải dữ liệu:', error);
            });
    }, []);
    //supplies
    // const userSupply = useSelector(state => {
    //     try {
    //         return state.supplies.supplies.userSupplies;
    //     } catch (e) {
    //         return [];
    //     }
    // });
    //chon sinh nhat
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        // Chuyển đổi giá trị DatePicker thành đối tượng ngày
        setSelectedDate(date);
    };

//chon gioi tinh
    const [initialGender, setInitialGender] = useState(accounts.gender || '');
    const [gender, setGender] = useState(initialGender);

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    //bat modal
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault(); // Ngăn chặn sự kiện mặc định của nút submit
        setIsOpen(true);
        console.log(1)
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    //birthday
    // const originalDate = accounts.birthday;
    // const dateObject = new Date(originalDate);
    // const year = dateObject.getFullYear();
    // const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Cộng thêm 1 vì tháng trong JavaScript bắt đầu từ 0
    // const day = String(dateObject.getDate()).padStart(2, '0');
    //
    // const formattedDate = `${year}-${month}-${day}`;
    // console.log(formattedDate);
    // const [birthday, setBirthday] = useState(formattedDate);
    //
    // const handleBirthdayChange = (e) => {
    //     const newValue = e.target.value;
    //     setBirthday(newValue);
    // };



    //message
    const [message, setMessage] = useState('');
    return (
        <>
            <div className="row flowaccount">
                <div className="col-sm-4 col-xs-12">
                    <div className="border"><p>TỔNG TIỀN ĐÃ NẠP</p><span>0đ </span></div>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <div className="border"><p>TỔNG TIỀN ĐÃ DONATE</p><span>0đ </span></div>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <div className="border"><p>SỐ GIỜ ĐÃ THUÊ</p><span>0 Giờ</span></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 personalinfo"><h3>Thông tin cá nhân</h3>
                    <div className="d-flex img-avatar"><img src={accounts.avatar} className alt="avatar" sizes="sm"/>
                        <div className="cropimg-avatar">
                            <button type="button"><span> Thay Đổi<p>JPG, GIF or PNG, &lt;5 MB. </p></span>
                            </button>
                        </div>
                    </div>
                    <Formik initialValues= {accounts }
                            enableReinitialize={true}
                            onSubmit={(values) => {
                                // values.birthday = selectedDate
                                // values.supplies = userSupply;
                                // values.birthday = birthday;
                                console.log("mau gui di", values)
                                // if (values.isGoogle === true){
                                //     setMessage('Do bạn đăng kí bằng google nên không thể sửa tài khoản email.')
                                //     return
                                // }
                                    axios.post(`http://localhost:8080/userDetail/change-user-profile/${accountId}`,values).then(res => {
                                        alert("thanh cong")
                                        console.log("ketqua",res.data)
                                    })
                                }
                            }>
                            <Form className="from-userinfo">
                            <div className="fieldGroup "><p className="control-label">Họ</p><Field type="text"
                                                                                                   name="firstName"
                                                                                                   maxLength={5000}
                                                                                                   autoComplete="false"
                            />
                            </div>
                            <div className="fieldGroup "><p className="control-label">Tên</p><Field type="text"
                                                                                                    name="lastName"
                                                                                                    // placeholder  ={accounts.lastName || 'Nhập tên của bạn'}
                                                                                                    // defaultValue ={accounts.lastName || 'Nhập tên của bạn'}
                                                                                                    maxLength={5000}
                                                                                                    autoComplete="false"

                            />
                            </div>
                            <div className="fieldGroup "><p className="control-label">Nick Name</p><Field type="text"
                                                                                                          name="nickname"
                                                                                                          maxLength={5000}
                                                                                                          autoComplete="false"
                            />
                            </div>
                                <div className="fieldGroup "><p className="control-label">Số điện thoại</p><Field type="text"
                                                                                                              name="phoneNumber"
                                                                                                              maxLength={5000}
                                                                                                              autoComplete="false"
                                />
                                </div>

                                <div className="fieldGroup ">
                                    <p className="control-label">Email</p>
                                    {accounts.isGoogle ? (
                                        <Field
                                            type="text"
                                            name="email"
                                            maxLength={5000}
                                            autoComplete="false"
                                            readOnly={true}
                                        />
                                    ) : (
                                        <>
                                            <Field
                                                type="text"
                                                name="email"
                                                maxLength={5000}
                                                autoComplete="false"
                                            />
                                            {message && (<div className="error">{message}</div>)}
                                        </>
                                    )}
                                </div>

                                <p className="control-label">Ngày sinh</p>
                                <div>
                                    {/*<div*/}
                                    {/*    style={{*/}
                                    {/*        width: '90%',*/}
                                    {/*        display: 'inline-block', // Để đảm bảo nằm cạnh nhau*/}
                                    {/*        textAlign: 'center',*/}
                                    {/*        height: '55px',*/}
                                    {/*        padding: '17px',*/}
                                    {/*        border: '1px solid #777',*/}
                                    {/*        borderRadius: '7px',*/}
                                    {/*    }}*/}
                                    {/*>*/}
                                    {/*    {birthday || initialBirthday}*/}
                                    {/*</div>*/}
                                    <Field
                                        type="date"
                                        name="birthday"
                                        maxLength={5000}
                                        autoComplete="false"
                                        style={{
                                            width: '100%', // Chiếm 10% chiều rộng
                                            verticalAlign: 'top', // Để thẻ input nằm trên thẻ div
                                        }}
                                    />
                                </div>


                            <div className="fieldGroup "><p className="control-label">Địa chỉ</p><Field type="text"
                                                                                                        name="address"
                                                                                                        // placeholder={accounts.address || 'Nhập địa chỉ của bạn'}
                                                                                                        maxLength={5000}
                                                                                                        autoComplete="false"
                                                                                                        // enableReInitial = "true"
                            />
                            </div>
                            <div>
                                {/*<p className="control-label">Thành phố</p><select name="city">*/}
                                {/*<option value="5b99f9e35180d13ea22a97fc" selected="selected">An Giang</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a97fd"> Bà Rịa Vũng Tàu</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a97fe"> Bình Dương</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a97ff"> Bình Phước</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9800"> Bình Thuận</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9801"> Bình Định</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9802"> Bạc Liêu</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9803"> Bắc Cạn</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9804"> Bắc Giang</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9805"> Bắc Ninh</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9806"> Bến Tre</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9807"> Cao Bằng</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9808"> Cà Mau</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9809"> Cần Thơ</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a980a"> Đà Nẵng</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a980b"> Đăk Lăk</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a980c"> Điện Biên</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a980d"> Đồng Nai</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a980e"> Đồng Tháp</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a980f"> Gia Lai</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9810"> Hà Giang</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9811"> Hà Nam</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9812"> Hà Nội</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9813"> Hà Tây</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9814"> Hà Tĩnh</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9815"> Hà Đông</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9816"> Hòa Bình</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9817"> Hưng Yên</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9818"> Hạ Long</option>*/}
                                {/*<option value="5b99f9e35180d13ea22a9819"> Hải Dương</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a981a"> Hải Phòng</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a981b"> Hồ Chí Minh</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a981c"> Khánh Hòa</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a981d"> Kiên Giang</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a981e"> KonTum</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a981f"> Lai Châu</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9820"> Long An</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9821"> Lào Cai</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9822"> Lâm Đồng</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9823"> Lạng Sơn</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9824"> Nam Định</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9825"> Nghệ An</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9826"> Ninh Bình</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9827"> Ninh Thuận</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9828"> Phú Thọ</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9829"> Phú Yên</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a982a"> Quảng Bình</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a982b"> Quảng Nam</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a982c"> Quảng Ngãi</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a982d"> Quảng Ninh</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a982e"> Quảng Trị</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a982f"> Sóc Trăng</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9830"> Sơn La</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9831"> Thanh Hóa</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9832"> Thái Bình</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9833"> Thái Nguyên</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9834"> Thừa Thiên Huế</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9835"> Tiền Giang</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9836"> Trà Vinh</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9837"> Tuyên Quang</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9838"> Tây Ninh</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a9839"> Vĩnh Long</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a983a"> Vĩnh Phúc</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a983b"> Yên Bái</option>*/}
                                {/*    <option value="5b99f9e35180d13ea22a983c">Khác</option>*/}
                                {/*</select>*/}
                            </div>
                            <div className="fieldGroup ">
                            <p className="control-label">Giới tính</p>
                            <div>
                                {/*<div style={{ display: 'flex' }}>*/}
                                {/*    <div*/}
                                {/*        style={{*/}
                                {/*            width: '50%',*/}
                                {/*            textAlign: 'center',*/}
                                {/*            height: '55px',*/}
                                {/*            marginTop: '10px',*/}
                                {/*            padding: '17px',*/}
                                {/*            border: '1px solid #777',*/}
                                {/*            borderRadius: '7px',*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        {gender || initialGender}*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                        <Field
                                            as="select"
                                            name="gender"
                                            style={{
                                                textAlign: 'center',
                                                borderRadius: '7px',
                                                padding: '7px',
                                                // margin: '10px',
                                                outline: 'none',
                                                width: '100%',
                                                border: '1px solid #777',
                                            }}
                                            // onChange={handleGenderChange}
                                        >
                                            <option value="">{initialGender}</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>

                                        </Field>
                                    {/*</div>*/}
                                </div>
                            </div>


                            {/*<div className="d-flex"><label className="gender--radio"><input name="gender" type="radio"*/}
                            {/*                                                                defaultValue={ accounts.gender || "Nam"}*/}
                            {/*                                                                defaultChecked="checked"/>Nam<span/></label><label*/}
                            {/*    className="gender--radio"><input name="gender" type="radio"*/}
                            {/*                                     defaultValue={accounts.gender|| "Nữ"}/>Nữ<span/></label></div>*/}
                            <div className="fieldGroup ">
                                <p className="control-label">Miền</p>
                                <div>
                                    <Field
                                        as="select"
                                        name="zone.id"
                                        style={{
                                            textAlign: 'center',
                                            borderRadius: '7px',
                                            padding: '7px',
                                            outline: 'none',
                                            width: '100%',
                                            border: '1px solid #777',
                                        }}
                                    >
                                        <option value="">{zone}</option>
                                        <option value="1">Miền Bắc</option>
                                        <option value="2">Miền Trung</option>
                                        <option value="3">Miền Nam</option>
                                    </Field>

                                </div>
                            </div>


                            <div className="fieldGroup "><p className="control-label">Chiểu cao (cm)</p><Field type="text"
                                                                                                        name="height"
                                                                                                        // placeholder={accounts.height || 'Nhập chiều cao của bạn'}
                                                                                                        maxLength={5000}
                                                                                                        autoComplete="false"
                                                                                                               // enableReInitial = "true"
                            />
                            </div>
                            <div className="fieldGroup "><p className="control-label">Cân nặng (kg)</p><Field type="text"
                                                                                                          name="weight"
                                                                                                          // placeholder={accounts.weight || 'Nhập cân nặng của bạn'}
                                                                                                          maxLength={5000}
                                                                                                          autoComplete="false"
                                                                                                              // enableReInitial = "true"
                            />
                            </div>
                            <div className="fieldGroup "><p className="control-label">Giới thiệu</p><Field type="text"
                                                                                                              name="describes"
                                                                                                              // placeholder={accounts.describes || 'Nhập giới thiệu của bạn'}
                                                                                                              maxLength={5000}
                                                                                                              autoComplete="false"
                                                                                                           // enableReInitial = "true"
                            />
                            </div>
                            <div className="fieldGroup "><p className="control-label">Yêu cầu</p><Field type="text"
                                                                                                           name="basicRequest"
                                                                                                           // placeholder={accounts.basicRequest || 'Nhập yêu cầu của bạn'}
                                                                                                           maxLength={5000}
                                                                                                           autoComplete="false"
                                                                                                        // enableReInitial = "true"
                            />
                            </div>
                            <div className="fieldGroup "><p className="control-label">Trang cá nhân</p><Field type="text"
                                                                                                        name="facebookLink"
                                                                                                        // placeholder={accounts.facebookLink || 'Nhập địa chỉ trang cá nhân của bạn'}
                                                                                                        maxLength={5000}
                                                                                                        autoComplete="false"
                                                                                                              // enableReInitial = "true"
                            />
                            </div>
                            {/*<div  className={"col-md-18"} style={{textAlign: "center"}}>*/}
                            {/*    <div>*/}
                            {/*        <p className="control-label">Dịch vụ</p>*/}
                            {/*        <RegisterSupply isRegister={true} name='supplies.id'/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <hr/>
                            <button type="submit" className="btn-update">Cập nhật</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
export default UserInfo