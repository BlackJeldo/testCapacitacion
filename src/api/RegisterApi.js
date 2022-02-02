import { api, escalateError, getResponseData } from './index';

export default class AllyApi {
  static registerUser(data) {
      const {document, tipoDocument, surname, email} = data;
    return api.post('v1/userstemp/registrar',{
        document,
        tipoDocument,
        surname,
        email,
    })
      .then(getResponseData)
      .catch(escalateError);
  }
}
