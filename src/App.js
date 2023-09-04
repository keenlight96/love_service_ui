import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import NewestCCDVs from "./pages/NewestCCDVs";

function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<NewestCCDVs/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
