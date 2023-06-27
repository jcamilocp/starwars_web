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

const planets = (authToken) => axios.get(
  `${HOST}/v1/planets`,
  { headers: { Authorization: authToken } }
);

const planet = (id, authToken) => axios.get(
  `${HOST}/v1/planets/${id}`,
  { headers: { Authorization: authToken } }
);

const people = (authToken) => axios.get(
  `${HOST}/v1/people`,
  { headers: { Authorization: authToken } }
);

const person = (id, authToken) => axios.get(
  `${HOST}/v1/people/${id}`,
  { headers: { Authorization: authToken } }
);

const films = (authToken) => axios.get(
  `${HOST}/v1/films`,
  { headers: { Authorization: authToken } }
);

const film = (id, authToken) => axios.get(
  `${HOST}/v1/films/${id}`,
  { headers: { Authorization: authToken } }
);

export {
  login,
  logout,
  signup,
  planets,
  planet,
  people,
  person,
  films,
  film,
};
