import axios from 'axios';
import {
  GET_ALL_SUBCATEGORIES,
  ADD_SUBCATEGORY,
  GET_SUBCATEGORIES
} from './types';

export const getAllSubcategories = id => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.1.111:9090/product/getsubtype?type=${id}`
    );
    dispatch({ type: GET_ALL_SUBCATEGORIES, payload: response.data });
  } catch (e) {}
};

export const getSubcategories = () => async dispatch => {
  try {
    const response = await axios.get(
      'http://192.168.1.111:9090/product/getallsubtype'
    );
    dispatch({ type: GET_SUBCATEGORIES, payload: response.data });
  } catch (e) {}
};

export const addSubcategory = ({ name, image }, typeId) => async dispatch => {
  const formData = new FormData();
  formData.append('file', image);
  try {
    const response = await axios.post(
      `http://192.168.1.111:9090/product/createsubtype?name=${name}&file=${image}&type=${typeId}`,
      formData,
      { headers: { 'Content-type': 'multipart/form-data' } }
    );
    dispatch({ type: ADD_SUBCATEGORY, payload: response.data });
  } catch (e) {}
};
