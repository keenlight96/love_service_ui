import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AdminSlice from "../../redux/AdminSlice";
import {blockAccount, getAllCCDV, getAllUser} from "../../service/AdminService";

const NewCCDVList =() =>{
    const dispatch = useDispatch();
    const allCCDVAc = useSelector((state) => {
        console.log(state.admin.admin.allCCDV);
        return state.admin.admin.allCCDV;
    });
    const [account, setAccount] =useState({});
    const blockAccountUser = (object) => {
        setAccount(object);
    };
    useEffect(() =>{
        dispatch(blockAccount(account)).then(() =>{
            dispatch(getAllCCDV());
        })
    },[account]);

    const [currentPage, setCurrentPage] = useState(1);

    const allAccountCCDVAc = 5;

    const indexOfLastCCDV = currentPage * allAccountCCDVAc;

    const indexOfFirstCCDV = indexOfLastCCDV - allAccountCCDVAc;

    const currenUserAc = allCCDVAc.slice(indexOfFirstCCDV, indexOfLastCCDV);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <><link rel="stylesheet" href="/template_admin/css/css_sidebar.css"/>
            <link rel="stylesheet" href="/template_admin/vendors/themefy_icon/themify-icons.css" />
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
                                            <h4>Danh sách người CCDV mới nhất </h4>
                                            <div className="box_right d-flex lms_block">
                                                <div className="serach_field_2">
                                                    <div className="search_inner">
                                                        <form active="#">
                                                            <div className="search_field">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search content here..."
                                                                />
                                                            </div>
                                                            <button type="submit">
                                                                <i className="ti-search" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="add_button ms-2">
                                                    <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#addcategory"
                                                        className="btn_1"
                                                    >
                                                        search
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="QA_table mb_30">
                                            <table className="table lms_table_active ">
                                                <thead>
                                                <tr>
                                                    <th scope="col">id</th>
                                                    <th scope="col">Biệt danh</th>
                                                    <th scope="col">Tài khoản</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Vai trò</th>
                                                    <th scope="col">Trạng thái</th>
                                                    <th scope="col">Hoạt động</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currenUserAc.length>0 &&  currenUserAc.map((item) =>(
                                                    <tr>
                                                        <th scope="row">
                                                            <a href="#" className="question_content">
                                                                {item.id}
                                                            </a>
                                                        </th>
                                                        <td>{item.nickname}</td>
                                                        <td>{item.username}</td>
                                                        <td>
                                                            <a
                                                                href="https://demo.dashboardpack.com/cdn-cgi/l/email-protection"
                                                                className="__cf_email__"
                                                                data-cfemail="65120a170e51555c250208040c094b060a08"
                                                            >
                                                                {item.email}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            {item.role.nameRole === "ROLE_CCDV" &&
                                                            <a href="#">Người CCDV</a>
                                                            }
                                                        </td>
                                                        <td>
                                                            <a href="#" className="status_btn">
                                                                {item.status.nameStatus}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <div className="action_btns d-flex"  onClick={() => blockAccountUser(item.id)}>
                                                                <a href="#" className="action_btn">
                                                                    {" "}
                                                                    <i className="ti-unlock" />
                                                                </a>
                                                            </div>
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
                            {currentPage < Math.ceil(allCCDVAc.length / allAccountCCDVAc) ? (
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
                </div>
            </div>
        </>
    )
}
export default NewCCDVList;