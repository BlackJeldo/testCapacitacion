import React from 'react';
import { Button, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';
import { Col, Row } from 'reactstrap';


const AddPerson = (props) => {
  return (
    <div className={'sub-action'}>
      <Row>
      <Col xs="12" sm="12">
          <Row>
            <Col xs="6" sm="6">
              <Button className={'button-principal'}>Guardar</Button>
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="12">
          <Row>
            <Col xs="2" sm="2">
              <Label for="exampleEmail">Nombre persona</Label>
            </Col>
            <Col xs="6" sm="6">
              <Input style={{width:"30%",backgroundColor:"transparent"}} type="text" placeholder="Nombre Persona" />
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="12">
          <Row>
            <Col xs="2" sm="2">
              <Label for="exampleEmail">Descripcion Persona</Label>
            </Col>
            <Col xs="6" sm="6">
              <Input style={{width:"30%",backgroundColor:"transparent"}} type="textarea" placeholder="Descripcion Persona" />
            </Col>
          </Row>
        </Col>
      </Row>
      <br/>
      <Table id={'tableRol'} className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre persona</th>
            <th>Descripción</th>
            <th>Permisos Asociados</th>
            <th>Usuarios Asociados</th>
            <th>Permisos</th>
            <th>Usuarios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Input style={{backgroundColor:"transparent"}} type="text"/></td>
            <td><Input style={{backgroundColor:"transparent"}} type="text"/></td>
            <td><Input style={{backgroundColor:"transparent"}} type="text"/></td>
            <td><Input style={{backgroundColor:"transparent"}} type="text"/></td>
            <td> <Button className="btn_aprobacion" >Ver permisos</Button></td>
            <td><Button className="btn_aprobacion" >Editar usuarios</Button></td>
          </tr>
        </tbody>
        </Table>
    </div>
  );
}
export default AddPerson;
