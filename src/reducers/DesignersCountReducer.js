import { GET_DESIGNERS_COUNT } from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case GET_DESIGNERS_COUNT:
      return action.payload;
    default:
      return state;
  }
};
