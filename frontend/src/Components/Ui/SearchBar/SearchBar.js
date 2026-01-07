import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchBar.module.css"

const Search = styled("div")(({ theme }) => ({

    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    //padding: "2px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
    }
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        }
    }
}));

export const SearchBar = (props) => {
    const navigate = useNavigate()

    const [keyword, setKeyword] = useState("")

    const handleSearchBar = () => {
        if (keyword)
        {

            navigate(`/?keyword=${keyword}`);
        }
    }
    return (
        <Search
            style={{
                display: props.open ? "block" : "none",
                border: "1px 0 solid gray",
            }}
        >

            <div className={classes.SearchIcon}
                onClick={handleSearchBar}>


                <SearchIcon />

            </div>
            <div className={classes.SearchInputBase} >
                <StyledInputBase
                    onChange={(e) => setKeyword(e.target.value)}
                    label="comment"
                    value={keyword}
                    type="search"
                    fullWidth
                    required
                    placeholder="Start Search…"
                    inputProps={{ "aria-label": "search" }}
                />

            </div>

        </Search>
    );
};
