import classes from "./MobileSearch.module.css";
import Search from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    MobileSearch: {
        display: "none",
        alignItems: "center",
        marginLeft: "70px"
    }
});

const MobileSearch = (props) => {
    const classes = useStyles();
    return (
        <div
            className={classes.MobileSearch}
            style={{
                display: "none"
            }}
        >
            <Search />
            <InputBase placeholder="Search..." />
        </div>
    );
};

export default MobileSearch;
