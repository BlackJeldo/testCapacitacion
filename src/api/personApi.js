import { api, escalateError, getResponseData } from './index';

export default class AllyApi {
  static person(data) {
    const { name } = data;
    return api.post('v1/users/save', {
      name,
    })
      .then(getResponseData)
      .catch(escalateError);
  }
}