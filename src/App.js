import React from 'react';
import { Router, Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './App.css';
import history from './history';
import Routes from './routes/route'
import Header from './components/header/header'
import TitleHolder from './data/title-data'

function App() {
  return (
    <div className={'App center'}>
      <h5>mensaje</h5>
      textop plano
      <TitleHolder>
        <Router history={history}>
		<h3>asd</h3>


    <h2>ERRORES GENERADOS</h2>
          <Row>
            <Col xs="2" sm="2">
              <Row>
                <Col xs="2" sm="2" />
                <Col xs="10" sm="10">
                  <Link to={'/home'}>
                    <div className={'focus-color sub-window center shadow-box'}
                      style={{ fontSize: '13pt', padding: '10px' }}>
                      <b>FOCUS AUDIT APP</b>
                    </div>
                  </Link>
                  <div id={'second-box'} className={'focus-color'} />
                </Col>
              </Row>
            </Col>
            <Col xs="10" sm="10">
              <Header />
              <Routes />
            </Col>
          </Row>
        </Router>
      </TitleHolder>
    </div>
  );
}

export default App;
