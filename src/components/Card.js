const Card = ({title, info}) => {
  return (
	<div className="w-1/3">
    <div className=" bg-white p-4 m-3">
      <div className="text-lg font-bold"> {title} </div>
        { Object.keys(info).map((key) => {
          return <div key={`${key}-${info.id}`}>{`${key}: ${info[key]}`}</div>
        })}
      </div>
    </div>
	);
};

export default Card;
