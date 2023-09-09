import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {completes} from "../../service/BillsService";

const AllBillOfUser = () => {
    const dispatch = useDispatch();
    const allBillOfUser = useSelector((state) => {
        return state.BillByAccount.BillByAccount.allBillByUser;
    });
    const stringComplete = useSelector((state) => {
        return state.BillByAccount.BillByAccount.completeString;
    });


    const [currentPage, setCurrentPage] = useState(1);
    const billsPerPage = 5;
    const indexOfLastBill = currentPage * billsPerPage;
    const indexOfFirstBill = indexOfLastBill - billsPerPage;
    const currentBills = allBillOfUser.slice(indexOfFirstBill, indexOfLastBill);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [modal, setModal] = useState(false);
    const [objects, setObjects] = useState(null);
    const [idBill, setBill] = useState(undefined);
    const openModal = (object) => {
        setObjects(object);
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };
    const  complete = (idBill) =>{
        setBill(idBill)
    }
    useEffect(() =>{
        dispatch(completes(idBill))
    },[idBill])
    return (
        <>
            <div class="setting__main row" style={{ marginTop: '70px' }}>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="aside">
                        <h3>Lịch sử đơn thuê</h3>
                        <div className="transaction-table">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-condensed table-hover">
                                    <thead>
                                    <tr>
                                        <th>Tên người CCDV </th>
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
                                                            style={{width: 'auto'}}>
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
                    </div>
                </div>
            </div>
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
                                                <td>Người cung cấp dịch vụ :</td>
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
                                                    <textarea required="không được để trống" placeholder="Lý do hủy" name="message" maxLength={255} type="text" className="form-control" defaultValue={""}/>
                                                    <p className="err-message"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn-fill btn btn-danger">
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
        </>
    );
}

export default AllBillOfUser;
