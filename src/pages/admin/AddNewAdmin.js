const AddNewAdmin =() =>{
    return(
        <>
            <div className="main_content_iner overly_inner ">
                <div className="container-fluid p-0 ">
                    <div className="row">
                        <div className="col-12">
                            <div className="page_title_box d-flex flex-wrap align-items-center justify-content-between">
                                <div className="page_title_left d-flex align-items-center">
                                    <h3 className="f_s_25 f_w_700 dark_text mr_30">Dashboard</h3>
                                    <ol className="breadcrumb page_bradcam mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="javascript:void(0);">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Analytic</li>
                                    </ol>
                                </div>
                                <div className="page_title_right">
                                    <div className="page_date_button d-flex align-items-center">
                                        <img src="../template_admin/img/icon/calender_icon.svg" alt="" />
                                        August 1, 2020 - August 31, 2020
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="white_card card_height_100 mb_30">
                                <div className="white_card_header">
                                    <div className="box_header m-0">
                                        <div className="main-title">
                                            <h3 className="m-0">Add New Admin </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="white_card_body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="common_input mb_15">
                                                <input type="text" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="common_input mb_15">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="common_input mb_15">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="common_input mb_15">
                                                <input type="text" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="common_input mb_15">
                                                <input type="text" placeholder="Mobile No" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="common_input mb_15">
                                                <input type="text" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="common_input mb_15">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <select
                                                className="nice_Select2 nice_Select_line wide"
                                                style={{ display: "none" }}
                                            >
                                                <option value={1}>Select Role</option>
                                                <option value={1}>Role 1</option>
                                                <option value={1}>Role2</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <div className="create_report_btn mt_30">
                                                <a href="#" className="btn_1 radius_btn d-block text-center">
                                                    Add Admin
                                                </a>
                                            </div>
                                        </div>
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
export default AddNewAdmin;