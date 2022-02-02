import { apiUser, escalateError, getResponseData } from './index';
export default class RolApi {
  static addRol(data) {
    const { name, description, screensByRole } = data;
    return apiUser.post('v1/rolexscreens/save', {
      "rol": {
        name,
        description
      },
      screensByRole
    })
      .then(getResponseData)
      .catch(escalateError);
  }

  static modifyRol(data) {
    const { name, description, id, screensByRole } = data;
    return apiUser.put('v1/rolexscreens/update', {
      "rol": {
        id,
        name,
        description
      },
      screensByRole
    })
      .then(getResponseData)
      .catch(escalateError);
  }

  static listRol() {
    return apiUser.get('/v1/rolexscreens/list')
      .then(getResponseData)
      .catch(escalateError);
  }

  static deleteRol(id) {
    return apiUser.delete(`v1/role/${id}`)
      .then(getResponseData)
      .catch(escalateError);
  }

  static searchRol(id) {
    return apiUser.delete(`v1/role/${id}`)
      .then(getResponseData)
      .catch(escalateError);
  }
}