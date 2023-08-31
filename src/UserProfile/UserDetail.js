
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function UserDetail() {
    const [userDetail, setUserDetail] = useState([]);
    const [image, setImage] = useState([]);
    const [interest,setInterest] = useState([])
    const [bill, setBill] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/userDetail/` + id)
            .then(response => {
                setUserDetail(response.data.userProfile);
                setImage(response.data.image)
                setInterest(response.data.interests)
                setBill(response.data.bills)
                console.log(response.data.interests)
                console.log(response.data.bills);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div className="container">
            <h2>Chi Tiết Người CCDV</h2>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <th>Tên:</th>
                    <td>{userDetail.firstName} {userDetail.lastName}</td>
                </tr>
                <tr>
                    <th>Năm sinh:</th>
                    <td>{userDetail.birthday}</td>
                </tr>
                <tr>
                    <th>Giới tính:</th>
                    <td>{userDetail.gender}</td>
                </tr>
                <tr>
                    <th>Thành phố:</th>
                    <td>{userDetail.address}</td>
                </tr>
                <tr>
                    <th>Quốc tịch:</th>
                    <td>{userDetail.country}</td>
                </tr>
                <tr>
                    <th>Ảnh đại diện:</th>
                    <th>{userDetail.account && <img src={ userDetail.account.avatar} alt="Avatar" style={{ width: "50px", height:"50px"}}/>}</th>
                </tr>
                <tr>
                    <th>Ảnh chân dung:</th>
                    <td>
                        {image && image.map(image => (
                            <img
                                key={image.id}
                                src={image.img}
                                alt={`Ảnh chân dung ${image.id}`}
                                style={{ width: "50px", height: "50px" }}
                            />
                        ))}
                    </td>
                </tr>

                <tr>
                    <th>Chiều cao:</th>
                    <td>{userDetail.height}</td>
                </tr>
                <tr>
                    <th>Cân nặng:</th>
                    <td>{userDetail.weight}</td>
                </tr>
                <tr>
                    <th>Sở thích:</th>
                    <td>{interest.length > 0 ? interest[0].interest: 'no'}</td>
                </tr>
                <tr>
                    <th>Mô tả về bản thân:</th>
                    <td>{userDetail.describes}</td>
                </tr>
                <tr>
                    <th>Yêu cầu với người thuê:</th>
                    <td>{userDetail.basicRequest}</td>
                </tr>
                <tr>
                    <th>Facebook (link):</th>
                    <td><a href={userDetail.facebookLink} target="_blank" rel="noopener noreferrer">{userDetail.facebookLink}</a></td>
                </tr>
                <tr>
                    <th>Ngày tham gia:</th>
                    <td>{userDetail.dateCreate}</td>
                </tr>
                <tr>
                    <th>Số lượt thuê:</th>
                    <td>{bill.length}</td>
                </tr>
                </tbody>
            </table>
            <button onClick={() => navigate("/")}>Quay Lại</button>

        </div>

    );
}

export default UserDetail;