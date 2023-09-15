import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const ListBill =() =>{
    const dispatch = useDispatch();

    const allBill = useSelector((state) => {
        console.log(state.admin.admin.allBill);
        return state.admin.admin.allBill;
    });
    const [objects, setObjects] = useState(null);
    // phân trang
    const [currentPage, setCurrentPage] = useState(1);

    const billsPerPage = 5;

    const indexOfLastBill = currentPage * billsPerPage;

    const indexOfFirstBill = indexOfLastBill - billsPerPage;

    const currentBills = allBill.slice(indexOfFirstBill, indexOfLastBill);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // kết thúc phân trang
    const [billDetail, setBillDetail] = useState(false);
    const [modal, setModal] = useState(false);
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
    return(
        <>
            <h3>Tất cả đơn thuê</h3>
            <div className="transaction-table">
                <div className="table-responsive">
                    {/* {allBill && SON.parse(localStorage.getItem("account")).role.nameRole === "ROLE_CCDV" && */}
                    <table className="table table-striped table-bordered table-condensed table-hover">
                        <thead>
                        <tr>
                            <th>Tên tài khoản người thuê</th>
                            <th>Tên tài khoản người thuê</th>
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
                                    <td>{item.accountUser.username}</td>
                                    <td>{item.accountCCDV.username}</td>
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
                                    <td>
                                        <button className="action-button detail-button"
                                                style={{width: "auto", backgroundColor: "red"}}>
                                            Nhận xét đơn
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*phân trang*/}
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
                    {currentPage < Math.ceil(allBill.length / billsPerPage) ? (
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
            {/*hết phân trang*/}
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
                                                <td>Tên tài khoản nguời thuê:</td>
                                                <td>{objects.accountUser.username}</td>
                                            </tr>
                                            <tr>
                                                <td>Tên tài khoản CCDV:</td>
                                                <td>{objects.accountCCDV.username}</td>
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
    )
}
export default ListBill;