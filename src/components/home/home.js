import React from 'react';
import { Col, Row } from 'reactstrap';
import NavCard from '../navCard/navCard'

const Home = () => {
  return (
    <div id={'second-box'}>
      <Row>
        <Col xs="3" sm="3">
          <NavCard title={'Seguridad'} subTitle={'Roles'} description={'CRUD'} route={'rol'} />
        </Col>
        <Col xs="3" sm="3">
          <NavCard title={'Seguridad'} subTitle={'Personas'} description={'CRUD'} route={'list-person'} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
