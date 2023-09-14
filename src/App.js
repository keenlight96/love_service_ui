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
import AllBillByOfCCDV from "./pages/information/AllBillOfCCDV";
import Bills from "./pages/information/Bills";
import HistoryProvider from "./pages/home/HistoryProvider";
import ShowImages from "./pages/profile/ShowImages";
import ChangePrice from "./pages/profile/ChangePrice";
import RegisterSupply from "./components/common/RegisterSupply";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/test"} element={<ShowImages/>}></Route>
                <Route path={"/test2"} element={<RegisterSupply/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"register"} element={<Register/>}></Route>
                    <Route path={"registerCCDV"} element={<RegisterCCDV/>}></Route>
                    <Route path={"registerProfile/:id"} element={<RegisterProfile/>}></Route>
                    <Route path={"/userDetail/:id"} element={<Detail/>}></Route>
                    <Route path={"registerCCDV"} element={<RegisterProfile/>}></Route>
                    <Route path={"registerProfile"} element={<RegisterProfile/>}></Route>
                    <Route path={"/profile/:username"} element={<Detail/>}></Route>
                    <Route path={"/CCDV"} element={<CCDVUserProfile/>}></Route>
                    <Route path={"/bills"} element={<Bills/>}></Route>
                    <Route path={"change-price/:id"} element={<ChangePrice/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
