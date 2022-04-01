import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodoAction } from "../Store/action";

function List() {
	const selector = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem("Todo")) {
			dispatch(loadTodoAction(JSON.parse(localStorage.getItem("Todo"))));
		}
	}, [dispatch]);

	return (
		<>
			{selector.length <= 0 ? (
				<div>Empty value not allowed</div>
			) : (
				<div className="todo-list">
					<ul className="ul-list">
						{selector.map((todo) => {
							return (
								<li key={todo.id}>
									{todo.name}{" "}
									{todo.id && (
										<>
											<i className="fal fa-check-circle"></i>
											<i className="pl fal fa-times-circle"></i>
										</>
									)}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
}

export default List;
