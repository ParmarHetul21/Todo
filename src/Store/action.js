import { ADD_TODO, NEW_TODO } from "./actionType";

export const addTodoAction = (id, name, compeleted = false) => ({
	type: ADD_TODO,
	payload: { id, name, compeleted }
});

export const loadTodoAction = (todo) => ({
	type: NEW_TODO,
	payload: todo
});
