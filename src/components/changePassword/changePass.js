import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Col, Row, Button } from 'reactstrap';
import Recaptcha from 'react-recaptcha';
import '../changePassword/changePassword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Change = () => {

    const [changePass, setChangePass] = useState('');
    const [changePassError, setChangePassError] = useState(false);
    const [newPass, setNewPass] = useState('');
    const [newPassError, setNewPassError] = useState(false);
    const [confirmPass, setConfirmPass] = useState('');
    const [confirmPassError, setConfirmPassError] = useState(false);
    const [captcha, setCaptcha] = useState('');

    //crear codifo con los campos del servicio

    const captchaLoaded = () => {
        setCaptcha(false);
    }

    useEffect(() => {
        setChangePassError(false);
    }, [changePass]);

    useEffect(() => {
        setNewPassError(false);
    }, [newPass]);

    useEffect(() => {
        setConfirmPassError(false);
    }, [confirmPass]);

    //crear validatefields para usarlo con el servicio 
    return (
        <div className="containers">
            <Form>
                <FormGroup>
                    <h3 className="tittle">Cambio de contraseña</h3>
                    <Row>
                        <Col xs="6" sm="3">
                            <div className="user">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                        </Col>
                        <Col xs="6" sm="9">
                            <Input id="labels" className={changePassError ? 'error' : ''} type="password" placeholder="Contraseña provisional" value={changePass} onChange={(e) => setChangePass(e.target.value)} />
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
                            <Input id="labels" className={newPassError ? 'error' : ''} type="password" placeholder="Nueva contraseña" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
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
                            <Input id="labels" className={confirmPassError ? 'error' : ''} type="password" placeholder="Confirmar nueva contraseña" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="3" sm="3" />
                        <Col xs="6" sm="9">
                            <Recaptcha render={'explicit'} verifyCallback={captchaLoaded}
                                sitekey={process.env.REACT_APP_RECAPTCHA_KEY} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Button style={{ marginLeft: "43%", marginTop: "2%", backgroundColor: "orange", fontWeight: "bold", border: "none", borderRadius: "10px", width: "25%" }}
                            xs="6" sm="3" className="btn btn-primary"
                            //onClick={() => changePass()} crear variable changePass 
                            disabled={captcha}>
                            Guardar
                        </Button>
                    </Row>
                </FormGroup>
            </Form>
        </div>
    );
}
export default Change;