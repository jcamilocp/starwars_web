import axios from 'axios';

const HOST = 'http://localhost:8000'

const login = (body) => axios.post(
  `${HOST}/v1/login`,
  body
);

const logout = (authToken) => axios.delete(
  `${HOST}/v1/logout`,
  { headers: { Authorization: authToken } }
);

const signup = (body) => axios.post(
  `${HOST}/v1/signup`,
  body
);

const getPlanets = (authToken) => axios.get(
  `${HOST}/v1/planets`,
  { headers: { Authorization: authToken } }
);

const getPlanet = (id, authToken) => axios.get(
  `${HOST}/v1/planets/${id}`,
  { headers: { Authorization: authToken } }
);

const getPlanetPeople = (id, authToken) => axios.get(
  `${HOST}/v1/planets/${id}/people`,
  { headers: { Authorization: authToken } }
);

const getPlanetFilms = (id, authToken) => axios.get(
  `${HOST}/v1/planets/${id}/films`,
  { headers: { Authorization: authToken } }
);

const getPeople = (authToken) => axios.get(
  `${HOST}/v1/people`,
  { headers: { Authorization: authToken } }
);

const getPerson = (id, authToken) => axios.get(
  `${HOST}/v1/people/${id}`,
  { headers: { Authorization: authToken } }
);

const getPersonFilms = (id, authToken) => axios.get(
  `${HOST}/v1/people/${id}/films`,
  { headers: { Authorization: authToken } }
);

const getFilms = (authToken) => axios.get(
  `${HOST}/v1/films`,
  { headers: { Authorization: authToken } }
);

const getFilm = (id, authToken) => axios.get(
  `${HOST}/v1/films/${id}`,
  { headers: { Authorization: authToken } }
);

const getFilmPeople = (id, authToken) => axios.get(
  `${HOST}/v1/films/${id}/people`,
  { headers: { Authorization: authToken } }
);

const getFilmPlanets = (id, authToken) => axios.get(
  `${HOST}/v1/films/${id}/planets`,
  { headers: { Authorization: authToken } }
);

export {
  login,
  logout,
  signup,
  getPlanets,
  getPlanet,
  getPlanetPeople,
  getPlanetFilms,
  getPeople,
  getPerson,
  getPersonFilms,
  getFilms,
  getFilm,
  getFilmPeople,
  getFilmPlanets,
};
