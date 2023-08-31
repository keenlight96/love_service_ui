import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import UserProfile from "./UserProfile/UserProfile";
import UserDetail from "./UserProfile/UserDetail";

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<UserProfile/>}/>
      <Route path="/userDetail/:id" element={<UserDetail/>} />
    </Routes>
  </>)
}

export default App;
