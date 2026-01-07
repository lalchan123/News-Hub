import { Grid, Typography } from "@mui/material";

const GridLayout = (props) => (
    <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        sx={{
            background: "#000",
            height: "auto",
            display: "grid",
            color: "#fff"
        }}
        alignItems="center"
        justifyContent="center"
        style={props.style}
    >
        <div>{props.children}</div>
    </Grid>
);
export default GridLayout;
