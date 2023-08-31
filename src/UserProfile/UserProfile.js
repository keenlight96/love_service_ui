import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function UserProfile(){
    const [userDetail, setUserDetail] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/userDetail")
            .then(data => {
                setUserDetail(data.data);
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);
    return(
    <div class="container">
        <h2>Danh Sách Người CCDV</h2>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>lastName</th>
                <th>firstName</th>
                <th>birthday</th>
                <th>country</th>
                <th>address</th>
                <th>balance</th>
                <th>phoneNumber</th>
                <th>price</th>
                <th>idCard</th>
                <th>gender</th>
                <th>height</th>
                <th>width</th>
                <th>basicRequest</th>
                <th>facebookLink</th>
                <th>isVIP</th>
                <th>isActive</th>
                <th>account</th>
                <th>zone</th>
                <th>supply</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                userDetail.map((item)=>{
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.lastName}</td>
                            <Link to={"/userDetail/" + item.id}>
                            <td>{item.firstName}</td>
                            </Link>
                            <td>{item.birthday}</td>
                            <td>{item.country}</td>
                            <td>{item.address}</td>
                            <td>{item.balance}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.price}</td>
                            <td>{item.idCard}</td>
                            <td>{item.gender}</td>
                            <td>{item.height}</td>
                            <td>{item.width}</td>
                            <td>{item.basicRequest}</td>
                            <td>{item.facebookLink}</td>
                            <td>{item.isVIP}</td>
                            <td>{item.isActive}</td>
                            <td>{item.account.id}</td>
                            <td>{item.zone.id}</td>
                            <td>{item.supply.id}</td>
                            <td>
                                    <button type="button" className="btn btn-warning">Sửa</button>
                                    <button type="button" className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
    </div>
    )

}
export default UserProfile;