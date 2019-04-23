import {
  GET_ALL_SUBCATEGORIES,
  ADD_SUBCATEGORY,
  GET_SUBCATEGORIES
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_SUBCATEGORY:
      return [...state, action.payload];
    case GET_ALL_SUBCATEGORIES:
      return [...action.payload];
    case GET_SUBCATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
};
