import React from 'react';
import routes from './routes.json';
import Navbar from '../components//Navbar';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Planets from '../containers/Planets';
import People from '../containers/People';
import Films from '../containers/Films';
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
          <Route exact path={routes.planets} element={<Planets />} />
          <Route exact path={routes.people} element={<People />} />
          <Route exact path={routes.films} element={<Films />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default RouteConfig;
