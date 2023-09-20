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
                            <p className="control-label">Quốc gia</p><Field as="select"
                                                                            name="country">
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bonaire">Bonaire</option>
                            <option value="Bosnia-Herzegovina">Bosnia-Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad"></option>
                            <option value="Chile"></option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Cocos">Cocos (Keeling) Islands</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo, Democratic Republic of the (Zaire)</option>
                            <option value="Congo">Congo, Republic of</option>
                            <option value="Cook">Cook Islands</option>
                            <option value="Costa">Costa Rica</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curacao">Curacao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Salvador">El Salvador</option>
                            <option value="Equatorial">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland">Falkland Islands</option>
                            <option value="Fiji">Fiji Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French">French Guiana</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe (French)</option>
                            <option value="Guam">Guam (USA)</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="v">Holy See</option>
                        <option value="v">Honduras</option>
                        <option value="v">Hong Kong</option>
                        <option value="v">Hungary</option>
                        <option value="v">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="v">Iraq</option>
                        <option value="v">Ireland</option>
                        <option value="v">Israel</option>
                        <option value="v">Italy</option>
                        <option value="Coast">Ivory Coast (Cote D`Ivoire)</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="v">Kuwait</option>
                        <option value="b">Kuwait</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Liechtenstein</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall">Marshall Islands</option>
                        <option value="Martinique">Martinique (French)</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New">New Caledonia (French)</option>
                        <option value="New">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk">Norfolk Island</option>
                            <option value="North">North Korea</option>
                            <option value="Northern">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn Island</option>
                            <option value="Poland">Poland</option>
                            <option value="Polynesia">Polynesia (French)</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and Grenadines">Saint Vincent and Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="an Marino<">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten">Sint Maarten</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Islands</option>
                            <option value="South Korea">South Korea</option>
                            <option value="outh Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste (East Timor)">Timor-Leste (East Timor)</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tonga">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam" selected="selected">Vietnam</option>
                            <option value="Virgin Islands">Virgin Islands</option>
                            <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                            <option value="Åland Islands">Åland Islands</option>
                        </Field>

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