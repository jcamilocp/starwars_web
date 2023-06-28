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
          console.log(response.data.people);
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
      .catch((err) => { console.log(err) });
  }, []);

  return (
    <>
      <div className="text-2xl text-white">{`People: ${person.name}`}</div>
      <div className="flex w-full items-center">
        <Card title="Details" info={person} fatherClass="w-1/2 text-center" />
        {person.planet &&
          <Card title="Planet" info={person.planet} fatherClass="w-1/2 text-center" />
        }
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

export default Person;