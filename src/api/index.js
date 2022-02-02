import axios from 'axios';
import { v4 } from "uuid";

const apiURL = (process.env.REACT_APP_API_URL
  || 'http://54.224.120.238:8697/');
  const apiURLServ = (process.env.REACT_APP_API_URL_SERV
    || 'http://54.224.120.238:8696/');

const header = {
  'Content-Type': 'application/json',
};
export const headerUser = {
  'Content-Type': 'application/json',
  'X-RqUID': v4(),
  'X-User': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : '',
  'Authorization': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
};

export const api = axios.create({
  baseURL: apiURL,
  headers: header,
});

export const apiUser = axios.create({
  baseURL: apiURLServ,
  headers: headerUser,
});

export const getApiURL = () => apiURL;
export const getResponseData = (resp) => resp.data;

export const escalateError = (err) => {
  let errorFromResponse;
  try {
    errorFromResponse = err.response.data.error.toString();
  } catch (e) {
    errorFromResponse = undefined;
  }
  const newErr = new Error(errorFromResponse
    || (err instanceof Error
      ? err.message
      || err.toString()
      : typeof err === 'string' ? err : err.toString() || 'Error Inesperado'));
  try {
    newErr.data = err.response.data;
  } catch (e) {
  }
  throw newErr;
};


export default api;
