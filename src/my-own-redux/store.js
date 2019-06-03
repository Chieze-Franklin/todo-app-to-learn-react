import { createStore } from './index'

const reducer = (state, action) => {
  switch (action.type) {
    case 'PAGE_CHANGED':
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state;
  }
}

const initialState = {
  appName: 'TodoList',
  currentPage: 'home',
}

export const changePage = (page) => (dispatch) => {
  dispatch({
    type: 'PAGE_CHANGED',
    payload: page
  })
};

export default createStore(reducer, initialState);
