import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import SidebarData from "./SideBarData";
import classes from "./Sidebar.module.css";

const SideBar = (props) => {

    const [value, setValue] = useState(0);
    const [categoryState, setCategoryState] = useState("?recent_posts=6");

    const CategoryHandler = (e, newValue) => {
        setValue(newValue);

        if (newValue == 0)
        {
            setCategoryState("?recent_posts=6")

        }
        if (newValue == 1)
        {
            setCategoryState("?post_category=sport")
        }
        if (newValue == 2)
        {
            setCategoryState("?popular_posts=20")

        }

    };


    return (
        <>
            <div className={classes.TabsContainer}>
                <Tabs
                    textColor="inherit"
                    value={value}
                    onChange={CategoryHandler}
                    indicatorColor="secondary"
                >
                    <Tab label="Latest" />

                    <Tab label="Trending" />

                    <Tab label="Hot" />
                </Tabs>
            </div>
            <div>
                <SidebarData query={categoryState} />
            </div>


        </>

    );
};

export default SideBar;
