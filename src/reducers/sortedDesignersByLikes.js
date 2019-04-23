import { SORT_DESIGNERS_BY_LIKES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SORT_DESIGNERS_BY_LIKES:
      return [...action.payload];
    default:
      return state;
  }
};
