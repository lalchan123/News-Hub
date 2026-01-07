import { Button as Buttn } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    btn: {
        // textTransform: "none",
        backgroundColor: "primary"
    }
});

let Button = (props) => {
    const classes = useStyles();
    return (
        <Buttn
            className={classes.btn}
            color={props.color}
            size={props.size}
            variant={props.variant}
            fullWidth={props.fullWidth}
            type={props.type}
            onClick={props.click}
            disabled={props.disabled}
            sx={{ ml: "8px", textTransform: "none" }}
            style={props.style}
        >
            {props.children}
        </Buttn>
    );
};

export default Button;
