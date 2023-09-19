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
import LayoutAdmin from "./components/layoutAdmin/LayoutAdmin";
import HomeAdmin from "./pages/admin/HomeAdmin";
import HistoryProvider from "./pages/home/HistoryProvider";
import ShowImages from "./pages/profile/ShowImages";
import SidebarInformation from "./components/common/SidebarInformation";
import Information from "./pages/information/Information";
import Test from "./pages/Test";
import ListBill from "./pages/admin/ListBill";
import NewCCDVList from "./pages/admin/NewCCDVList";
import AllUserList from "./pages/admin/AllUserList";
import AllCCDVList from "./pages/admin/AllCCDVList";
import AccountReport from "./pages/admin/AccountReport";
import NewUserList from "./pages/admin/NewUserList";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/test"} element={<Test/>}></Route>
                <Route path={"/"} element={<Layout/>}>
                    {/*Page Login*/}
                    <Route path={"/login"} element={<Login/>}></Route>

                    {/*Page Home*/}
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"register"} element={<Register/>}></Route>
                    <Route path={"registerCCDV"} element={<RegisterCCDV/>}></Route>
                    <Route path={"registerProfile"} element={<RegisterProfile/>}></Route>

                    {/*Page Profile*/}
                    <Route path={"profile/:username"} element={<Detail/>}></Route>

                    {/*Page Information*/}
                    <Route path={"information"} element={<Information/>}>
                        <Route path={"info"} element={<UserInfo/>}></Route>
                        <Route path={"bills"} element={<Bills/>}></Route>
                        <Route path={"topup"} element={<UserInfo/>}></Route>
                        <Route path={"summary"} element={<UserInfo/>}></Route>
                        <Route path={"supplies"} element={<UserInfo/>}></Route>
                        <Route path={"album"} element={<UserInfo/>}></Route>

                    </Route>

                </Route>
                <Route path="/" element={<LayoutAdmin/>}>
                    <Route path="/homeAdmin"  element={<HomeAdmin />}>
                        <Route path={"allBills"} element={<ListBill/>}></Route>
                        <Route path={"NewUser"} element={<NewUserList/>}></Route>
                        <Route path={"allUser"} element={<AllUserList/>}></Route>
                        <Route path={"newCCDv"} element={<NewCCDVList/>}></Route>
                        <Route path={"allCCDv"} element={<AllCCDVList/>}></Route>
                        <Route path={"allListReport"} element={<AccountReport/>}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
