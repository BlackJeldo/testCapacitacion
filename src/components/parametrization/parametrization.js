import React, { useMemo } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import DataApi from '../../api/rolApi'
import './addPerson.css';
import Modals from '../../modal/modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faPencilAlt, faCloudDownloadAlt, faDownload, faSearch, faFilter, faChartBar, faFileAlt, faTrashAlt, faEnvelope,faPrint} from '@fortawesome/free-solid-svg-icons'
const Parametrization = () => {
//   useMemo(() => {
//     DataApi.listRol()
//     .then((todos) => {
//       console.log(todos);
//     })
//   }, []);
  return (
    <div className={'sub-action'}>
      {/* <Link to={'/add-person'}> */}
        <Button className={'button-principal'}>+ Cargar Excel</Button>
      {/* </Link> */}
      <Button className={'button-principal'} style={{marginLeft:'1%'}}>+ Nuevo Hallazgo</Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faSave} size="3x" className="ico-save"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faPencilAlt} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faCloudDownloadAlt} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faDownload} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faSearch} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faFilter} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faChartBar} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faFileAlt} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faTrashAlt} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faEnvelope} size="3x" className="ico-pencil"/></Button>
      <Button className="btn-ico"><FontAwesomeIcon icon={faPrint} size="3x" className="ico-pencil"/></Button>
      
      
      

      
      <Table id={'tableRol'} className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Macroproceso</th>
            <th>Proceso</th>
            <th>Nivel <br/>de riesgo </th>
            <th>Fuente<br/>de hallazgo</th>
            <th>Área <br/> con novedad</th>
            <th>Detalle<br/>Novedad</th>
            <th>Cuantia<br/>Material</th>
            <th>Cuantia<br/> Recuperada</th>
            <th>Pérdida<br/> total</th>
            <th>Componente<br/> COSO</th>
            <th>Hay<br/> fraude</th>
            <th>Plan<br/> de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Logistica</td>
            <td>Inventario</td>
            <td><p style={{backgroundColor:'red',color:'white',textAlign:'center',borderRadius:'5px'}}>Muy Alto</p></td>
            <td>Auditoria</td>
            <td>Producto terminado</td>
            <td>Diferencia de $</td>
            <td>$240.000</td>
            <td>$0</td>
            <td>$240.000</td>
            <td>Actividad a contr</td>
            <td>Si</td>
            <td style={{backgroundColor:'gray',color:'white',textAlign:'center'}}>$0</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Parametrization;
