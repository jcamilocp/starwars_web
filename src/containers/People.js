import { useEffect, useState } from "react";
import { useAuth } from "../components/auth";
import { getPeople } from "../requests/client";
import CardList from "../components/CardList";

const People = () => {
  const [people, setPeople] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    getPeople(auth.token)
      .then((response) => {
        if(response.status === 200)
          setPeople(response.data.people)

      })
      .catch((err) => {
        if(err.response.status === 401)
          auth.processSessionExpired();

      });
  }, [])

  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">People</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        <CardList resourceList={people} fatherClass="w-1/3" resourceName="people" />
      </div>
    </div>
  );
}

export default People;
