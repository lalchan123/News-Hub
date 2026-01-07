import axios from "axios"
import * as actionType from "./actionTypes"


export const createCommentStart = () => {
    return {
        type: actionType.CREATE_COMMENT_START,
    }
}

export const createCommentSuccess = (comment) => {
    return {
        type: actionType.CREATE_COMMENT_SUCCESS,
        payload: comment
    }
}

export const createCommentFail = (error) => {
    return {
        type: actionType.CREATE_COMMENT_FAIL,
        error: error
    }
}

let token
if (localStorage.getItem("userPass"))
{  // a user might not exist in the local storage
    const { access } = JSON.parse(localStorage.getItem("userPass"))
    token = access
}


export const createComment = (slug, userComment) => {
    return ((dispatch) => {
        dispatch(createCommentStart())
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(`api/v1/comment/post/${slug}/`, userComment, config)
            .then((response) => {
                dispatch(createCommentSuccess(response.data))
            })
            .catch((error) => {
                dispatch(createCommentFail("You need to login to comment!"))
            })
    })
}
