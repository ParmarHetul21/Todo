import { ADD_TODO, NEW_TODO } from "./actionType";

export const addTodoAction = (todo) => ({
	type: ADD_TODO,
	payload: todo
});

export const loadTodoAction = (todo) => ({
	type: NEW_TODO,
	payload: todo
});
