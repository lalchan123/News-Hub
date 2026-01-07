import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import posts from "./reducers/posts";
import postsCategory from "./reducers/postsCategory";
import user from "./reducers/users"
import comment from "./reducers/comment"

export const store = configureStore(
    {
        reducer: {
            posts: posts,
            postsCategory: postsCategory,
            auth: user,
            comment: comment
        }
    },
    applyMiddleware(thunk)
);
