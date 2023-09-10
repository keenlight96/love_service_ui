import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {filterCCDVs} from "../../service/CCDVsService";

function SearchByFilter() {
    const dispatch = useDispatch();

    const [filterCCDV, setFilterCCDV] = useState({
        firstName: "",
        lastName: "",
        zone: "",
        gender: "",
        year: undefined
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilterCCDV((prevFilterDTO) => ({
            ...prevFilterDTO,
            [name]: value,
        }));
    };
    const handleSearchClick = () => {
        dispatch(filterCCDVs(filterCCDV));
    };

    return (
        <>
            <select className="form-control gender "  name="gender" onChange={handleInputChange} value={filterCCDV.gender}>
                <option value selected="selected">Giới tính</option>
                <option value="nữ">Nữ</option>
                <option value="nam">Nam</option>
            </select>
            <select className="form-control type " id="zone" name="zone" onChange={handleInputChange} value={filterCCDV.zone}>
                <option value selected="selected">Khu vực</option>
                <option value="Miền Bắc">Miền Bắc</option>
                <option value="Miền Trung">Miền Trung</option>
                <option value="Miền Nam">Miền Nam</option>
            </select>
            <select className="form-control gender " id="views" style={{width: 'auto'}} >
                <option value selected="selected">Lượt views</option>
                <option value="maxViews">Views Cao Nhất</option>
                <option value="minViews">Views Thấp Nhất</option>
            </select>
            <select className="form-control gender " id="bills" style={{width: 'auto'}}>
                <option value selected="selected">Lượt Thuê</option>
                <option value="maxBill">Lượt Thuê Cao Nhất</option>
                <option value="minBill">Lượt Thuê Thấp Nhất</option>
            </select>
            <input name="year" onChange={handleInputChange} value={filterCCDV.year} style={{
                width: "200px",
                borderRadius: "25px",
                fontSize: "11px",
                padding: "5px",
                height: "32px",
                marginRight: "3px",
                marginBottom: "5px",
                maxWidth: "500px",
                float: "left",
                cursor: "pointer",
                fontWeight: "600"
            }} type="number" placeholder="Nhập năm sinh bạn muốn tìm" autoComplete="off" id="year" />
            <input name="firstName" onChange={handleInputChange} value={filterCCDV.firstName} style={{
                width: "150px",
                borderRadius: "25px",
                fontSize: "11px",
                padding: "5px",
                height: "32px",
                marginRight: "3px",
                marginBottom: "5px",
                maxWidth: "500px",
                float: "left",
                cursor: "pointer",
                fontWeight: "600"
            }} type="text" placeholder="firstName" autoComplete="off"/>
            <input name="lastName" onChange={handleInputChange} value={filterCCDV.lastName} style={{
                width: "150px",
                borderRadius: "25px",
                fontSize: "11px",
                padding: "5px",
                height: "32px",
                marginRight: "3px",
                marginBottom: "5px",
                maxWidth: "500px",
                float: "left",
                cursor: "pointer",
                fontWeight: "600"
            }} type="text" placeholder="lastName" autoComplete="off"/>
            <button   onClick={handleSearchClick} type="button" className="form-control btn-filter btn btn-default" style={{height: '32px'}}>
                <i className="fa fa-search"/>Tìm kiếm
            </button>
        </>
    )
}

export default SearchByFilter;