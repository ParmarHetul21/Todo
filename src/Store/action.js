import { ADD_TODO } from "./actionType";

export const addTodoAction = (todo) => ({
	type: ADD_TODO,
	payload: todo
});

// export const showTodoAction = (todo) => ({
// 	type: SHOW_TODO,
// 	payload: todo
// });
