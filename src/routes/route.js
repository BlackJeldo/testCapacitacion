import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Register from '../components/register/register';
import Change from '../components/changePassword/changePass';
import Login from '../components/login/login';
import Home from '../components/home/home';
import Rol from '../components/rol/listRol';
import AddRol from '../components/rol/addRol';
import AddPerson from '../components/person/addPerson';
import ListPerson from '../components/person/listPerson';
import Parametrization from '../components/parametrization/parametrization';

const Routes = () => {

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setRoute(JSON.parse(localStorage.getItem('user')).listRoleXPantallas);
      console.log('mi primer cambio de repositorio');
    }
  }, []);

  const searchRoute = (props) => route.filter(
    // eslint-disable-next-line react/prop-types
    // (team) => team && (team.nombre).toLowerCase() === props.toLowerCase());
    (team) => true);

  const defaultRoute = () => (
    <>
      <Route path={'/new-user'}>
        <Register />
      </Route>
      <Route exact path={'/'}>
        <Link to={'/new-user'}>
          <button>Redirect Add User</button>
        </Link>
      </Route>

      <Route path={'/change-pass'}>
        <Change />
      </Route>
      <Route exact path={'/'}>
        <Link to={'/change-pass'}>
          <button>Change password</button>
        </Link>
      </Route>

      <Route path={'/login'}>
        <Login />
      </Route>
      <Route exact path={'/'}>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
      </Route>
    </>
  );

  return (
    <>
      {defaultRoute()}
      <Route exact path={'/home'}>
        {searchRoute('home').length > 0
          ? <Home/>
          : 'NOT FOUND 404'}
      </Route>
      <Route exact path={'/rol'}>
        {/* {searchRoute('home').length > 0 */}
           <Rol/>
          {/* : 'NOT FOUND 404'} */}
      </Route>
      <Route exact path={'/add-rol'}>
        {searchRoute('home').length > 0
          ? <AddRol/>
          : 'NOT FOUND 404'}
      </Route>
      <Route exact path={'/inicio'}>
        {/* {searchRoute('home').length > 0 */}
           <AddRol/>
          {/* : 'NOT FOUND 404'} */}
      </Route>
      <Route exact path={'/ho'}>
        {/* {searchRoute('home').length > 0 */}
           <Home/>
          {/* : 'NOT FOUND 404'} */}
      </Route>
      <Route exact path={'/add-person'}>
        {/* {searchRoute('home').length > 0 */}
           <AddPerson/>
          {/* : 'NOT FOUND 404'} */}
      </Route>
      <Route exact path={'/list-person'}>
        {/* {searchRoute('home').length > 0 */}
           <ListPerson/>
          {/* : 'NOT FOUND 404'} */}
      </Route>
      <Route exact path={'/parametrization'}>
        {/* {searchRoute('home').length > 0 */}
           <Parametrization/>
          {/* : 'NOT FOUND 404'} */}
      </Route>
    </>
  )
}

export default Routes;