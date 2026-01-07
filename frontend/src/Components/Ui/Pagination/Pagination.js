import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import classes from "./Pagination.module.css"

const Paginate = (props) => (
    <div className={classes.PaginationContainer}>

        <Pagination count={props.count} page={props.page} onChange={props.change} variant="outlined" shape="rounded" color="primary" />

    </div>
)

export default Paginate


