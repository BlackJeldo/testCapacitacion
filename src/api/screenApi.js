import { apiUser, escalateError, getResponseData } from './index';
export default class RolApi {
  static listScreen() {
    return apiUser.get('/v1/screens')
    .then(getResponseData)
    .catch(escalateError);
  }
}