import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {blockAccount, getAccountUserFilter} from "../../service/AdminService";

const AllUserList =() =>{
    const dispatch = useDispatch();
    const [filter,setFilter] =useState({
        username: "",
        status: ""
    })

    const handleInputChange = (e, field) => {
        const newValue = e.target.value.trim();
        setFilter({
            ...filter,
            [field]: newValue
        });
    };
    const allUserFilter = useSelector((state) => {
        console.log(state.admin.admin.allUserFilter);
        return state.admin.admin.allUserFilter;
    });
    const [account, setAccount] =useState({});
    const blockAc = (object) => {
        setAccount(object);
        console.log(account);
    };
    useEffect(() =>{
        dispatch(blockAccount(account)).then(() =>{
            dispatch(getAccountUserFilter(filter));
        })
    },[account]);
    useEffect(() =>{
        dispatch(getAccountUserFilter(filter));
    },[filter])
    const [currentPage, setCurrentPage] = useState(1);

    const allAccountUser = 5;

    const indexOfLastAllUser = currentPage * allAccountUser;

    const indexOfFirstAllUser = indexOfLastAllUser - allAccountUser;

    const currenAllUser = allUserFilter.slice(indexOfFirstAllUser, indexOfLastAllUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <>
            <link rel="stylesheet" href="/template_admin/css/css_sidebar.css"/>
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
                                            <h4>Danh sách người dùng </h4>
                                                <select className="form-control gender " style={{width: 'auto'}} className="form-control gender" value={filter.status} onChange={(e) => handleInputChange(e, 'status')}>
                                                    <option value="">Trạng thái</option>
                                                    <option value="active">Active</option>
                                                    <option value="register">Register</option>
                                                    <option value="block">Block</option>
                                                </select>
                                            <div className="box_right d-flex lms_block">
                                                <div className="serach_field_2">
                                                    <div className="search_inner">
                                                        <form active="#" onSubmit={(e) => e.preventDefault()}>
                                                            <div className="search_field">
                                                                <input type="text" placeholder="Nhập username để tìm kiếm..."  value={filter.username}
                                                                       onChange={(e) => handleInputChange(e, 'username')}/>
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
                                                    <th scope="col">Nickname</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currenAllUser.length>0 &&  currenAllUser.map((item) =>(
                                                    <tr>
                                                        <th scope="row">
                                                            <a href="#" className="question_content">
                                                                {item.account.id}
                                                            </a>
                                                        </th>
                                                        <td>{item.account.nickname}</td>
                                                        <td>{item.account.username}</td>
                                                        <td>
                                                            <a
                                                                href="https://demo.dashboardpack.com/cdn-cgi/l/email-protection"
                                                                className="__cf_email__"
                                                                data-cfemail="65120a170e51555c250208040c094b060a08"
                                                            >
                                                                {item.account.email}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#">{item.account.role.nameRole}</a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="status_btn">
                                                                {item.account.status.nameStatus}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            {( item.account.status.nameStatus === "active" || item.account.status.nameStatus === "register" || item.account.status.nameStatus === "emailverify")   &&(
                                                           <>
                                                            <div className="action_btns d-flex" onClick={() => blockAc(item.account.id)}>
                                                                <a href="#" className="action_btn" >
                                                                    {" "}
                                                                    <i className="ti-unlock" />
                                                                </a>
                                                            </div>
                                                           </>
                                                            )}

                                                            { item.account.status.nameStatus === "block" &&(
                                                                <>
                                                                <div className="action_btns d-flex"  >
                                                                    <a href="#" className="action_btn">
                                                                        {" "}
                                                                        <i className="ti-lock" />
                                                                    </a>
                                                                </div>
                                                                </>
                                                            )}
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
                            {currentPage < Math.ceil(allUserFilter.length / allAccountUser) ? (
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
export default AllUserList;