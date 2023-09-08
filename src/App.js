import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Login from "./pages/login/Login";
import Layout from "./components/Layout";
import Detail from "./pages/profile/Detail";
import Register from "./pages/register/Register";
import RegisterCCDV from "./pages/register/RegisterCCDV";
import RegisterProfile from "./pages/register/RegisterProfile";
import Home from "./pages/home/Home";
import CCDVUserProfile from "./pages/home/CCDVUserProfile";
import AllBillByOfCCDV from "./pages/home/AllBillByOfCCDV";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"register"} element={<Register/>}></Route>
                    <Route path={"registerCCDV/:id"} element={<RegisterCCDV/>}></Route>
                    <Route path={"registerProfile"} element={<RegisterProfile/>}></Route>
                    <Route path={"/userDetail/:id"} element={<Detail/>}></Route>
                    <Route path={"/CCDV"} element={<CCDVUserProfile/>}></Route>
                    <Route path={"/bills"} element={<AllBillByOfCCDV/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
