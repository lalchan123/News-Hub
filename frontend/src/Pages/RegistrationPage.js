import { styled, alpha } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Ui/Login/Login";
import Register from "../Components/Ui/Register/Register";

const DIV = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),

    marginLeft: 0,
    width: "100%",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
    }
}));

function RegistrationPage() {
    return (
        <DIV>
            <h2>Registration/Login Page</h2>

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </DIV>
    );
}

export default RegistrationPage;
