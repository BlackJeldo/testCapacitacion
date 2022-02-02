import React, { useEffect, useMemo, useState } from 'react';
import { Label, Input } from 'reactstrap';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import DataApi from '../../api/screenApi'
import DataApiRol from '../../api/rolApi'
import ButtonFocus from '../focus/button/button';
import BackIcon from '../../resource/background/backIcon.png'

const Example = () => {
  const location = useLocation();

  const [screen, setScreen] = useState([]);
  const [screenCheck, setScreenCheck] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState();
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState();
  const [screensByRole, setScreensByRole] = useState([]);

  useMemo(() => {
    DataApi.listScreen()
      .then((todos) => setScreen(todos.map((its) => ({ ...its, checked: false }))));
  }, []);

  useEffect(() => {
    if (location.state) {
      const data = location.state.rol;
      setName(data.rol.name);
      setDescription(data.rol.description);
      setId(data.rol.id);
      setScreensByRole(data.screensByRole);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screensByRole || screen) {
      setScreenCheck(selectedRoute());
    }
    // eslint-disable-next-line
  }, [screensByRole, screen])

  const selectedRoute = () => {
    const data = screen.map((it) => {
      if (searchRoute(it.id) > 0) {
        return { ...it, checked: true }
      }
      return it;
    });
    return data;
  }

  const searchRoute = (idRoute) => ((screensByRole || []).filter((it) => it.id === idRoute)).length;

  const addRol = () => {
    if (validateFields()) {
      DataApiRol.addRol({ name, description, screensByRole })
        .then(() => {
          setRedirect(true);
        })
    }
  }

  const modifyRol = () => {
    if (validateFields()) {
      DataApiRol.modifyRol({ name, description, id, screensByRole })
        .then(() => {
          setRedirect(true);
        })
    }
  }

  const addRoute = (route) => {
    setScreensByRole([...screensByRole, route]);
  }

  const removeRoute = (screen) => {
    const data = screensByRole.filter((it, j) => it.id !== screen.id);
    setScreensByRole(data);
  }

  const managementRoute = (check, it, i) => {
    const data = screenCheck;
    if (check) {
      data[i] = { ...data[i], checked: true };
      addRoute(it);
    } else {
      data[i] = { ...data[i], checked: false };
      removeRoute(it);
    }
    setScreenCheck(data);
  }

  useEffect(() => {
    setNameError(false);
  }, [name]);

  useEffect(() => {
    setDescriptionError(false);
  }, [description]);

  const validateFields = () => {
    let validate = true;
    if (name.length <= 0) {
      setNameError(true);
      validate = false;
    }
    else if (description.length <= 0) {
      setDescriptionError(true);
      validate = false;
    }
    else if (screensByRole.length <= 0) {
      validate = false;
    }
    return validate;
  }

  if (redirect) {
    return <Redirect to={{
      pathname: '/rol',
    }} />;
  }

  return (
    <div className={'sub-action'}>
      <Row>
        <Col xs="12" sm="12">
          <Row>
            <Col xs="1" sm="1">
              <Label for="exampleEmail">Nombre</Label>
            </Col>
            <Col xs="2" sm="2">
              <Input type="text" placeholder="Nombre Rol" value={name}
                onChange={(e) => setName(e.target.value)} className={nameError ? 'error' : ''} />
            </Col>
          </Row>
          <br />
        </Col>
        <Col xs="12" sm="12">
          <Row>
            <Col xs="1" sm="1">
              <Label for="exampleEmail">Descripcion</Label>
            </Col>
            <Col xs="2" sm="2">
              <Input type="textarea" placeholder="Descripcion Rol" value={description}
                onChange={(e) => setDescription(e.target.value)} className={descriptionError ? 'error' : ''} />
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="12" className={'sub-action'}>
          <legend>Rutas</legend>
          {screenCheck.map((it, i) => (
            <>
              <Label>
                <Input type="checkbox" onClick={(e) => managementRoute(e.target.checked, it, i)}
                  checked={it.checked} />
                &emsp;&nbsp;&nbsp;{it.name}
              </Label>
              <br />
            </>
          ))}
        </Col>
        <Col xs="12" sm="12" className={'center'}>
          {!location.state
            ? <ButtonFocus text={'Agregar rol'} onClick={() => addRol()} />
            : <ButtonFocus text={'Modificar rol'} onClick={() => modifyRol()} />}
        </Col>
      </Row>
      <div className={'float'}>
        <Link to={'/rol'}>
          <img src={BackIcon} alt={'back'} width={'70'} height={'70'} />
        </Link>
      </div>
    </div>
  );
}
export default Example;
