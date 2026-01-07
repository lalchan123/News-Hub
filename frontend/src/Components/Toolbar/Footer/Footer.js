import Box from "@mui/material/Box";
import { Grid, Avatar } from "@mui/material";
import GridLayout from "../../Ui/GridLayout/GridLayout";
import classes from "./Footer.module.css"
import { Link } from "react-router-dom";
import ContactIc from "@mui/icons-material/AddIcCallSharp";
import AboutUsIcon from "@mui/icons-material/AppSettingsAltOutlined";
import ServicesIcon from "@mui/icons-material/AgricultureRounded";
import TermsIcon from "@mui/icons-material/BalanceRounded";

const Footer = () => (
    <Box>
        <Grid container column={12}>
            <GridLayout>
                <Avatar style={{ background: "red" }}>
                    <AboutUsIcon />
                </Avatar>
                <Link className={classes.FooterLink} to="/hn/about">About us</Link>
            </GridLayout>
            <GridLayout>
                <Avatar style={{ background: "red" }}>
                    <ContactIc />
                </Avatar>
                <Link className={classes.FooterLink} to="/hn/contact">Contact us</Link>
            </GridLayout>
            <GridLayout>
                <Avatar style={{ background: "red" }}>
                    <ServicesIcon />
                </Avatar>
                <Link className={classes.FooterLink} to="/hn/services">Services</Link>
            </GridLayout>
            <GridLayout>
                <Avatar style={{ background: "red" }}>
                    <TermsIcon />
                </Avatar>
                <Link className={classes.FooterLink} to="/hn/terms">Terms</Link>
            </GridLayout>
        </Grid>
        <div className={classes.FooterSection}> &copy; Copyright News Hub. All Rights Reserved. {new Date().getFullYear()}</div>
    </Box>
);

export default Footer;
