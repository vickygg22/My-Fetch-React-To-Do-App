import React, {useState} from "react";
import Input from "./input.jsx";
import ToDoList from "./toDoList.jsx";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
	const handleTasks = (newTask) => {
		setTasks([...tasks, newTask])
	}
	const handleDeleteClick = (i) => {
		tasks.splice(i, 1)
		setTasks([...tasks])
		}
	return (
		<div className="text-center">
			<h1>todos</h1>
			<Input handleTasks={handleTasks}/>
			<ToDoList tasks={tasks} handleDeleteClick={handleDeleteClick}/>
			<div className="remainingItems">{tasks.length === 0 ? "No tasks, add a task" : tasks.length === 1 ? (tasks.length)+ " item left" : (tasks.length)+ " items left"}</div>
		</div>
	);
};

export default Home;
