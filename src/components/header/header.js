import React, { useMemo, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import AudiLogo from './../../resource/background/Logo.png';
import '../header/header.css'

const Header = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  useMemo(() => {
    if (localStorage.getItem('user')) {
      const { email, name, surname } = JSON.parse(localStorage.getItem('user'));
      setName(`${name} ${surname}`);
      setEmail(email);
    }
  }, [])

  const logOut = () => {
    localStorage.removeItem('user');
    setName('');
    setEmail('');
  }

  return (
    <div id={'header'} className={'shadow-box center'} style={{ marginRight: '30px', background: 'white' }}>
      <Row>
        <Col xs="2" sm="2" style={{ margin: 'auto', fontSize: '13pt' }} classname={'title'}>
          <b> Aprobación de usuarios</b>
        </Col>
        <Col xs="8" sm="8" />
        <Col xs="2" sm="2" >
          <Row>
            <Col xs="8" sm="8" style={{ margin: 'auto' }}>
              <span style={{ fontSize: '12pt' }}>{name}</span><br />
              <span style={{ fontSize: '8pt' }}>{email}</span><br />
            </Col>
            <Col xs="4" sm="4" >
              <Link to={'/login'}>
                <img src={AudiLogo} alt={'logo'} style={{ height: '50px' }}
                  onClick={() => logOut()} />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Header;