import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import classes from "./Category.module.css"
import { fetchPostsCategory } from "../store/actions/postsCategory";
import CardUi from "../Components/Ui/CardUi/CardUi";
import { Grid } from "@mui/material";
import GridLayout from "../Components/Ui/GridLayout/GridLayout";
import Spinner from "../Components/Ui/Spinner/Spinner";
import Error from "../Components/Ui/Error/Error";
import Paginate from "../Components/Ui/Pagination/Pagination";


function Category(props) {
  const { catname } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  let categoryParam = `?post_category=${catname}`
  if (location.search)
  {
    categoryParam = location.search
  }
  useEffect(() => {
    dispatch(fetchPostsCategory(categoryParam));

  }, [dispatch, categoryParam, location.search])


  const postCategory = useSelector((state) =>
    state.postsCategory
  )

  const { posts, loading, error, count } = postCategory


  // For pagination
  let Per_Page = 8   // Tally with backend Pagination
  let Count
  if (count)  
  {
    Count = Math.ceil(count / Per_Page)


  }

  const handlePageClick = (e, val = 1) => {
    categoryParam = `?page=${val}&post_category=${catname}`
    navigate(`/category/${catname}/` + categoryParam)
  }


  let categoryPosts = (posts.map((post) => (
    <GridLayout style={{ background: "#fff" }} key={post.slug}>
      <CardUi url={`/post/${post.slug}`} image={post.photo1} category={post.category} title={post.title} />
    </GridLayout>
  )))

  if (loading)
  {
    categoryPosts = <Spinner />
  }
  const showErr = error ? true : false

  return <>
    <div className={classes.CatContainer}>
      <h2 className={classes.CatName}>{catname.toUpperCase()}</h2>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {categoryPosts}
        <Error showErr={showErr} error={error} />
      </Grid>
    </div>
    <Paginate count={Count} change={handlePageClick} />
  </>

}

export default Category