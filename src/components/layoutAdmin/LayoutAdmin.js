import HeaderAdmin from "./HeaderAdmin";
import {Outlet} from "react-router";
import FooterAdmin from "./FooterAdmin";

const LayoutAdmin =()=>{
    return (
        <>
            <HeaderAdmin/>
            <Outlet/>
            <FooterAdmin/>
        </>
    )
}
export default LayoutAdmin;