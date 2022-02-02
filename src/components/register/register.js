import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Input, Col, Row, Button, Alert } from 'reactstrap';
import Recaptcha from 'react-recaptcha';
import '../register/register.css'
import DataApi from '../../api/RegisterApi';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faIdCard, faEnvelope, faIdCardAlt} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [typeDocument, setTypeDocument] = useState('');
  const [numDocument, setNumDocument] = useState('');
  const [numDocumentError, setNumDocumentError] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [captcha, setCaptcha] = useState(true);

  const register = () => {
    if(validateFields()){
      DataApi.registerUser({
        document: numDocument, tipoDocument: typeDocument,
        surname: `${name} ${lastName}`, email
      })
        .then(() => {
          alert('registro exitoso');
          <Alert color="success">Registro Exitoso</Alert>
        })
        .catch((e) => alert(e));
    }
  }

  const captchaLoaded = () => {
    setCaptcha(false);
  }

  useEffect(() => {
    setNumDocumentError(false);
  },[numDocument]);

  useEffect(() => {
    setNameError(false);
  },[name]);

  useEffect(() => {
    setLastNameError(false);
  },[lastName]);

  useEffect(() => {
    setEmailError(false);
  },[email]);


  const validateFields = () => {
    let validate = true;
    if(numDocument.length <= 0){
      setNumDocumentError(true);
      validate = false;
    }
    else if(name.length <= 0){
      setNameError(true);
      validate = false;
    }
    else if(lastName.length <= 0){
      setLastNameError(true);
      validate = false;
    }
    else if(lastName.length <= 0){
      setEmailError(true);
      validate = false;
    }
    return validate;
  }

  return (
    <div className="containers">
      <Form>
        <FormGroup>
          <h3 className="tittle">Registro</h3>
          <Row>
            <Col xs="6" sm="3">
            <div className="user">
              <FontAwesomeIcon icon={faIdCardAlt}/>
              </div>
            </Col>
            <Col xs="6" sm="9">
              <Input id="labels" type="select" style={{ height: "30px" }} placeholder="Tipo de documento" value={typeDocument}
                onChange={(e) => setTypeDocument(e.target.value)}>
                <option>C.C</option>
                <option>C.C</option>
                <option>C.C</option>
              </Input>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="6" sm="3">
            <div className="user">
              <FontAwesomeIcon icon={faIdCard}/>
              </div>
            </Col>
            <Col xs="6" sm="9">
              <Input id="labels" type="text" placeholder="# Documento" value={numDocument}
                className={numDocumentError ? 'error' : ''} onChange={(e) => setNumDocument(e.target.value)} />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="6" sm="3">
            <div className="user">
              <FontAwesomeIcon icon={faUser}/>
              </div>
            </Col>
            <Col xs="6" sm="9">
              <Input  id="labels" type="text" placeholder="Nombres" value={name}
                className={nameError ? 'error' : ''} onChange={(e) => setName(e.target.value)} />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="6" sm="3">
            <div className="user">
              <FontAwesomeIcon icon={faUser}/>
              </div>
            </Col>
            <Col xs="6" sm="9">
              <Input  id="labels" type="text" placeholder="Apellidos" value={lastName}
                className={lastNameError ? 'error' : ''} onChange={(e) => setLastName(e.target.value)} />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="6" sm="3">
            <div className="user">
              <FontAwesomeIcon icon={faEnvelope}/>
              </div>
            </Col>
            <Col xs="6" sm="9">
              <Input  id="labels" type="email" placeholder="Email" value={email}
                className={emailError ? 'error' : ''} onChange={(e) => { setEmail(e.value) }} />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="3" sm="3" />
            <Col xs="6" sm="9">
              <Recaptcha render={'explicit'} verifyCallback={captchaLoaded}
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY} />
            </Col>
          </Row>
          <br />
          <Row>
            <Button style={{ marginLeft: "43%", marginTop: "2%", backgroundColor:"orange", fontWeight:"bold", border:"none", borderRadius:"10px", width:"25%" }}
             xs="6" sm="3" className="btn btn-primary"
              onClick={() => register()} disabled={captcha}>
              Registrar
            </Button>
          </Row>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Register;