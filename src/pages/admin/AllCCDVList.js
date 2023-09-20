import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {activeAccount, blockAccount, getAccountCCDVFilter, getAccountUserFilter} from "../../service/AdminService";
import DetailCCDV from "./DetailCCDV";
import Swal from "sweetalert2";
import customAxios from "../../service/api";
import {addChatReceivers, getChatWithReceiver, setActiveReceiver, setMsgBoxToggle} from "../../service/ChattingService";

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
            dispatch(getAccountCCDVFilter(filter));
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

    const addUserChat = (username) => {
        const account = customAxios.get("userDetail/"+ username)
            .then(r => {
                if (r.data.account.id != storeUser.account.id) {
                    let newReceiver = {
                        id: r.data.account.id,
                        username: r.data.account.username,
                        nickname: r.data.account.nickname,
                        avatar: r.data.account.avatar,
                        role: {
                            id: r.data.account.role.id,
                            nameRole: r.data.account.role.nameRole,
                        },
                        status: {
                            id: r.data.account.status.id,
                            nameStatus: r.data.account.status.nameStatus,
                        },
                        isActive: r.data.account.isActive
                    }
                    dispatch(addChatReceivers(newReceiver));
                    dispatch(setActiveReceiver(newReceiver));
                    try {
                        dispatch(getChatWithReceiver(newReceiver.id))
                    } catch (e) {
                    }

                    if (!msgBoxToggle) {
                        dispatch(setMsgBoxToggle());
                    }
                }
            })
            .catch(reason => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Tài khoản không khả dụng.',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const storeUser = useSelector(state => {
        return state.user.user.current;
    });
    const msgBoxToggle = useSelector(state => {
        return state.chatting.chatting.msgBoxToggle;
    });

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
                                                        <td onClick={() => {addUserChat(item.account.username)}} style={{cursor: "pointer"}}>{item.account.nickname}</td>
                                                        <td>{item.account.username}
                                                            <a href="#" className="action_btn" onClick={()=>detail(item)}>
                                                                {" "}
                                                                <i className="ti-eye"/>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="__cf_email__">
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
                                                                <a href="#" className="status_btn" style={{backgroundColor :'red',width:'127px'}}>
                                                                    Tài khoản bị khóa
                                                                </a>
                                                            }
                                                            {item.account.status.nameStatus === "active" &&
                                                                <a href="#" className="status_btn" style={{backgroundColor :'#05d34e',width:'127px'}}>
                                                                    Đã khích hoạt
                                                                </a>
                                                            }
                                                            {item.account.status.nameStatus === "register" &&
                                                                <a href="#" className="status_btn" style={{backgroundColor :'orange',width:'127px'}}>
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