import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const CardList = ({resourceList, fatherClass, resourceName}) => {
  const navigate = useNavigate();

  const resolveTitle = (resource) => {
    return resource.name ? resource.name : resource.title;
  };

  const handleClick = (resourceId) => {
    navigate(`/${resourceName}/${resourceId}`);
  };

  return (
    <>
      {resourceList.map(
        (resource) =>
          <Card key={resource.id}
                title={resolveTitle(resource)}
                info={resource} fatherClass={fatherClass}
                clickHandler={() => handleClick(resource.id)}
          ></Card>
        )
      }
    </>
  )
};

export default CardList;
