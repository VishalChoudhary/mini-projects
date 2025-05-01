import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () =>{
    const user = useSelector(state=>state.user.currentUser);
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={user? <Navigate to="/" />: <Login />}/>
                <Route path="/register" element={user? <Navigate to="/" />: <Register />}/>
            </Routes>
        </Router>
    )
};

export default App;