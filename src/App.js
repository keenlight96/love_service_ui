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
import UserInfo from "./pages/information/UserInfo";
import AllBillByOfCCDV from "./pages/information/AllBillOfCCDV";
import Bills from "./pages/information/Bills";
import HistoryProvider from "./pages/home/HistoryProvider";
import ShowImages from "./pages/profile/ShowImages";
import SidebarInformation from "./components/common/SidebarInformation";
import Information from "./pages/information/Information";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/test"} element={<SidebarInformation/>}></Route>
                <Route path={"/"} element={<Layout/>}>
                    {/*Page Login*/}
                    <Route path={"/login"} element={<Login/>}></Route>

                    {/*Page Home*/}
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"register"} element={<Register/>}></Route>
                    <Route path={"registerCCDV"} element={<RegisterProfile/>}></Route>
                    <Route path={"registerProfile"} element={<RegisterProfile/>}></Route>
                    <Route path={"/bills"} element={<Bills/>}></Route>

                    {/*Page Profile*/}
                    <Route path={"profile/:username"} element={<Detail/>}></Route>

                    {/*Page Information*/}
                    <Route path={"information"} element={<Information/>}>
                        <Route path={"info"} element={<UserInfo/>}></Route>
                        <Route path={"bills"} element={<UserInfo/>}></Route>
                        <Route path={"topup"} element={<UserInfo/>}></Route>
                        <Route path={"summary"} element={<UserInfo/>}></Route>
                        <Route path={"supplies"} element={<UserInfo/>}></Route>
                        <Route path={"album"} element={<UserInfo/>}></Route>

                    </Route>

                </Route>
            </Routes>
        </>
    );
}

export default App;
