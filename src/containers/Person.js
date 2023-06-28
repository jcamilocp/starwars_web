import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../components/auth";
import Card from "../components/Card";
import CardList from "../components/CardList";
import { getPerson, getPersonFilms } from "../requests/client";

const Person = () => {
  const [person, setPerson] = useState({});
  const [filmList, setFilmList] = useState([]);

  const auth = useAuth();
  const params = useParams();

  useEffect(() => {
    getPerson(params.personId, auth.token)
      .then((response) => {
        if(response.status === 200){
          setPerson(response.data.people.data.attributes);
        }
      });
  }, []);

  useEffect(() => {
    getPersonFilms(params.personId, auth.token)
      .then((response) => {
        if(response.status === 200){
          setFilmList(response.data.films);
        }
      })
      .catch(() => { auth.logoutUser(); });
  }, []);

  return (
    <>
      <div className="mt-6 text-2xl text-white">{`Person: ${person.name}`}</div>
      <div className="flex w-full px-8 items-center">
        <Card title="Details" info={person} fatherClass="w-1/2 text-center" />
        {person.planet &&
          <Card title="Planet" info={person.planet} fatherClass="w-1/2 text-center" />
        }
      </div>
      <div>
      <div className="text-xl text-white text-center py-6">Films:</div>
        <div className="flex flex-wrap px-8 w-full">
          <CardList resourceList={filmList} fatherClass="w-1/2" resourceName="films" />
        </div>
      </div>
    </>
  );
};

export default Person;
