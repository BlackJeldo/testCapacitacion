import React, { useMemo, useState } from 'react';
import { Table, Button } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import DataApi from '../../api/rolApi'
import ButtonFocus from '../focus/button/button';
import './addRol.css';

const Example = () => {
  const [listRol, setListRol] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [rol, setRol] = useState(false);

  useMemo(() => {
    DataApi.listRol()
      .then((todos) => {
        setListRol(todos);
      })
  }, []);

  const deleteRol = (id, i) => {
    DataApi.deleteRol(id)
      .then(() => {
        changeItem(i);
      });
  }

  const modifyRol = (rol) => {
    setRol(rol);
    setRedirect(true);
  }

  const changeItem = (i) => {
    // 1. Make a shallow copy of the items
    const items = [...listRol];
    // 2. Make a shallow copy of the item you want to mutate
    const item = { ...items[i] };
    // 3. Replace the property you're intested in
    item.rol.status = !item.rol.status;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[i] = item;
    // 5. Set the state to our new copy
    setListRol([...items]);
  }

  if (redirect) {
    return <Redirect to={{
      pathname: '/add-rol',
      state: { rol },
    }} />;
  }

  return (
    <div className={'sub-action'}>
      <Link to={'/add-rol'}>
        <ButtonFocus text={'Adicionar'} />
      </Link>
      <div className="label_txt">
        <label>Total registros: 1 </label>
        <label>Registros por pagina: 10</label>
      </div>
      <Table id={'tableRol'} className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Retirar</th>
            <th>Modificar información</th>
          </tr>
        </thead>
        <tbody>
          {listRol.map((it, i) => (
            <tr>
              <td>{it.rol.name}</td>
              <td>{it.rol.description}</td>
              <td>{!it.rol.status ? 'Eliminado' : 'Creado'}</td>
              <td>
                <Button color={"primary"} className={'button-principal'} onClick={() => deleteRol(it.rol.id, i)}>
                  X
                </Button>
              </td>
              <td>
                <Button color={"primary"} className={'button-principal'} onClick={() => modifyRol(it)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Example;
