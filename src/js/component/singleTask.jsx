import React from "react";

const SingleTask = (props) => {
    const handleDeleteClick = (e) => {
        props.handleDeleteClick(e.target.id)
    }
    return (
        <li>
            <div className="divOfLis">{props.item}</div>
        <span onClick={handleDeleteClick} id={props.index} >X</span>
        </li>
    )
}
export default SingleTask;