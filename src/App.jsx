import { Box } from "@mui/material";
import Notifications from "./components/Notifications";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";

const App = () => {
    return (
        <Box>
            <Notifications />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </Box>
    );
};

export default App;
