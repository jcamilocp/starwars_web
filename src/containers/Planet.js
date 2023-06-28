import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../components/auth";
import Card from "../components/Card";
import CardList from "../components/CardList";
import { getPlanet, getPlanetPeople, getPlanetFilms } from "../requests/client";

const Planet = () => {
  const [currentPlanet, setCurrentPlanet] = useState({});
  const [peopleList, setPeopleList] = useState([]);
  const [filmList, setFilmList] = useState([]);

  const auth = useAuth();
  const params = useParams();

  useEffect(() => {
    getPlanet(params.planetId, auth.token)
      .then((response) => {
        if(response.status === 200){
          setCurrentPlanet(response.data.planet)
        }
      });
  }, []);

  useEffect(() => {
    getPlanetPeople(params.planetId, auth.token)
      .then((response) => {
        if(response.status === 200){
          setPeopleList(response.data.people)
        }
      })
      .catch((err) => { console.log(err) });;
  }, []);

  useEffect(() => {
    getPlanetFilms(params.planetId, auth.token)
      .then((response) => {
        if(response.status === 200){
          setFilmList(response.data.films)
        }
      })
      .catch((err) => { console.log(err) });
  }, []);

  return (
    <>
      <div className="text-2xl text-white">{`Planet: ${currentPlanet.name}`}</div>
      <div className="flex flex-col w-full items-center">
        <Card title="Details" info={currentPlanet} fatherClass="w-1/2 text-center" />
      </div>
      <div>
        <div className="text-xl text-white text-center py-6">People:</div>
        <div className="flex flex-wrap w-full">
          <CardList resourceList={peopleList} fatherClass="w-1/3" resourceName="people" />
        </div>
      </div>
      <div>
      <div className="text-xl text-white text-center py-6">Films:</div>
        <div className="flex flex-wrap w-full">
          <CardList resourceList={filmList} fatherClass="w-1/2" resourceName="films" />
        </div>
      </div>
    </>
  );
};

export default Planet;