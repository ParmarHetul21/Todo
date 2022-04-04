import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import List from "../components/List";
import Button from "../components/Button";
import { useSelector } from "react-redux";

function Todo() {
	const todos = useSelector((state) => state.todo);
	const [filterType, setFilterType] = useState();
	const [filteredTodo, setFilteredTodo] = useState();
	const [todo, setTodo] = useState("");

	useEffect(() => {
		if (filterType === "completed") {
			setFilteredTodo(todos.filter((todo) => todo.compeleted));
		} else if (filterType === "uncompleted") {
			setFilteredTodo(todos.filter((todo) => !todo.compeleted));
		} else {
			setFilteredTodo(todos);
		}
	}, [filterType, todos]);

	const btnCompeleted = () => {
		setFilterType("completed");
	};

	const btnUncompeleted = () => {
		setFilterType("uncompleted");
	};

	const allTodo = () => {
		setFilterType("all");
	};

	return (
		<>
			<div className="todo-boundary">
				<div className="todo-title">Todo-Redux</div>

				<InputField
					type="text"
					className="your-todo"
					name="todo"
					placeholder="enter your todo"
					value={todo}
					data={setTodo}
				/>
				<Button
					type="submit"
					className="lg-btn-submit"
					name="Submit"
					data={todo}
					setdata={setTodo}
				/>

				<div className="btn-filter">
					<button
						type="submit"
						className="lg-btn-submit"
						onClick={btnCompeleted}
					>
						compeleted
					</button>
					<button
						type="submit"
						className="lg-btn-submit"
						onClick={btnUncompeleted}
					>
						uncompeleted
					</button>
					<button
						type="submit"
						className="lg-btn-submit"
						onClick={allTodo}
					>
						All
					</button>
				</div>
				<List todos={filteredTodo || todos} />
			</div>
		</>
	);
}

export default Todo;
