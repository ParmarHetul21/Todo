import React, { useState } from "react";
import InputField from "../components/InputField";
import List from "../components/List";
import Button from "../components/Button";

function Todo() {
	const [todo, setTodo] = useState("");

	return (
		<>
			<div className="todo-boundary">
				<div className="todo-title">Todo-Redux</div>
				<InputField
					type="text"
					className="your-todo"
					name="todo"
					placeholder="enter your todo"
					data={setTodo}
				/>
				<Button
					type="submit"
					className="lg-btn-submit"
					name="Submit"
					data={todo}
				/>
				<List />
			</div>
		</>
	);
}

export default Todo;
