import axios from 'axios';
import {
  ADD_NEW_ADVERTISMENT,
  GET_ALL_ADVERTISEMENTS,
  DELETE_ADVERTISEMENT
} from './types';

export const addNewAdvertisement = ({ name, image }) => async dispatch => {
  const formData = new FormData();
  formData.append('file', image);
  try {
    const response = await axios.post(
      `http://192.168.1.111:9090/ad/create?name=${name}&file=${image}`,
      formData,
      { headers: { 'Content-type': 'multipart/form-data' } }
    );
    dispatch({ type: ADD_NEW_ADVERTISMENT, payload: response.data });
  } catch (e) {}
};

export const getAllAdvertisements = () => async dispatch => {
  try {
    const response = await axios.get('http://192.168.1.111:9090/ad/getallads');
    dispatch({ type: GET_ALL_ADVERTISEMENTS, payload: response.data });
  } catch (e) {}
};

export const deleteAdvertisement = id => async dispatch => {
  try {
    await axios.get(`http://192.168.1.111:9090/ad/delete?id=${id}`);
    dispatch({ type: DELETE_ADVERTISEMENT, payload: { id } });
  } catch (e) {}
};
