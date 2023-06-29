import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../components/auth";
import { getFilm } from "../requests/client";
import Card from "../components/Card";
import CardList from "../components/CardList";

const Film = () => {
  const [film, setFilm] = useState({});
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);

  const auth = useAuth();
  const params = useParams();

  useEffect(() => {
    getFilm(params.filmId, auth.token)
      .then((response) => {
        if(response.status === 200){
          const fetchedFilm = response.data.film.data.attributes
          setFilm(fetchedFilm);
          setPeople(fetchedFilm.people);
          setPlanets(fetchedFilm.planets);
        }
      })
      .catch((err) => {
        if(err.response.status === 401){
          auth.processSessionExpired();
        }
      });;
  }, []);

  return (
    <>
      <div className="mt-6 text-2xl text-white">{`Film: ${film.title}`}</div>
      <div className="flex flex-col w-full items-center">
        <Card title="Details" info={film} fatherClass="w-3/4 text-center" />
      </div>
      <div>
        <div className="text-xl text-white text-center py-6">Planets:</div>
        <div className="flex flex-wrap w-full">
          <CardList resourceList={planets} fatherClass="w-1/3" resourceName="planets" />
        </div>
      </div>
      <div>
      <div className="text-xl text-white text-center py-6">People:</div>
        <div className="flex flex-wrap px-8 w-full">
          <CardList resourceList={people} fatherClass="w-1/3" resourceName="people" />
        </div>
      </div>
    </>
  );
};

export default Film;
