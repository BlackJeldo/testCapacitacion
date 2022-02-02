import React, { useMemo } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataApi from '../../api/rolApi'
import './addPerson.css';
import Modals from '../../modal/modal';
const ListPerson = () => {
  useMemo(() => {
    DataApi.listRol()
    .then((todos) => {
      console.log(todos);
    })
  }, []);
  return (
    <div className={'sub-action'}>
      <Link to={'/add-person'}>
        <Button className={'button-principal'}>Adicionar Personas</Button>
      </Link>
      <div className="label_txt">
        <label>Total registros: 1 </label>
        <label>Registros por pagina: 10</label>
      </div>
      <Table id={'tableRol'} className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Correo Eléctronico</th>
            <th>Cargo</th>
            <th>Roles</th>
            <th>Estado</th>
            <th>Retirar</th>
            <th>Modificar información</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button color={"primary"} className={'button-principal'}>X</Button>
            </td>
            <td>
              <Button color={"primary"} className={'button-principal'}>X</Button>
              <Modals/>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ListPerson;
