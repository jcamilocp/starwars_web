import React from 'react';
import routes from './routes.json';
import Navbar from '../components//Navbar';
import Home from '../containers/Home';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Planets from '../containers/Planets';
import Planet from '../containers/Planet';
import People from '../containers/People';
import Person from '../containers/Person';
import Films from '../containers/Films';
import Film from '../containers/Film';
import { AuthProvider } from '../components/auth';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const RouteConfig = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
          <Route exact path={routes.login} element={<Login />} />
          <Route exact path={routes.signup} element={<SignUp />} />
          <Route exact path={routes.planets} element={<Planets />} />
          <Route path={`${routes.planets}/:planetId`} element={<Planet />} />
          <Route exact path={routes.people} element={<People />} />
          <Route path={`${routes.people}/:personId`} element={<Person />} />
          <Route exact path={routes.films} element={<Films />} />
          <Route path={`${routes.films}/:filmId`} element={<Film />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default RouteConfig;
