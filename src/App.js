import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import UserDetail from "./pages/home/userProfile/UserDetail";
function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/api/userDetail/:id"} element={<UserDetail/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
