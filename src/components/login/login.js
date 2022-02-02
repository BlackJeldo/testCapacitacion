import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';
import DataApi from '../../api/LoginApi';
import '../login/login.css';
import Alert from '../alert/alert';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'


const Login = () => {

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState('');
  const [userError, setUserError] = useState(false);
  const [check, setCheck] = useState(true);
  const [alertMessage, setAlertMessage] = useState();

  const login = () => {
    if (validateFields()) {
      DataApi.loginUser({
        user, password
      }).then(() => {
        setAlertMessage({
          type: 'success',
          message: 'Logeado Exitosamente'
        });
      }).catch((e) => alert(e));
    }
  }

  useEffect(() => {
    setPasswordError(false);
  }, [password]);

  useEffect(() => {
    setUserError(false);
  }, [user]);

  const validateFields = () => {
    let validate = true;
    if (password.length <= 0) {
      setPasswordError(true);
      validate = false;
    }
    else if (user.length <= 0) {
      setUserError(true);
      validate = false;
    }
    return validate;
  }

  return (
    <div className="containers" >
      <Form>
        <CssBaseline />
        <FormGroup>
          <h3 className="tittle">Login</h3>
          <Row>
            <Col xs="6" sm="3">
              <div className="user">
              <FontAwesomeIcon icon={faUser} />
              </div>
            </Col>
            <Col xs="6" sm="9">
              <Input className={userError ? 'error' : ''} id="labels" type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="6" sm="3">
            <div className="user">
              <FontAwesomeIcon icon={faLock} />
              </div>
            </Col>
            <Col xs="6" sm="9">
              <Input className={passwordError ? 'error' : ''} id="labels" type="password" placeholder="contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Col>
          </Row>
          <br />
          <Input
            onChange={() => setCheck(!check)}
            type="checkbox" />{' '}
          <Label check style={{ marginLeft: "2%" }}>  Acepto politica de <br /> tratamiento de datos.
                    </Label>
          <Row>
            <Button style={{ marginLeft: "43%", marginTop: "2%", backgroundColor:"orange", fontWeight:"bold", border:"none", borderRadius:"10px", width:"25%" }}
             xs="6" sm="3" className="btn btn-primary" disabled={check} onClick={() => login()}>
              Ingresar
                        </Button>
          </Row>
          {alertMessage &&
            <Alert type={alertMessage.type} message={alertMessage.message} autoclose={5000}></Alert>
          }
        </FormGroup>
      </Form>
    </div>
  );
}
export default Login;