import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";
import { getFilms } from "../requests/client";
import CardList from "../components/CardList";

const Films = () => {
  const [filmList, setFilmList] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getFilms(auth.token)
      .then((response) => {
        if(response.status === 200){
          setFilmList(response.data.films)
        }
      })
      .catch((err) => {
        auth.logoutUser();
      });
  }, [])

  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">Films</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        <CardList resourceList={filmList} fatherClass="w-1/2" resourceName="films" />
      </div>
    </div>
  );
}

export default Films;
