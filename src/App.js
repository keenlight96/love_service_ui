import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import CCDVUserProfile from "./pages/home/CCDVUserProfile";
import RegisterSupply from "./feature/RegisterSupply";
import CCDVProperGender from "./pages/home/CCDVProperGender";

function App() {
    return (
        <>
            {/*<Routes>*/}
            {/*    <Route path={"/"} element={<RegisterSupply/>}></Route>*/}
            {/*</Routes>*/}
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Home/>}>
                    </Route>
                    <Route path={"/CCDV"} element={<CCDVUserProfile/>}>

                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
