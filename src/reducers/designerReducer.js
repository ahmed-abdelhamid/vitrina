import {
  GET_ALL_DESIGNERS,
  GET_DESIGNER,
  GET_DESIGNERS,
  GET_DESIGNERS_BY_TYPE,
  SORT_DESIGNERS_BY_DATE,
  SORT_DESIGNERS_BY_LIKES
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SORT_DESIGNERS_BY_DATE:
    case SORT_DESIGNERS_BY_LIKES:
    case GET_ALL_DESIGNERS:
      return [...action.payload];
    case GET_DESIGNER:
      return [action.payload];
    case GET_DESIGNERS:
      return [...action.payload];
    case GET_DESIGNERS_BY_TYPE:
      return [...action.payload];
    default:
      return state;
  }
};
