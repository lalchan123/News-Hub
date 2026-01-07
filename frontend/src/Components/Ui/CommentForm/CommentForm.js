import React, { useState } from "react"
import { Avatar, TextField } from "@mui/material";
import Button from "../Button/Button";
import CommentIcon from "@mui/icons-material/AddComment";
import classes from "./CommentForm.module.css"

const CommentForm = (props) => {
    const [enteredComment, setEnteredComment] = useState('');


    const submitHandler = event => {
        event.preventDefault();
        props.onAddComment({text: enteredComment});

    };

    return (
        <div className={classes.CommentForm}>
            <div className={classes.CommentTag}>
                <h3 style={{ color: "#6666FF", float: "left" }}>Leave a Comment</h3>
                <div style={{ marginTop: "10px", float: "right" }}>
                    <Avatar style={{ background: "#6666FF" }}>
                        <CommentIcon />
                    </Avatar>
                </div>

            </div>

            <form onSubmit={submitHandler}>

                <TextField
                    onChange={(e) => setEnteredComment(e.target.value)}
                    label="comment"
                    value={enteredComment}
                    type="comment"
                    placeholder="Enter a Comment"
                    fullWidth
                    required
                    variant="outlined"
                    inputProps={{
                        style: {
                            height: "70px"
                        }
                    }}

                />

                <Button
                    type="submit"
                    variant="contained"
                    style={{ margin: "20px 0" }}
                >
                    Submit
                </Button>

            </form>
        </div>
    )
}


export default CommentForm