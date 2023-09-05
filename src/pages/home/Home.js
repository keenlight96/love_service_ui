import Navbar from "../../component/navbar";
import {Outlet} from "react-router";
import UserDetail from "./userProfile/UserDetail";
import React from "react";
import TrangChu from "./userProfile/TrangChu";



function Home(){
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <Navbar></Navbar>
                    <TrangChu></TrangChu>
                    {/*<UserDetail></UserDetail>*/}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
export default Home;