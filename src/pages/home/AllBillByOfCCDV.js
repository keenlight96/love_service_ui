import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAllBillByIdCCDV} from "../../service/BillsService";

const AllBillByOfCCDV = () => {
    const dispatch = useDispatch();
    let id = JSON.parse(localStorage.getItem("account")).id;
    useEffect(() => {
        dispatch(getAllBillByIdCCDV(id));
    }, []);
    const allBillOfCCDV = useSelector(state => {
        return state.BillByCCDV.BillByCCDV.allBill;
    });
    console.log()
    console.log(allBillOfCCDV);
    return (

        <>
            {/*<link rel="stylesheet" type="text/css" href="../resources/8.97b85fe3.chunk.css"/>*/}
            <div class="setting__main row" style={{marginTop: '70px'}}>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="aside">
                        <h3>Lịch sử đơn thuê</h3>
                        <div className="transaction-table">
                            <div className="table-responsive">
                                {/*{allBillOfCCDV && SON.parse(localStorage.getItem("account")).role.nameRole === "ROLE_CCDV" &&*/}
                                <table className="table table-striped table-bordered table-condensed table-hover">
                                    <thead>
                                    <tr>
                                        <th>Tên người thuê</th>
                                        <th>Địa chỉ</th>
                                        <th>Số giờ thuê</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày tạo đơn</th>
                                        <th>Tổng tiền</th>
                                        <th>Tình trạng</th>
                                        <th>Hoạt động</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {allBillOfCCDV.length > 0 &&
                                        allBillOfCCDV.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.accountUser.nickname}</td>
                                                <td>{item.address}</td>
                                                <td>{item.hour}</td>
                                                <td>{item.dateStart} - {item.dateEnd}</td>
                                                <td>{item.dateCreate}</td>
                                                <td>{item.total}</td>
                                                <td>
                                                    {item.status.nameStatus === "wait" ? "Chờ xác nhận" : item.status.nameStatus === "recevied" ? "Đã nhận" : item.status.nameStatus === "complete" ? "Hoàn thành" : "Đã hủy"}
                                                </td>
                                                <td className="actions">
                                                    {item.status.nameStatus === "wait" && (
                                                        <>
                                                            <button className="action-button cancel-button">
                                                                Hủy đơn
                                                            </button>
                                                            <button className="action-button confirm-button">
                                                                Xác nhận
                                                            </button>
                                                            <button className="action-button detail-button">
                                                                xem chi tiết
                                                            </button>
                                                        </>
                                                    )}
                                                    {item.status.nameStatus === "recevied" && (
                                                        <>
                                                            <button className="action-button cancel-button">
                                                                Hủy đơn
                                                            </button>
                                                            <button className="action-button detail-button">
                                                                xem chi tiết
                                                            </button>
                                                        </>
                                                    )}
                                                    {item.status.nameStatus === "complete" && (
                                                        <button className="action-button detail-button">
                                                            xem chi tiết
                                                        </button>

                                                    )}
                                                    {item.status.nameStatus != "wait" && item.status.nameStatus != "recevied" && item.status.nameStatus != "complete" && (
                                                        <button className="action-button detail-button">
                                                            xem chi tiết
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/*}*/}
                            </div>
                        </div>
                        {allBillOfCCDV.length == 0 &&
                            <div className="text-center mt-20 col-md-12"><span>Không có dữ liệu</span></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllBillByOfCCDV;