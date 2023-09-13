import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {cancelBill, completes, getAllBillByIdUser} from "../../service/BillsService";
import {checkToken} from "../../service/UserService";

const AllBillOfUser = () => {

    let idAccount = JSON.parse(localStorage.getItem("account")).id;

    const dispatch = useDispatch();

    const allBillOfUser = useSelector((state) => {
        return state.BillByAccount.BillByAccount.allBillByUser;
    });

    const stringComplete = useSelector((state) => {
        return state.BillByAccount.BillByAccount.completeString;
    });

    const stringCancelBill = useSelector((state) => {
        return state.BillByAccount.BillByAccount.cancelBill;
    });
    const [billDetail, setBillDetail] = useState(false);

    const [message, setMessage] = useState('')

    const [idBillComplete, setBillComplete] = useState(undefined);

    const [idBill, setIdBill] = useState(undefined);

    const [currentPage, setCurrentPage] = useState(1);

    const billsPerPage = 5;

    const indexOfLastBill = currentPage * billsPerPage;

    const indexOfFirstBill = indexOfLastBill - billsPerPage;

    const currentBills = allBillOfUser.slice(indexOfFirstBill, indexOfLastBill);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [modal, setModal] = useState(false);

    const [objects, setObjects] = useState(null);

    const openBillDetail = (object) => {
        setObjects(object);
        setBillDetail(true);
    };

    const closeBillDetail = () => {
        setBillDetail(false);
    };
    const openModal = (object) => {
        setObjects(object);
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };
    const  complete = (idBill) =>{
        setBillComplete(idBill)
    }
    useEffect(() =>{
        dispatch(completes(idBillComplete)).then(() =>{
            dispatch(checkToken());
            dispatch(getAllBillByIdUser(idAccount))

        })
    },[idBillComplete])

    const confirmCancelBill = (idBill) => {
        setIdBill(idBill);
        setModal(false);
    };

    useEffect(() => {
        dispatch(cancelBill({ idBill, idAccount, message })).then(() =>{
            dispatch(checkToken());
            dispatch(getAllBillByIdUser(idAccount));

        });
    },[idBill,idAccount,message]);

    return (
        <>

                        <h3>Lịch sử đơn thuê</h3>
                        <div className="transaction-table">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-condensed table-hover">
                                    <thead>
                                    <tr>
                                        <th>Nick name người CCDV</th>
                                        <th>Địa chỉ</th>
                                        <th>Số giờ thuê</th>
                                        <th>Ngày bắt đầu</th>
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
                                                <td>{item.accountCCDV.nickname}</td>
                                                <td>{item.address}</td>
                                                <td>{item.hour}</td>
                                                <td>{item.dateStart} - {item.dateEnd}</td>
                                                <td>{item.dateCreate}</td>
                                                <td>{item.total}</td>
                                                <td>
                                                    {item.status.nameStatus === "wait" ? "Chờ xác nhận" : item.status.nameStatus === "recevied" ? "Đã nhận" : item.status.nameStatus === "complete" ? "Hoàn thành" : "Đã hủy"}
                                                </td>
                                                <td style={{width: '150px'}}>
                                                    <button className="action-button detail-button"
                                                            style={{width: 'auto'}} onClick={() => openBillDetail(item)}>
                                                        xem chi tiết
                                                    </button>
                                                </td>
                                                <td className="actions" style={{width: '200px'}}>
                                                    {item.status.nameStatus === "wait" && (
                                                        <>
                                                            <button className="action-button cancel-button" onClick={() => openModal(item)}>
                                                                Hủy đơn
                                                            </button>
                                                        </>
                                                    )}
                                                    {item.status.nameStatus === "recevied" && (
                                                        <>
                                                            <button className="action-button cancel-button" onClick={() => openModal(item)}>
                                                                Hủy đơn
                                                            </button>
                                                            <button className="action-button confirm-button" onClick={() =>complete(item.id)}>
                                                                Xác nhận
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

                        {/* Hiển thị các nút phân trang */}
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
                                {currentPage < Math.ceil(allBillOfUser.length / billsPerPage) ? (
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


                        {allBillOfUser.length === 0 && (
                            <div className="text-center mt-20 col-md-12"><span>Không có dữ liệu</span></div>
                        )}


            {objects && modal &&  (
                <>
                    <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet"/>
                    <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet"/>
                    <div role="dialog">
                        <div className="fade modal-backdrop in"/>
                        <div role="dialog" tabIndex={-1} className="fade modal-donate in modal" style={{display: "block"}}>
                            <div className="modal-dialog">
                                <div className="modal-content" role="document">
                                    <div className="modal-header">
                                        <button type="button" className="close" onClick={closeModal}>
                                            <span aria-hidden="true">×</span>
                                            <span className="sr-only">Close</span>
                                        </button>
                                        <h4 className="modal-title">
                                            <span>Thuê player</span>
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Nick name nguời cung cấp dịch vụ :</td>
                                                <td>{objects.accountCCDV.nickname}</td>
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
                                                    <span className="price">{new Date(objects.dateEnd).toLocaleString()}</span>
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
                                                    <textarea required="không được để trống" placeholder="Lý do hủy" name="message"
                                                              maxLength={255} type="text" className="form-control" defaultValue={""}  value={message}
                                                              onChange={(e) => setMessage(e.target.value)}/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn-fill btn btn-danger" onClick={() => confirmCancelBill(objects.id)}>
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
                                                <td>{objects.accountUser.username}</td>
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
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
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
        </>
    );
}

export default AllBillOfUser;
