const Input = ({label, type, name, clazz, value, setValue, required = false}) => {
  return (
    <div className={`flex flex-col ${clazz}`}>
      <label>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        required={required}
        className="border border-solid outline-1 border-blue-100"
        onChange={e => setValue(e.target.value)}
        />
      {/*errorFuc(name)*/}
    </div>
  );
};

export default Input;