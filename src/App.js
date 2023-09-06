import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Detail from "./pages/home/Detail";
import Register from "./component/register/Register";
import RegisterCCDV from "./component/register/RegisterCCDV";
import RegisterProfile from "./component/register/RegisterProfile";
import UserProfile from "./component/register/UserProfile";
import Home from "./pages/home/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"register"} element={<Register/>}></Route>
                    <Route path={"registerCCDV"} element={<RegisterProfile/>}></Route>
                    <Route path={"registerProfile"} element={<RegisterProfile/>}></Route>
                    <Route path={"/userDetail/:id"} element={<Detail/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
