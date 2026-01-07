import axios from "axios"
import * as actionType from "../actions/actionTypes"



export const createUserStart = () => {
    return {
        type: actionType.CREATE_USER_START,

    }
}

export const createUserSuccess = (userData) => {
    return {
        type: actionType.CREATE_USER_SUCCESS,
        payload: userData
    }
}

export const createUserFail = (error) => {
    return {
        type: actionType.CREATE_USER_FAIL,
        payload: error
    }
}

export const registerUser = (userData) => {
    return (dispatch) => {
        dispatch(createUserStart())
        const config = {
            headers: { "Content-Type": "application/json" }
        }
        axios.post("/api/v1/auth/users/", userData, config)
            .then(response => {
                dispatch(createUserSuccess())
            })
            .catch((error) => {
                //console.log("ErrorMessage", error.response.data)
                let message = ""
                for (let x in error.response.data)
                {
                    message += error.response.data[x][0]
                }
                if (error.response.data.length >= 50) // This is a 500 server error( would not be rearch)
                {                         // User is actually created. The wab page is return as a string
                    message = ""
                }
                dispatch(createUserFail(message))

            })
    }
}


export const loginStart = () => {
    return {
        type: actionType.LOGIN_USER_START
    }
}

export const loginSuccess = (loginUser) => {
    return {
        type: actionType.LOGIN_USER_SUCCESS,
        payload: loginUser
    }
}

export const loginFail = (err) => {
    return {
        type: actionType.LOGIN_USER_FAIL,
        error: err
    }
}

export const loginUser = (loginPass) => {
    return (dispatch) => {
        dispatch(loginStart())
        axios.post("/api/v1/auth/jwt/create/", loginPass)
            .then((response) => {
                dispatch(loginSuccess(response.data))
                // console.log("UserPass", response.data)
                localStorage.setItem("userPass", JSON.stringify(response.data))
            })
            .catch((error) => {
                dispatch(loginFail(error.message))
            })
    }
}

export const logOut = () => {
    localStorage.removeItem("userPass")
    return {
        type: actionType.LOGOUT,

    }

}

export const userActivate = () => {
    return {
        type: actionType.ACTIVATE_USER
    }
}

export const activateUser = (userData) => {
    return ((dispatch) => {
        axios.post("/api/v1/auth/users/activation/", userData)
            .then((response) => {
                dispatch(userActivate())
            })
            .catch((error) => {
                alert(error.toString())
            })
    })
}