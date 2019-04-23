import { ADD_CATEGORY, GET_CATEGORIES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case GET_CATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
};
