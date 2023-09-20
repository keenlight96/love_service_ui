import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {
    cancelBill,
    completes,
    getAllBillByIdCCDV,
    getAllBillByIdUser,
    receivedBill,
    setCancelBill
} from "../../service/BillsService";
import {Link} from "react-router-dom";
import Bills from "./Bills";
import {checkToken} from "../../service/UserService";
import $ from "jquery";
import axios from "axios";
import Swal from "sweetalert2";

const AllBillByOfCCDV = () => {

    let idAccount = JSON.parse(localStorage.getItem("account")).id;

    const dispatch = useDispatch();

    const stompClient = useSelector(state => {
        return state.chatting.stompClient;
    })

    const allBillOfCCDV = useSelector((state) => {
        console.log(state.BillByAccount.BillByAccount.allBillByCCDV);
        return state.BillByAccount.BillByAccount.allBillByCCDV;
    });

    const stringReceivedBill = useSelector((state) => {
        return state.BillByAccount.BillByAccount.receivedBill;
    });

    const stringCancelBill = useSelector((state) => {
        return state.BillByAccount.BillByAccount.cancelBill;
    });

    const [idBillRecevied, setBillRecevied] = useState(undefined);

    const [idBill, setIdBill] = useState(undefined);

    const [currentPage, setCurrentPage] = useState(1);

    const billsPerPage = 5;

    const indexOfLastBill = currentPage * billsPerPage;

    const indexOfFirstBill = indexOfLastBill - billsPerPage;

    const currentBills = allBillOfCCDV.slice(indexOfFirstBill, indexOfLastBill);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [modal, setModal] = useState(false);
    const [billDetail, setBillDetail] = useState(false);
    const openBillDetail = (object) => {
        setObjects(object);
        setBillDetail(true);
    };

    const closeBillDetail = () => {
        setHover(false);
        setBillDetail(false);
    };

    const [objects, setObjects] = useState(null);

    const [message, setMessage] = useState('')
    const openModal = (object) => {
        setObjects(object);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const receivedBills = (idBill1) => {
        setBillRecevied(idBill1)
    }
    useEffect(() => {
        dispatch(receivedBill(idBillRecevied)).then(() => {
            dispatch(checkToken());
            dispatch(getAllBillByIdCCDV(idAccount));
            sendNotification(idBillRecevied);
        })
    }, [idBillRecevied]);

    const confirmCancelBill = (idBill1) => {
        setIdBill(idBill1);
        setModal(false);
    };

    useEffect(() => {
        dispatch(cancelBill({idBill, idAccount, message})).then(() => {
            dispatch(checkToken());
            dispatch(getAllBillByIdCCDV(idAccount));
            sendNotification(idBill);
        });
    }, [idBill, idAccount, message]);

    const sendNotification = (billId) => {
        try {
            if (stompClient != null) {
                let message = {
                    "type": "notification",
                    "subtype": billId
                }
                stompClient.send("/gkz/hello", {}, JSON.stringify(message));
            }
        } catch (e) {
            console.log("Send notification error:");
            console.log(e);
        }
    }
    const sendReport = () => {
        const report = {
            date: new Date(),
            send: {
                id: objects.accountUser.id
            },
            receiver: {
                id: objects.accountCCDV.id
            },
            content: $("[name='contentReport']").val(),
            bill: {
                id: objects.id
            }
        }
        axios.post("http://localhost:8080/reports/sendReport", report, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}})
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: data.data
                })
            }).catch(e => {
            console.log(e)
        })
    }
    const [hover, setHover] = useState(false);
    const clickReport = () => {
        setHover(!hover)
    }
    return (
        <>

            <h3>Lịch sử đơn thuê</h3>
            <div className="transaction-table">
                <div className="table-responsive">
                    {/* {allBillOfCCDV && SON.parse(localStorage.getItem("account")).role.nameRole === "ROLE_CCDV" && */}
                    <table className="table table-striped table-bordered table-condensed table-hover">
                        <thead>
                        <tr>
                            <th>Tên người thuê</th>
                            <th>Địa chỉ</th>
                            <th>Số giờ thuê</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Ngày tạo đơn</th>
                            <th>Tổng tiền</th>
                            <th>Tình trạng</th>
                            <th>Xem chi tiết</th>
                            <th>Hoạt động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentBills.length > 0 &&
                            currentBills.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.accountUser.nickname}</td>
                                    <td>{item.address}</td>
                                    <td>{item.hour}</td>
                                    <td>
                                        {new Date(item.dateStart).toLocaleString()}
                                    </td>
                                    <td>
                                        {new Date(item.dateEnd).toLocaleString()}
                                    </td>
                                    <td>{new Date(item.dateCreate).toLocaleString()}</td>
                                    <td>{item.total}</td>
                                    <td>
                                        {item.status.nameStatus === "wait" ? "Chờ xác nhận" : item.status.nameStatus === "recevied" ? "Đã nhận" : item.status.nameStatus === "complete" ? "Hoàn thành" : "Đã hủy"}
                                    </td>
                                    <td style={{width: "150px"}}>
                                        <button className="action-button detail-button"
                                                style={{width: "auto"}}
                                                onClick={() => openBillDetail(item)}>
                                            xem chi tiết
                                        </button>
                                    </td>
                                    <td className="actions" style={{width: "200px"}}>
                                        {item.status.nameStatus === "wait" && (
                                            <>
                                                <button type="button"
                                                        className="action-button cancel-button"
                                                        onClick={() => openModal(item)}>
                                                    Hủy đơn
                                                </button>
                                                <button className="action-button confirm-button"
                                                        onClick={() => receivedBills(item.id)}>
                                                    Xác nhận
                                                </button>
                                            </>
                                        )}
                                        {item.status.nameStatus === "recevied" && (
                                            <>
                                                <button className="action-button cancel-button"
                                                        onClick={() => openModal(item)}>
                                                    Hủy đơn
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                    {currentPage < Math.ceil(allBillOfCCDV.length / billsPerPage) ? (
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

            {allBillOfCCDV.length == 0 && (
                <div className="text-center mt-20 col-md-12">
                    <span>Không có dữ liệu</span>
                </div>
            )}
            {objects && modal && (
                <>
                    <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet"/>
                    <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet"/>
                    <div role="dialog">
                        <div className="fade modal-backdrop in"/>
                        <div role="dialog" tabIndex={-1} className="fade modal-donate in modal"
                             style={{display: "block"}}>
                            <div className="modal-dialog">
                                <div className="modal-content" role="document">
                                    <div className="modal-header">
                                        <button type="button" className="close" onClick={closeModal}>
                                            <span aria-hidden="true">×</span>
                                            <span className="sr-only">Close</span>
                                        </button>
                                        <h4 className="modal-title">
                                            <span>Hủy đơn</span>
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Nick name ngừoi thuê:</td>
                                                <td>{objects.accountUser.nickname}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Số giờ thuê</span>:
                                                </td>
                                                <td>{objects.hour}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Ngày tạo đơn </span>:
                                                </td>
                                                <td>
                                                    <span
                                                        className="price">{new Date(objects.dateEnd).toLocaleString()}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Tổng tiền</span>:
                                                </td>
                                                <td>
                                                    <span className="price">{objects.total}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <textarea required="không được để trống" placeholder="Lý do hủy"
                                                              name="message"
                                                              maxLength={255} type="text" className="form-control"
                                                              defaultValue={""} value={message}
                                                              onChange={(e) => setMessage(e.target.value)}/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn-fill btn btn-danger"
                                                onClick={() => confirmCancelBill(objects.id)}>
                                            <span>Xác nhận</span>
                                        </button>
                                        <button type="button" className="btn btn-default" onClick={closeModal}>
                                            <span>Đóng</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/*modal bill chi tiết*/}
            {objects && billDetail && (
                <>
                    <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet"/>
                    <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet"/>
                    <div role="dialog">
                        <div className="fade modal-backdrop in"/>
                        <div role="dialog" tabIndex={-1} className="fade modal-donate in modal"
                             style={{display: "block"}}>
                            <div className="modal-dialog">
                                <div className="modal-content" role="document">
                                    <div className="modal-header">
                                        <button type="button" className="close" onClick={closeBillDetail}>
                                            <span aria-hidden="true">×</span>
                                            <span className="sr-only">Close</span>
                                        </button>
                                        <h4 className="modal-title">
                                            <span>Chi tiết hóa đơn</span>
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Nick name ngừoi thuê:</td>
                                                <td>{objects.accountUser.nickname}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Số giờ thuê</span>:
                                                </td>
                                                <td>{objects.hour}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Ngày tạo đơn </span>:
                                                </td>
                                                <td>
                                                <span
                                                    className="price">{new Date(objects.dateCreate).toLocaleString()}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Tổng tiền</span>:
                                                </td>
                                                <td>
                                                    <span className="price">{objects.total}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Ngày Bắt đầu </span>:
                                                </td>
                                                <td>
                                                <span
                                                    className="price">{new Date(objects.dateStart).toLocaleString()}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Ngày kết thúc </span>:
                                                </td>
                                                <td>
                                                <span
                                                    className="price">{new Date(objects.dateEnd).toLocaleString()}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Lời nhắn </span>:
                                                </td>
                                                <td>
                                                    <span className="price">{objects.firstMessage}</span>
                                                </td>
                                            </tr>
                                            {(
                                                (objects.status.nameStatus === "cancel from wait by user" || objects.status.nameStatus === "cancel from recevied by user") && (
                                                    <tr>
                                                        <td>
                                                            <span>Lý do người thuê hủy </span>:
                                                        </td>
                                                        <td>
                                                            <span className="price">{objects.userMessage}</span>
                                                        </td>
                                                    </tr>
                                                )
                                            ) || (
                                                (objects.status.nameStatus === "cancel from wait by ccdv" || objects.status.nameStatus === "cancel from recevied by ccdv") && (
                                                    <tr>
                                                        <td>
                                                            <span>Lý do người CCDV hủy </span>:
                                                        </td>
                                                        <td>
                                                            <span className="price">{objects.ccdvMessage}</span>
                                                        </td>
                                                    </tr>
                                                )
                                            )}

                                            <tr>
                                                <td>
                                                    <span>Nhận xét admin nếu có </span>:
                                                </td>
                                                <td>
                                                    <span className="price">{objects.adminMessage}</span>
                                                </td>
                                            </tr>
                                            {hover ?
                                                <>
                                                    <tr>
                                                        <td><span>Nội dung báo cáo </span>:</td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td colSpan={2}>
                                                    <textarea required="không được để trống"
                                                              placeholder=" Bạn muốn báo cáo về người CCDV điều gì "
                                                              name="contentReport"
                                                              maxLength={255} type="text" className="form-control"
                                                    />
                                                        </td>
                                                    </tr>
                                                </>
                                                : <></>}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        {hover?<> <button className="btn btn-success" onClick={sendReport}><span>Gửi Báo Cáo</span>
                                        </button></>: <button className="btn btn-danger" onClick={clickReport}><span>Báo Cáo</span>
                                        </button>}
                                        <button type="button" className="btn btn-default" onClick={closeBillDetail}>
                                            <span>Đóng</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/*{*/}
            {/*    stringCancelBill ?*/}
            {/*        () => {*/}
            {/*            console.log("-----------------------")*/}
            {/*            alert(stringCancelBill);*/}
            {/*            dispatch(setCancelBill(""));*/}
            {/*        }*/}
            {/*        :*/}
            {/*        <></>*/}
            {/*}*/}
        </>
    );
};

export default AllBillByOfCCDV;
