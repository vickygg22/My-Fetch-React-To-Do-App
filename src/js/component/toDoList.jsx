import React, { useState } from "react";
import SingleTask from "./singleTask.jsx";

const ToDoList = (props) => {
    const mapTasks = props.tasks.map((item, index) => <SingleTask item={item} key={index} index={index} handleDeleteClick={props.handleDeleteClick}/>)
    return (
        <div>
            <ul>{mapTasks}</ul>
            
        </div>
    )
}
export default ToDoList;