import React from "react";

const Input = (props) => {
    const handleInput = (e) => {
        if (e.key === "Enter") {
            props.handleTasks(e.target.value);
        }
    }
    return (
        <input className="input" type="text" onKeyUp={handleInput} placeholder="What needs to be done?"/>

    )
}
export default Input;