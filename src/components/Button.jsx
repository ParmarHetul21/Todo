import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../Store/action";

function Button({ ...props }) {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);

	const AddTodo = () => {
		dispatch(addTodoAction(props.data));
	};

	useEffect(() => {
		selector.todo.length === 0
			? console.log("empty")
			: localStorage.setItem("Todo", JSON.stringify(selector.todo));
	}, [selector.todo]);

	return (
		<>
			<button
				className={props.className}
				type={props.type}
				name={props.name}
				onClick={AddTodo}
			>
				{props.name}
			</button>
		</>
	);
}

export default Button;
