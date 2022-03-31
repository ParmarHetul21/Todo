import React from "react";
import { useSelector } from "react-redux";

function List() {
	const selector = useSelector((state) => state.todo);
	return (
		<>
			{selector.length < 0 ? (
				<div>Empty value not allowed</div>
			) : (
				<div className="todo-list">
					<ul className="ul-list">
						{selector.map((todo) => {
							return <li key={todo}>{todo}</li>;
						})}
					</ul>
				</div>
			)}
		</>
	);
}

export default List;
