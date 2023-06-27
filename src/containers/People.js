import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuth } from "../components/auth";
import { people } from "../requests/client";

const People = () => {
  const [peopleList, setPeopleList] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    people(auth.token)
      .then((response) => {
        if(response.status === 200){
          setPeopleList(response.data.people)
        }
      });
  })

  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">People</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        {
          peopleList.map((person) => <Card key={person.id} title={person.name} info={person} ></Card>)
        }
      </div>
    </div>
  );
}

export default People;
