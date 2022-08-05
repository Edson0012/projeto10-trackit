import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
