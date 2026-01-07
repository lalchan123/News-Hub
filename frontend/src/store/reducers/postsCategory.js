import * as actionTypes from "../actions/actionTypes";

const initialState = {
    posts: [],
    count:null,
    next:null,
    previous:null,
    loading: false,
    error: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_BY_CATEGORY_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                posts: action.posts.results, //from the object recieve as payload, pull out results(an array)
                loading: false,
                error: null,
                count: action.posts.count,
                next: action.posts.next,
                previous: action.posts.previous,
            };

        case actionTypes.FETCH_POSTS_BY_CATEGORY_FAIL:
            return {
                ...state,
                error: action.err, 
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;
