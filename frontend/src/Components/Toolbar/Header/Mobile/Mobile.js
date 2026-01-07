import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { SearchBar } from "../../../Ui/SearchBar/SearchBar";
import ToggleBtn from "../../../Ui/ToggleBtn/ToggleBtn";
import Button from "../../../Ui/Button/Button";
import SideDrawer from "../SideDrawer/SideDrawer";
import Search from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import UserLoginIcon from "@mui/icons-material/AccountCircleOutlined"
import { logOut } from "../../../../store/actions/users";
import classes from "./Mobile.module.css";


function Mobile() {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const ToggleSideDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const dispatch = useDispatch()
    const { login, loginSuccess } = useSelector((state) => state.auth)

    const logOutHandler = () => {
        dispatch(logOut())
    }
    useEffect(() => {

    }, [login, loginSuccess])


    return (
        <div className={classes.Mobile}>
            <AppBar sx={{ backgroundColor: "#4831DA" }}>
                <Toolbar className={classes.Toolbar}>
                    <Link to="/">
                        <Typography variant="h6" color="#fff">
                            News Hub
                        </Typography>
                    </Link>
                    <div className={classes.Container}>
                        <div className={classes.IconBtnSearch}>
                            {login ?
                                <div className={classes.IconContainer}>
                                    <Avatar style={{ backgroundColor: "#007FFF", color: "#fff" }}>
                                        <UserLoginIcon />
                                    </Avatar>
                                    <Button variant="contained" size="small" style={{ marginRight: "5px" }} click={logOutHandler} >
                                        <Typography
                                            variant="h8"
                                            sx={{ margin: "0" }}
                                        >
                                            Log out
                                        </Typography>
                                    </Button>

                                </div>
                                :
                                <Link to="/login">
                                    <Button variant="contained" size="small">
                                        <Typography
                                            variant="h8"
                                            sx={{ margin: "0" }}
                                        >
                                            Log In
                                        </Typography>
                                    </Button>
                                </Link>

                            }

                            <Search
                                onClick={() => setOpenSearchBar(!openSearchBar)}
                            />
                        </div>
                        <SideDrawer
                            open={openDrawer}
                            onClose={() => setOpenDrawer(false)}
                            Change={() => setOpenDrawer(!openDrawer)}
                        ></SideDrawer>

                        <ToggleBtn clicked={ToggleSideDrawer} />
                    </div>
                </Toolbar>
                <div className={classes.MobileSearch}>
                    <SearchBar open={openSearchBar} />
                </div>
            </AppBar>

        </div>
    );
}

export default Mobile;
