import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                {/*<Route path="/register" element={<Register />} />*/}
                {/*<Route path="/admin" element={<Admin />} />*/}
                {/*<Route path="/user" element={<User />} />*/}
                {/*<Route path="/ccdv" element={<Ccdv />} />*/}
                {/*<Route path="*" element={<Login />} />*/}
            </Routes>
        </div>
    );
}

export default App;
