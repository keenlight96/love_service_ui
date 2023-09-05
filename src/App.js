import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Register from "./component/register/Register";
import RegisterCCDV from "./component/register/RegisterCCDV";
import RegisterProfile from "./component/register/RegisterProfile";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"register"} element={<Register/>}></Route>
                <Route path={"registerCCDV"} element={<RegisterCCDV/>}></Route>
                <Route path={"registerProfile/:id"} element={<RegisterProfile/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
