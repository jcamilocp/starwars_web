import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";
import { getPlanets } from "../requests/client";
import CardList from "../components/CardList";

const Planets = () => {
  const [planetList, setPlanetList] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getPlanets(auth.token)
      .then((response) => {
        if(response.status === 200){
          setPlanetList(response.data.planets)
        }
      }).catch(() => {
        auth.logoutUser();
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
