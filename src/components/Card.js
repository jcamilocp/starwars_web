const Card = ({title, info}) => {
  return (
	<div className="w-1/3 h-60">
		<div className="text-lg font-bold"> {title} </div>
		{ Object.keys(info).map((key) => {
			return <div>{`${key}: ${info[key]}`}</div>
		})}
	</div>
	);
};

export default Card;