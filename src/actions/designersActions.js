import axios from 'axios';
import {
  GET_ALL_DESIGNERS,
  GET_DESIGNER,
  GET_DESIGNERS_COUNT,
  GET_DESIGNERS,
  SORT_DESIGNERS_BY_DATE,
  SORT_DESIGNERS_BY_LIKES,
  GET_DESIGNERS_BY_TYPE
} from './types';

export const getAllDesigners = subTypeId => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.1.111:9090/account/getaccountssubtype?subtype=${subTypeId}`
    );
    dispatch({ type: GET_ALL_DESIGNERS, payload: response.data });
  } catch (e) {}
};

export const getDesigner = designerId => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.1.111:9090/account/getaccount?accountid=${designerId}`
    );
    dispatch({ type: GET_DESIGNER, payload: response.data });
  } catch (e) {}
};

export const getDesigners = () => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.1.111:9090/account/showdesigners?isDesigner=1&size=2000`
    );
    dispatch({ type: GET_DESIGNERS, payload: response.data.content });
  } catch (e) {}
};

export const getDesignersCount = () => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.1.111:9090/account/showdesigners?isDesigner=1`
    );
    dispatch({
      type: GET_DESIGNERS_COUNT,
      payload: response.data.totalElements
    });
  } catch (e) {}
};

export const sortDesignersByDate = () => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.1.111:9090/account/showdesigners?isDesigner=1&size=2000&sort=creationdate,desc`
    );
    dispatch({ type: SORT_DESIGNERS_BY_DATE, payload: response.data.content });
  } catch (e) {}
};

export const sortDesignersByLikes = () => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.1.111:9090/account/mostliked`
    );
    dispatch({ type: SORT_DESIGNERS_BY_LIKES, payload: response.data });
  } catch (e) {}
};

export const getDesignersByType = id => async dispatch => {
  try {
    console.log();
    const response = await axios.get(
      `http://192.168.1.111:9090/account/getaccountstype/?type=${id}`
    );
    dispatch({ type: GET_DESIGNERS_BY_TYPE, payload: response.data });
  } catch (e) {}
};
