import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuth } from "../components/auth";
import { films } from "../requests/client";

const Films = () => {
  const [filmList, setFilmList] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    films(auth.token)
      .then((response) => {
        if(response.status === 200){
          setFilmList(response.data.films)
        }
      });
  })

  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">Films</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        {
          filmList.map((film) => <Card key={film.id} title={film.name} info={film} ></Card>)
        }
      </div>
    </div>
  );
}

export default Films;
