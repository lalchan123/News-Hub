import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Avatar, Link, Paper, TextField, Typography } from "@mui/material";
import { Link as Linck, useNavigate } from "react-router-dom";
import GridLayout from "../../Ui/GridLayout/GridLayout";
import Button from "../Button/Button";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import { loginUser } from "../../../store/actions/users";
import Spinner2 from "../Spinner2/Spinner2";


const Login = () => {

    const dispatch = useDispatch()
    const { login, loginSuccess, loading, loginError } = useSelector((state) => state.auth)
    const navigate = useNavigate()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {}
        formData["email"] = email
        formData["password"] = password
        dispatch(loginUser(formData))

    }

    useEffect(() => {
        if (login)
        {
            navigate("/")
        }

    }, [login, navigate])

    return (
        <GridLayout style={{ background: "white" }}>
            <Paper
                elevation={6}
                style={{
                    height: "60vh",
                    maxWidth: "340px",
                    margin: "20px auto",
                    padding: "20px 15px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Avatar style={{ background: "#6666FF" }}>
                        <AccountBoxRoundedIcon />
                    </Avatar>
                    <h3 style={{ margin: "3px" }}>Log In</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        label="email"
                        value={email}
                        type="email"
                        placeholder="Enter Email"
                        fullWidth
                        required
                        variant="filled"
                    />
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        label="password"
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        fullWidth
                        required
                        variant="filled"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        style={{ margin: "20px 0" }}
                    >
                        Submit
                    </Button>
                </form>

                <Typography>
                    <Link href="#">Forgot Password?</Link>
                </Typography>
                <Typography sx={{ mt: "10px" }}>
                    Dont have account?
                    <Linck to="/register"> Register Now</Linck>
                </Typography>
                <Typography>
                    <Typography>For Testing use: testuser@gmail.com</Typography>
                    <Typography>password: Kbtest_115</Typography>
                </Typography>
            </Paper>
            {loginError && <p style={{ color: "red" }}>Please Enter a Valid Email & Password</p>}
            {loading && <Spinner2 />}
        </GridLayout>
    );
};

export default Login;
