import { SORT_DESIGNERS_BY_DATE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SORT_DESIGNERS_BY_DATE:
      return [...action.payload];
    default:
      return state;
  }
};
