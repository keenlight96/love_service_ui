import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router";
import Footer from "./Footer";
import Chat from "./Chat";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Chat/>
            <Footer/>
        </>
    );
};

export default Layout;