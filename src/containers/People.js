import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";
import { getPeople } from "../requests/client";
import CardList from "../components/CardList";

const People = () => {
  const [peopleList, setPeopleList] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getPeople(auth.token)
      .then((response) => {
        if(response.status === 200){
          setPeopleList(response.data.people)
        }
      }).catch(() => {
        auth.logoutUser();
      });;
  }, [])

  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl text-white pt-4">People</div>
      <div className="py-4 flex flex-wrap items-center w-full">
        <CardList resourceList={peopleList} fatherClass="w-1/3" resourceName="people" />
      </div>
    </div>
  );
}

export default People;
