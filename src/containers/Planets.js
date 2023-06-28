import { useEffect, useState } from "react";
import { useAuth } from "../components/auth";
import { getPlanets } from "../requests/client";
import CardList from "../components/CardList";

const Planets = () => {
  const [planetList, setPlanetList] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    getPlanets(auth.token)
      .then((response) => {
        if(response.status === 200){
          setPlanetList(response.data.planets)
        }
      })
      .catch((err) => {
        if(err.response.status === 401){
          auth.processSessionExpired();
        }
      });
  }, []);


  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">Planets</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        <CardList resourceList={planetList} fatherClass="w-1/3" resourceName="planets" />
      </div>
    </div>
  );
}

export default Planets;
