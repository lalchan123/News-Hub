import { Grid } from "@mui/material";
import GridLayout from "../GridLayout/GridLayout";

function Post(props) {
    return (
        <Grid container rowSpacing={4} columnSpacing={3}>
            <GridLayout style={{ background: "#fff" }}>
               {props.children}
            </GridLayout>
           
        </Grid>
    );
}

export default Post;
