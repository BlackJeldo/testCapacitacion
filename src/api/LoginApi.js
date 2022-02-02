import { api, escalateError, getResponseData } from './index';

export default class AllyApiLog {
  static loginUser(data) {
    const { user, password } = data;
    return api.post('v1/oauth/user', {
      user,
      password,
    }).then(getResponseData).catch(escalateError);
  }
}