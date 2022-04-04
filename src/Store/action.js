import {
	ADD_TODO,
	NEW_TODO,
	COMPELETED_TODO,
	UPDATE_TODO,
	DELETED_TODO
} from "./actionType";

export const addTodoAction = (id, name, compeleted = false) => ({
	type: ADD_TODO,
	payload: { id, name, compeleted }
});

export const loadTodoAction = (todo) => ({
	type: NEW_TODO,
	payload: todo
});

export const compeletedTodoAction = (id) => ({
	type: COMPELETED_TODO,
	payload: id
});

export const updateTodoAction = (id, todo) => ({
	type: UPDATE_TODO,
	payload: {
		id: id,
		todo: todo
	}
});

export const deletedTodoAction = (id) => ({
	type: DELETED_TODO,
	payload: id
});
