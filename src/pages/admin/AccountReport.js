import React, {useEffect, useState} from "react";
import DetailCCDV from "./DetailCCDV";
import {useDispatch, useSelector} from "react-redux";
import {getListReport} from "../../service/AdminService";

const AccountReport =() =>{
    const dispatch = useDispatch();
    const [userParam, setUserParam] = useState("");
    const reportList = useSelector((state) => {
        return state.admin.admin.listReport;
    });
    console.log(reportList + 8282828)
    const handleInputChange = (e) => {
        setUserParam(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    useEffect(() =>{
       dispatch(getListReport(userParam))
    },[userParam])
    const [currentPage, setCurrentPage] = useState(1);

    const allListReport = 5;

    const indexOfLastAllCCDV = currentPage * allListReport;

    const indexOfFirstAlLCCDV = indexOfLastAllCCDV - allListReport;

    const currenAllListReport = reportList.slice(indexOfFirstAlLCCDV, indexOfLastAllCCDV);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <>
            <link rel="stylesheet" href="/template_admin/css/css_sidebar.css"/>
            <link rel="stylesheet" href="/template_admin/vendors/themefy_icon/themify-icons.css"/>
            <div className="main_content_iner overly_inner ">
                <div className="container-fluid p-0 ">
                    <div className="row">
                        <div className="col-12">
                            <div className="page_title_box d-flex flex-wrap align-items-center justify-content-between">
                                <div className="page_title_left d-flex align-items-center">
                                    {/*  có thể điền tiêu đề  */}
                                </div>
                                <div className="page_title_right">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="white_card card_height_100 mb_30 pt-4">
                                <div className="white_card_body">
                                    <div className="QA_section">
                                        <div className="white_box_tittle list_header">
                                            <h4>Danh sách tố cáo </h4>
                                            <div className="box_right d-flex lms_block">
                                                <div className="serach_field_2">
                                                    <div className="search_inner">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="search_field">
                                                                <input type="text" placeholder="Nhập username để tìm kiếm..." value={userParam} onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="QA_table mb_30">
                                            <table className="table lms_table_active ">
                                                <thead>
                                                <tr>
                                                    <th scope="col">id</th>
                                                    <th scope="col">Tài khoản người tố cáo</th>
                                                    <th scope="col">Tài khoản người bị tố cáo</th>
                                                    <th scope="col">Quyền người bị tố cáo</th>
                                                    <th scope="col">Nội dung tố cáo</th>
                                                    <th scope="col">Trạng thái tài khoản người bị tố cáo</th>
                                                    <th scope="col">Hoạt động</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currenAllListReport.length > 0 && currenAllListReport.map((item) => (
                                                    <tr>
                                                        <th scope="row">
                                                            <a href="#" className="question_content">
                                                                {item.id}
                                                            </a>
                                                        </th>
                                                        <td>{item.send.username}
                                                            <a href="#" className="action_btn" >
                                                                {" "}
                                                                <i className="ti-eye"/>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="https://demo.dashboardpack.com/cdn-cgi/l/email-protection"
                                                                className="__cf_email__"
                                                                data-cfemail="65120a170e51555c250208040c094b060a08"
                                                            >
                                                                {item.receiver.username}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#">{item.receiver.role.nameRole}</a>
                                                        </td>
                                                        <td>
                                                            <div >
                                                                {item.content}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {item.receiver.status.nameStatus === "active" &&
                                                            <a href="#" className="status_btn">
                                                                đã kích hoạt
                                                            </a>
                                                            }
                                                            {item.receiver.status.nameStatus === "block" &&
                                                                <a href="#" className="status_btn" style={{backgroundColor : 'red'}}>
                                                                    đã bị khóa
                                                                </a>
                                                            }
                                                            {item.receiver.status.nameStatus === "register" &&
                                                                <a href="#" className="status_btn" style={{backgroundColor : 'orange'}}>
                                                                    chờ xác nhận
                                                                </a>
                                                            }
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Phân trang*/}
                    <div className="pagination-container">
                        <ul className="pagination">
                            {currentPage === 1 ? (
                                <li className="disabled">
                                    <button>&lt; Trang trước</button>
                                </li>
                            ) : (
                                <li>
                                    <button onClick={() => paginate(currentPage - 1)}>&lt; Trang trước</button>
                                </li>
                            )}
                            {currentPage < Math.ceil(reportList.length / allListReport) ? (
                                <li>
                                    <button onClick={() => paginate(currentPage + 1)}>Trang tiếp theo &gt;</button>
                                </li>
                            ) : (
                                <li className="disabled">
                                    <button>Trang tiếp theo &gt;</button>
                                </li>
                            )}
                        </ul>
                    </div>
                    {/*    hêt phân trang*/}
                    {/*    <DetailCCDV/>*/}
                    {/*    <DetailCCDV data={detailCCDV}/>*/}
                </div>
            </div>

        </>
    )
}
export default AccountReport;