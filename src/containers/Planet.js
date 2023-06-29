import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../components/auth";
import { getPlanet } from "../requests/client";
import Card from "../components/Card";
import CardList from "../components/CardList";

const Planet = () => {
  const [planet, setPlanet] = useState({});
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);

  const auth = useAuth();
  const params = useParams();

  useEffect(() => {
    getPlanet(params.planetId, auth.token)
      .then((response) => {
        if(response.status === 200){
          const fetchedPlanet = response.data.planet.data.attributes;
          setPlanet(fetchedPlanet);
          setFilms(fetchedPlanet.films);
          setPeople(fetchedPlanet.people);
        }
      })
      .catch((err) => {
        if(err.response.status === 401)
          auth.processSessionExpired();
      });
  }, []);

  return (
    <>
      <div className=" mt-6 text-2xl text-white">{`Planet: ${planet.name}`}</div>
      <div className="flex flex-col w-full items-center">
        <Card title="Details" info={planet} fatherClass="w-1/2 text-center" />
      </div>
      <div className="w-full p-8">
        <div className="text-xl text-white text-center py-6">People:</div>
        <div className="flex flex-wrap px-8 w-full">
          <CardList resourceList={people} fatherClass="w-1/3" resourceName="people" />
        </div>
      </div>
      <div className="w-full p-8">
        <div className="text-xl text-white text-center py-6">Films:</div>
        <div className="flex flex-wrap px-8 w-full">
          <CardList resourceList={films} fatherClass="w-1/2" resourceName="films" />
        </div>
      </div>
    </>
  );
};

export default Planet;
