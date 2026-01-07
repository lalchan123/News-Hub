import * as ActionType from "../actions/actionTypes"



const initialState = {
    comment: "",
    loadingComment: false,
    errorComment: null

}


const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ActionType.CREATE_COMMENT_START:
            return {
                ...state,
                loading: true
            }

        case ActionType.CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comment: action.payload,
                errorComment: null
            }

        case ActionType.CREATE_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                errorComment: action.error
            }

        default:
            return state
    }
}


export default reducer 