import axios from 'axios';
import { ADD_CATEGORY, GET_CATEGORIES } from './types';

export const addCategory = ({ name, image }) => async dispatch => {
  const formData = new FormData();
  formData.append('file', image);
  try {
    const response = await axios.post(
      `http://192.168.1.111:9090/product/createtype?name=${name}&file=${image}`,
      formData,
      { headers: { 'Content-type': 'multipart/form-data' } }
    );
    dispatch({ type: ADD_CATEGORY, payload: response.data });
  } catch (e) {}
};

export const getCategories = () => async dispatch => {
  try {
    const response = await axios.get(
      'http://192.168.1.111:9090/product/getalltype'
    );
    dispatch({ type: GET_CATEGORIES, payload: response.data });
  } catch (e) {}
};
