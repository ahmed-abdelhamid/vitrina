import { LOGIN, LOGOUT, STORE_USER } from '../actions/types';

const initialState = { isSignedIn: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER:
    case LOGIN:
      const { accountId, mobile, firstName, lastName, email } = action.payload;
      return {
        accountId,
        mobile,
        firstName,
        lastName,
        email,
        isSignedIn: true
      };
    case LOGOUT:
      return { isSignedIn: false };
    default:
      return state;
  }
};
