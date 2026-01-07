import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchPostListStart = () => {
    return {
        type: actionTypes.FETCH_ALL_POSTS_START
    };
};
export const allPostList = (posts) => {
    return {
        type: actionTypes.FETCH_ALL_POSTS_SUCCESS,
        posts: posts
    };
};

export const fetchPostError = (err) => {
    return {
        type: actionTypes.FETCH_ALL_POST_FAIL,
        err: err
    };
};

export const initPosts = (searchParam) => {
    return (dispatch) => {
        dispatch(fetchPostListStart())
        axios.get(`/api/v1/posts/${searchParam}`).then((response) => {
            dispatch(allPostList(response.data));
        })
            .catch((error) => {
                // console.log("error", error);
                dispatch(fetchPostError(error.message));
            });
    };
};


export const fetchPostDetailStart = () => {
    return {
        type: actionTypes.FETCH_DETAIL_POST_START
    };
};

export const fetchPostDetailSuccess = (post) => {
    return {
        type: actionTypes.FETCH_DETAIL_POST_SUCCESS,
        payload: post
    };
};

export const fetchPostDetailFail = (error) => {
    return {
        type: actionTypes.FETCH_DETAIL_POST_FAIL,
        payload: error
    };
};

export const postDetail = (id) => {

    return (dispatch) => {
        dispatch(fetchPostDetailStart())
        axios.get(`/api/v1/post/${id}`).then((response) => {
            dispatch(fetchPostDetailSuccess(response.data));
        })
            .catch((error) => {
                dispatch(fetchPostDetailFail(error.message));
            });

    };
};

