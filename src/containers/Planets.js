import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuth } from "../components/auth";
import { planets } from "../requests/client";

const Planets = () => {
  const [planetList, setPlanetList] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    planets(auth.token)
      .then((response) => {
        if(response.status === 200){
          setPlanetList(response.data.planets)
        }
      });
  })

  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">Planets</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        {
          planetList.map((planet) => <Card key={planet.id} title={planet.name} info={planet} ></Card>)
        }
      </div>
    </div>
  );
}

export default Planets;
