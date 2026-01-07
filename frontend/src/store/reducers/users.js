import * as actionType from "../actions/actionTypes"

const user = JSON.parse(localStorage.getItem("userPass"))

const initialState = {
    login: user ? user : null,
    loginSuccess: false,
    loginError: "",
    loading: false,
    registerSuccess: false,
    registerError: "",
    userActivation: false
}


const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionType.CREATE_USER_START:
            return {
                ...state,
                loading: true
            }

        case actionType.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                registerSuccess: true,
                registerError: null

            }

        case actionType.CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                registerSuccess: false,
                registerError: action.payload
            }

        case actionType.LOGIN_USER_START:
            return {
                ...state,
                loading: true
            }

        case actionType.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginError: null,
                loginSuccess: true,
                login: action.payload


            }

        case actionType.LOGIN_USER_FAIL:
            return {
                ...state,
                loginError: action.error,
                loading: false,
            }

        case actionType.LOGOUT:
            return {
                ...state,
                login: null,
                loginSuccess: false,
                
                
            }

        case actionType.ACTIVATE_USER:
            return {
                ...state,
                userActivation: true
            }

        default:
            return state;
    }
}


export default reducer