import React from 'react';
import {
  Card, CardText, CardBody, CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import AudiLogo from './../../resource/background/Logo.png';

const NavCard = (props) => {
  const { title, subTitle, description, route } = props
  return (
    <div className={'shadow-box'}>
      <Link to={`/${route}`}>
        <Card className={'focus-color left'}>
          <CardBody>
            <Row>
              <Col xs="8" sm="8">
                <CardTitle tag="h3">{title}</CardTitle>
              </Col>
              <Col xs="2" sm="2">
                <img src={AudiLogo} alt={'logo'} style={{ width: '50px' }} />
              </Col>
            </Row>
            <CardTitle tag="h4">{subTitle}</CardTitle>
            <hr />
            <CardText tag="h6">{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default NavCard;
