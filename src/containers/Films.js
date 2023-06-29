import { useEffect, useState } from "react";
import { useAuth } from "../components/auth";
import { getFilms } from "../requests/client";
import CardList from "../components/CardList";

const Films = () => {
  const [films, setFilms] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    getFilms(auth.token)
      .then((response) => {
        if(response.status === 200)
          setFilms(response.data.films)
      })
      .catch((err) => {
        if(err.response.status === 401)
          auth.processSessionExpired();
      });
  }, [])

  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">Films</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        <CardList resourceList={films} fatherClass="w-1/2" resourceName="films" />
      </div>
    </div>
  );
}

export default Films;
