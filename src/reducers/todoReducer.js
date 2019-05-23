import { CREATE_TODO, DELETE_TODO, FETCH_TODOS, TOGGLE_TODO } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      }
    case FETCH_TODOS:
      return {
        ...state,
        items: action.payload
      }
    case TOGGLE_TODO:
        return {
          ...state,
          items: state.items.map(i => {
            if (i.id === action.payload) {
              i.completed = !i.completed;
            }
            return i;
          })
        }
    default:
      return state;
  }
}
