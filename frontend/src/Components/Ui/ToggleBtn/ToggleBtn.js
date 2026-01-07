import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const ToggleBtn = (props) => (
    <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 0, ml: 0.1 }}
        onClick={props.clicked}
    >
        <MenuIcon />
    </IconButton>
);

export default ToggleBtn;
