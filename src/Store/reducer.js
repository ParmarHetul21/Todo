import {
	ADD_TODO,
	NEW_TODO,
	COMPELETED_TODO,
	UPDATE_TODO,
	DELETED_TODO
} from "./actionType";

const initalState = {
	todo: []
};

const todoReducer = (state = initalState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, todo: [...state.todo, action.payload] };
		case NEW_TODO:
			return { ...state, todo: action.payload };
		case COMPELETED_TODO:
			return {
				...state,
				todo: state.todo.map((todo) => {
					if (todo.id === action.payload) {
						return {
							...todo,
							compeleted: true
						};
					}
					return todo;
				})
			};

		case UPDATE_TODO:
			return {
				...state,
				todo: state.todo.map((todo) => {
					if (todo.id === action.payload.id) {
						return { ...todo, name: action.payload.updTodo };
					}
					return todo;
				})
			};

		case DELETED_TODO:
			return {
				...state,
				todo: state.todo.filter((todo) => todo.id !== action.payload)
			};
		default:
			return state;
	}
};

export default todoReducer;
