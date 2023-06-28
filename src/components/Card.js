const Card = ({title, info, clickHandler, fatherClass}) => {

  const resolveClicker = () => {
    return clickHandler ? " hover:bg-gray-200 cursor-pointer" : "";
  };

  const toTitleCase = (s) => (
    s.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())
  );

  return (
	<div className={fatherClass} onClick={clickHandler}>
    <div className={`bg-white  p-4 m-3 rounded ${resolveClicker()}`}>
      <div className="text-lg font-bold"> {title} </div>
        { Object.keys(info).filter((key) => key !== 'planet' && key !== 'id' ).map((key) => {
          return <div key={`${key}-${info.id}`}>{`${toTitleCase(key)}: ${info[key]}`}</div>
        })}
      </div>
    </div>
	);
};

export default Card;
