import React from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../Store/action";

function Button({ ...props }) {
	const dispatch = useDispatch();

	const AddTodo = () => {
		dispatch(addTodoAction(props.data));
	};

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
