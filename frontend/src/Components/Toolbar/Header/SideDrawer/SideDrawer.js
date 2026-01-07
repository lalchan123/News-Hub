import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./SideDrawer.module.css";
import { Drawer } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

const SideDrawer = ({ open, onClose, Change, children }) => {
    const [value, setValue] = useState(0);
    return (
        <Drawer open={open} onClose={onClose} className={classes.Drawer}>
            <Tabs
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="secondary"
                orientation="vertical"
                onClick={Change}
            >
                <Tab
                    component={Link}
                    to="/"
                    label="Home"
                />
                <Tab
                    component={Link}
                    to="/category/world"
                    label="World"
                />
                <Tab
                    component={Link}
                    to="/category/business"
                    label="Business"
                />
                <Tab component={Link}
                    to="/category/sport"
                    label="Sport"
                />
                <Tab
                    component={Link}
                    to="/category/finance"
                    label="Finance"
                />
                <Tab
                    component={Link}
                    to="/category/tech"
                    label="Tech"
                />
                <Tab component={Link}
                    to="/category/travel"
                    label="Travel" />
            </Tabs>
        </Drawer>
    );
};

SideDrawer.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.string
};

export default SideDrawer;
