import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {activeAccount, blockAccount, getAccountCCDVFilter, getAccountUserFilter} from "../../service/AdminService";
import DetailCCDV from "./DetailCCDV";

const AllCCDVList = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({
        username: "",
        status: ""
    })
    const [username, setUsername] = useState('')

    const handleInputChange = (e, field) => {
        const newValue = e.target.value.trim();
        setFilter({
            ...filter,
            [field]: newValue
        });
    };
    const activeAc = (str) => {
        setUsername(str);
    }
    const allCCDVFilter = useSelector((state) => {
        return state.admin.admin.allCCDVFilter;
    });
    const [account, setAccount] = useState({});
    const blockAc = (object) => {
        setAccount(object);
    };
    useEffect(() => {
        dispatch(blockAccount(account)).then(() => {
            dispatch(getAccountCCDVFilter(filter));
        })
    }, [account]);

    useEffect(() => {
        dispatch(getAccountCCDVFilter(filter));
    }, [filter])

    useEffect(() => {
        dispatch(activeAccount(username)).then(() => {
            dispatch(getAccountCCDVFilter(filter))
        })
    }, [username])
    const [currentPage, setCurrentPage] = useState(1);

    const allAccountCCDV = 5;

    const indexOfLastAllCCDV = currentPage * allAccountCCDV;

    const indexOfFirstAlLCCDV = indexOfLastAllCCDV - allAccountCCDV;

    const currenAllUser = allCCDVFilter.slice(indexOfFirstAlLCCDV, indexOfLastAllCCDV);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [detailCCDV, setDetailCCDV] = useState({
        account:{},
        userProfile:{}
    });
    const detail = (userCCDV) => {
        setDetailCCDV(userCCDV);
        setShowDetail(!showDetail);
    }
    const [showDetail, setShowDetail] = useState(false);

    // const toggleDetail = () => {
    //     setShowDetail(!showDetail);
    // };

    return (
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
                                            <h4>Danh sách nguời CCDV </h4>
                                            <div className="box_right d-flex lms_block">
                                                <div className="serach_field_2">
                                                    <div className="search_inner">
                                                        <form active="#" onSubmit={(e) => e.preventDefault()}>
                                                            <div className="search_field">
                                                                <input type="text"
                                                                       placeholder="Nhập username để tìm kiếm..."
                                                                       value={filter.username}
                                                                       onChange={(e) => handleInputChange(e, 'username')}/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <select className="form-control gender " style={{width: 'auto'}}
                                                        className="form-control gender" value={filter.status}
                                                        onChange={(e) => handleInputChange(e, 'status')}>
                                                    <option value="">Trạng thái</option>
                                                    <option value="active">Đã kích hoạt</option>
                                                    <option value="register">Chờ kích hoạt</option>
                                                    <option value="block">Khóa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="QA_table mb_30">
                                            <table className="table lms_table_active ">
                                                <thead>
                                                <tr>
                                                    <th scope="col" style={{fontSize :'14px', fontWeight: 'bold'}}>id</th>
                                                    <th scope="col" style={{fontSize :'14px', fontWeight: 'bold'}}>Biệt danh</th>
                                                    <th scope="col" style={{fontSize :'14px', fontWeight: 'bold'}}>Tên tài khoản</th>
                                                    <th scope="col" style={{fontSize :'14px', fontWeight: 'bold'}}>Email</th>
                                                    <th scope="col" style={{fontSize :'14px', fontWeight: 'bold'}}>Vai trò</th>
                                                    <th scope="col" style={{fontSize :'14px', fontWeight: 'bold'}}>Trạng thái</th>
                                                    <th scope="col" style={{fontSize :'14px', fontWeight: 'bold'}}>Hoạt động</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currenAllUser.length > 0 && currenAllUser.map((item) => (
                                                    <tr>
                                                        <th scope="row">
                                                            <a href="#" className="question_content">
                                                                {item.account.id}
                                                            </a>
                                                        </th>
                                                        <td>{item.account.nickname}</td>
                                                        <td>{item.account.username}
                                                            <a href="#" className="action_btn" onClick={()=>detail(item)}>
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
                                                                {item.account.email}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            {item.account.role.nameRole === "ROLE_CCDV" &&
                                                            <a href="#">Người CCDV</a>
                                                            }
                                                        </td>
                                                        <td>
                                                            {item.account.status.nameStatus === "block" &&
                                                                <a href="#" className="status_btn" style={{backgroundColor :'red'}}>
                                                                    Tài khoản bị khóa
                                                                </a>
                                                            }
                                                            {item.account.status.nameStatus === "active" &&
                                                                <a href="#" className="status_btn" style={{backgroundColor :'#05d34e'}}>
                                                                    Đã khích hoạt
                                                                </a>
                                                            }
                                                            {item.account.status.nameStatus === "register" &&
                                                                <a href="#" className="status_btn" style={{backgroundColor :'orange'}}>
                                                                    Chờ xác nhận
                                                                </a>
                                                            }
                                                        </td>
                                                        <td>
                                                            {(item.account.status.nameStatus === "active" || item.account.status.nameStatus === "emailverify") && (
                                                                <>
                                                                    <div className="action_btns d-flex"
                                                                         onClick={() => blockAc(item.account.id)}>
                                                                        <a href="#" className="action_btn">
                                                                            {" "}
                                                                            <i className="ti-unlock"/>
                                                                        </a>
                                                                    </div>
                                                                </>
                                                            )}
                                                            {item.account.status.nameStatus === "register" && (
                                                                <>
                                                                    <div className="action_btns d-flex">
                                                                        <a href="#" className="action_btn"
                                                                           onClick={() => blockAc(item.account.id)}>
                                                                            {" "}
                                                                            <i className="ti-unlock"/>
                                                                        </a>
                                                                        <button href="#" className="status_btn"
                                                                                style={{marginLeft: '10px'}}
                                                                                onClick={() => activeAc(item.account.username)}>
                                                                            Active
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            )}

                                                            {item.account.status.nameStatus === "block" && (
                                                                <>
                                                                    <div className="action_btns d-flex">
                                                                        <a href="#" className="action_btn" onClick={() => activeAc(item.account.username)}>
                                                                            {" "}
                                                                            <i className="ti-lock"/>
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
                            {currentPage < Math.ceil(allCCDVFilter.length / allAccountCCDV) ? (
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
                {showDetail && detailCCDV.account.id !== undefined && detailCCDV.userProfile.id  !== undefined &&  <DetailCCDV data={detailCCDV} />}
            </div>

        </>
    )
}
export default AllCCDVList;