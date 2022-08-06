import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./login/Login";
import Register from "./cadastrar/Register";
import Habits from "./habitos/Habits";
import ContextApi from "./contextApi/ContextApi";

function App() {
    const [token, setToken] = useState("");
    const contextValue = { token, setToken };

    return (
        <BrowserRouter>
            <Routes>
                <ContextApi.Provider value={contextValue}>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/habits" element={<Habits />} />
                </ContextApi.Provider>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
