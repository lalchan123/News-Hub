import classes from "./Layout.module.css";
import Desktop from "../Components/Toolbar/Header/Desktop/Desktop";
import Mobile from "../Components/Toolbar/Header/Mobile/Mobile";
import SideDrawer from "../Components/Toolbar/Header/SideDrawer/SideDrawer";
import Footer from "../Components/Toolbar/Footer/Footer";


function Layout(props) {

    return (
        <>
            <div className="HeaderSection">
                <Desktop />
                <Mobile />
                <SideDrawer />
            </div>
            <div className={classes.MainSection}>
                <main className={classes.main}>{props.children}</main>
            </div>
            <div className="FooterSection">
                <Footer />
            </div>
        </>
    );
}

export default Layout;
