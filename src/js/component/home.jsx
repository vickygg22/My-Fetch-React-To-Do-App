import React, {useState, useEffect} from "react";
import Input from "./input.jsx";
import ToDoList from "./toDoList.jsx";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
	const handleTasks = (newTask) => {
		setTasks(tasks.concat({ label: newTask, done: false}))
	}
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/victoriag", {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		})
	}, [])

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/victoriag")
		.then(response => response.json())
		.then(data => setTasks(data))
	}, [])

	useEffect(() => {
		if(tasks.length != 0){
		fetch("https://assets.breatheco.de/apis/fake/todos/user/victoriag", {
			method: "PUT",
     		body: JSON.stringify(tasks),
      		headers: {
        		"Content-Type": "application/json"
      		}
    })
    .then(resp => { 
        resp.json();
    })
    .catch(error => {
       
        console.log(error);

		})}
	}, [tasks])

	const handleDeleteClick = (i) => {
		tasks.splice(i, 1)
		setTasks([...tasks])
		console.log(tasks)
		}

	const handleDelete = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/victoriag", {
			method: "DELETE",
			header: {
				"Content-Type": "application/json"
			}
		})
		.then(response => response.json())
		.then(data => console.log(data))
		setTasks([])
	}
	return (
		<div className="text-center">
			<h1>todos</h1>
			<Input handleTasks={handleTasks}/>
			<ToDoList tasks={tasks} handleDeleteClick={handleDeleteClick}/>
			<div className="remainingItems">{tasks.length === 0 ? "No tasks, add a task" : tasks.length === 1 ? (tasks.length)+ " item left" : (tasks.length)+ " items left"}</div>
			<button className="btn" onClick={handleDelete}>Clean all tasks</button>
		</div>
	);
};

export default Home;
//Para borrarlo todo excepto el usuario, hacer un PUT, en vez de DELETE, pasando dentro del body del PUT 
//(setTasks([]))