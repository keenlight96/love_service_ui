import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import Detail from "./pages/home/Detail";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"/userDetail/:id"} element={<Detail/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
