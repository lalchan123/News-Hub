import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { postDetail } from "../store/actions/posts";
import { createComment } from "../store/actions/comment";
import classes from "./Detail.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Ui/Spinner/Spinner";
import CommentForm from "../Components/Ui/CommentForm/CommentForm";
import ViewsIcon from "@mui/icons-material/VisibilityRounded"


function Detail() {

    let { id } = useParams()
    const dispatch = useDispatch()
    const { loading, error, detailPost } = useSelector((state) => state.posts)
    const { loadingComment, comment, errorComment } = useSelector((state) => state.comment)

    useEffect(() => {
        dispatch(postDetail(id))
    }, [id, dispatch, comment, errorComment])

    const AddComment = (comment) => {
        dispatch(createComment(id, comment))
    }

    const splitDate = (str) => {
        const date = str.split("T")
        return date[0]
    }

    return (
        <div className={classes.DetailPage}>
            <h2>{detailPost.title}</h2>
            <div className={classes.profileDetail}>
                {
                    detailPost.author == "Abdulwasiu" ?
                        <div className={classes.profileImage}>
                            <img src="https://res.cloudinary.com/webmonc/image/upload/v1658886619/My%20Profile/me_sufv3k.png" alt="detail" />
                        </div> :
                        <div className={classes.profileImage}>
                            <img src="" alt="detail" />
                        </div>
                }
                <div>
                    <h4 style={{ margin: "4px 4px" }}>
                        by {detailPost.author}
                    </h4>
                    <h5 style={{ margin: "2px 4px" }}>Software Engineer</h5>
                </div>
            </div>
            <div>
                <div className={classes.ViewsTag}>
                    <h3>{detailPost.category}</h3>
                    <h3 style={{ color: "#EEEEE0" }}>{detailPost.last_updated ? splitDate(detailPost.last_updated) : null}</h3>
                </div>
                <div className={classes.ViewsTag}>
                    <h3><ViewsIcon /></h3>
                    <h3>{detailPost.views}</h3>
                </div>
                <div className={classes.ImgContainer}>
                    <img src={detailPost.photo1} className={classes.Img} alt="detail" />
                </div>
                <div className={classes.Content}>
                    <p>{detailPost.content}</p>
                </div>
            </div>

            {detailPost.comments ? detailPost.comments.map((comment) => (
                <div key={comment.id} className={classes.CommentBox}>
                    <div className={classes.profileImage}>
                        <img src="../../../../Assets/sample.png" alt="detail" />
                    </div>
                    <div>
                        <div className={classes.CommenterName}>
                            <div><h4 style={{ margin: "0" }}>{comment.user_name}</h4></div>
                            <div style={{ marginLeft: "7px" }}>{new Date().getDay()}d</div>
                        </div>
                        <p style={{ margin: "5px 4px" }}>{comment.text}</p>
                    </div>
                </div>
            )) : null}

            <div className={classes.MessageBox}>
                <CommentForm onAddComment={AddComment} />
            </div>
            {loading && <Spinner />}
            {loadingComment && <Spinner />}
            {errorComment && <p style={{ color: "red" }}>{errorComment}</p>}
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
        </div>
    );
}

export default Detail;
