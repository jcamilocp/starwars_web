const Card = ({title, info, clickHandler, fatherClass}) => {
  return (
	<div className={fatherClass} onClick={clickHandler}>
    <div className=" bg-white hover:bg-gray-200 p-4 m-3">
      <div className="text-lg font-bold"> {title} </div>
        { Object.keys(info).filter((key) => key !== 'planet' && key !== 'id' ).map((key) => {
          return <div key={`${key}-${info.id}`}>{`${key}: ${info[key]}`}</div>
        })}
      </div>
    </div>
	);
};

export default Card;
