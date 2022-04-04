import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	loadTodoAction,
	compeletedTodoAction,
	deletedTodoAction
} from "../Store/action";

function List({ ...props }) {
	const selector = useSelector((state) => state.todo);
	const dispatch = useDispatch();
	const [compeleted, setCompeleted] = useState(false);

	const deletedTodo = (id) => dispatch(deletedTodoAction(id));

	useEffect(() => {
		if (localStorage.getItem("Todo")) {
			dispatch(loadTodoAction(JSON.parse(localStorage.getItem("Todo"))));
		}
	}, [dispatch]);

	const compeletedTodo = (id) => {
		dispatch(compeletedTodoAction(id));
		setCompeleted(true);
	};

	const editTodo = (id) => {
		props.editTodo(true);
		props.editId(id);
	};

	return (
		<>
			{selector.length <= 0 ? (
				<div>Empty value not allowed</div>
			) : (
				<div className="todo-list">
					<ul className="ul-list">
						{props.todos.map((todo) => (
							<li key={todo.id}>
								{todo.name}{" "}
								{todo.id && (
									<>
										{todo.compeleted ? (
											<></>
										) : (
											<i
												className="fal fa-check-circle"
												onClick={() =>
													compeletedTodo(todo.id)
												}
											></i>
										)}
										<i
											className="pl fal fa-edit"
											onClick={() => editTodo(todo.id)}
										></i>
										<i
											className="pl fal fa-times-circle"
											onClick={() => deletedTodo(todo.id)}
										></i>
									</>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
			{compeleted && <div>Your TODO is compeleted!!</div>}
		</>
	);
}

export default List;
