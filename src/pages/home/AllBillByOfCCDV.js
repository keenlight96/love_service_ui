import {useSelector} from "react-redux";

const AllBillByOfCCDV = () => {
    const allBillOfCCDV = useSelector(state => {
        console.log(state);
        return state.BillByCCDV.BillByCCDV.allBill;
    });
    return (
        <>
            <div className="bill">
                <h1>Danh sách đơn thuê</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Tên người thuê</th>
                        <th>Địa chỉ</th>
                        <th>Thời gian thuê (giờ)</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Ngày</th>
                        <th>Thành tiền</th>
                        <th>Trạng thái</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allBillOfCCDV && allBillOfCCDV.map((item) => (
                        <div key={item.id}>
                            {item.status.nameStatus === 'wait' && (
                                <tr>
                                    <td>{item.accountUser.nickName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.hour}</td>
                                    <td>{item.dateStart}</td>
                                    <td>{item.dateCreate}</td>
                                    <td>{item.total}</td>
                                    <td>{item.status.nameStatus}</td>
                                    <td className="actions">
                                        <button className="action-button confirm-button">Xác nhận</button>
                                    </td>
                                </tr>
                            )}
                            {item.status.nameStatus === 'complete' && (
                                <tr>
                                    <td>{item.accountUser.nickName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.hour}</td>
                                    <td>{item.dateStart}</td>
                                    <td>{item.dateCreate}</td>
                                    <td>{item.total}</td>
                                    <td>{item.status.nameStatus}</td>
                                    <td className="actions">
                                        <button className="action-button confirm-button">Nhận tiền</button>
                                    </td>
                                </tr>
                            )}
                            {item.status.nameStatus === 'reporting' && (
                                <tr>
                                    <td>{item.accountUser.nickName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.hour}</td>
                                    <td>{item.dateStart}</td>
                                    <td>{item.dateCreate}</td>
                                    <td>{item.total}</td>
                                    <td>{item.status.nameStatus}</td>
                                    <td className="actions">
                                        <button className="action-button confirm-button">Báo cáo</button>
                                    </td>
                                </tr>
                            )}
                        </div>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AllBillByOfCCDV;