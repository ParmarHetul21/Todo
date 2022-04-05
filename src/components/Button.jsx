import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { addTodoAction, updateTodoAction } from "../Store/action";

function Button({ ...props }) {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);

	const AddTodo = () => {
		dispatch(addTodoAction(uuid(), props.data));
		props.setdata("");
	};

	const UpdateTodo = () => {
		console.log("update caled");

		console.log(dispatch(updateTodoAction(props.data.id, props.data.name)));
	};

	useEffect(() => {
		selector.todo.length === 0
			? console.log("empty")
			: localStorage.setItem("Todo", JSON.stringify(selector.todo));
	}, [selector.todo]);

	return (
		<>
			{props.update ? (
				<button
					className={props.className}
					type={props.type}
					name={props.name}
					onClick={() => UpdateTodo()}
				>
					{props.name}
				</button>
			) : (
				<button
					className={props.className}
					type={props.type}
					name={props.name}
					onClick={() => AddTodo()}
				>
					{props.name}
				</button>
			)}
		</>
	);
}

export default Button;
