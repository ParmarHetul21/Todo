import { ADD_TODO, NEW_TODO } from "./actionType";

const initalState = {
	todo: []
};

const todoReducer = (state = initalState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, todo: [...state.todo, action.payload] };
		case NEW_TODO:
			return { ...state, todo: action.payload };
		default:
			return state;
	}
};

export default todoReducer;
