import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./login/Login";
import Register from "./cadastrar/Register";
import Habits from "./habitos/Habits";
import ContextApi from "./contextApi/ContextApi";

export default function App() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const contextValue = { token, setToken, user, setUser };
    console.log(token);

    return (
        <ContextApi.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/habits" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </ContextApi.Provider>
    );
}
