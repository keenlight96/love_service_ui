import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import Register from "./component/register/Register";
import RegisterCCDV from "./component/register/RegisterCCDV";
import RegisterProfile from "./component/register/RegisterProfile";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"register"} element={<Register/>}></Route>
                    <Route path={"registerCCDV/:id"} element={<RegisterCCDV/>}></Route>
                    <Route path={"registerProfile"} element={<RegisterProfile/>}></Route>


                </Route>
            </Routes>
        </>
    );
}

export default App;
