import React, { useEffect } from "react"
import { activateUser } from "../store/actions/users";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

function Activation() {

    const dispatch = useDispatch()
    const { uid, token } = useParams()
    const { userActivation } = useSelector((state) => state.auth)

    const data = {}
    data["uid"] = uid
    data["token"] = token

    useEffect(() => {
        dispatch(activateUser(data))
    }, [])

    return (
        <div>
            <h3>Welcome to News Hub</h3>
            <h4>Activate My Account?</h4>
            <h4>{userActivation ? <p style={{ color: "green" }}>Your account has been  successfully created and activated!. You can now login</p> : null}</h4>
        </div>
    )
}

export default Activation