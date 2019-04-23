import axios from 'axios';
import { LOGIN, LOGOUT, STORE_USER } from './types';

export const storeUser = userData => ({ type: STORE_USER, payload: userData });

export const login = (mobile, password) => async dispatch => {
  try {
    const response = await axios.post(
      `http://192.168.1.111:9090/account/accountlogin?mobile=${mobile}&password=${password}`
    );
    if (!response.data.isAdmin) {
      throw new Error();
    }
    localStorage.setItem('adminId', response.data.accountId);
    dispatch({ type: LOGIN, payload: response.data });
  } catch (e) {
    throw new Error('Login Failed');
  }
};

export const logout = () => async dispatch => {
  try {
    localStorage.removeItem('adminId');
    dispatch({ type: LOGOUT });
  } catch (e) {}
};

export const editUserData = (
  { firstname, lastname, email, password, mobile },
  id
) => async dispatch => {
  const response = await axios.get(
    `http://192.168.1.111:9090/account/editaccount?firstname=${firstname}&lastname=${lastname}&mobile=${mobile}&email=${email}&id=${id}${
      password ? `&password=${password}` : ''
    }`
  );
  dispatch({ type: STORE_USER, payload: response.data });
};
