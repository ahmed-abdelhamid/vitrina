import {
  ADD_NEW_ADVERTISMENT,
  GET_ALL_ADVERTISEMENTS,
  DELETE_ADVERTISEMENT
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ADVERTISEMENTS:
      return [...action.payload];
    case ADD_NEW_ADVERTISMENT:
      return [...state, action.payload];
    case DELETE_ADVERTISEMENT:
      return state.filter(({ adId }) => adId !== action.payload.id);
    default:
      return state;
  }
};
