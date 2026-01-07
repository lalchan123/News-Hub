import PropTypes from "prop-types";
import classes from "./Rectangle.module.css";

const Rectangle = ({ children, bcolor, width, height, padding }) => (
    <div
        className={classes.Rectangle}
        style={{
            height: height,
            backgroundColor: bcolor,
            width: width,
            padding: padding
        }}
    >
        {children}
    </div>
);

Rectangle.propTypes = {
    children: PropTypes.array,
    bcolor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string
};

export default Rectangle;
