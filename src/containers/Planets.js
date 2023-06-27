import Card from "../components/Card";

const info = {
  name: "Tierra",
  diameter: "Some kilometers",
  rotation_period: "Some days",
  orbital_period: "Some years",
  gravity: "A number",
  population: "A big number",
  climate: "Kinda good",
  terrain: "Bit complex",
  surface_water: "A couple, yes"
};


const Planets = () => {
  return (
    <div className="w-full px-16">
      <div className="text-center text-4xl">Planets</div>
      <div className="py-4 flex items-center w-full gap-3">
        <Card title={info.name} info={info} ></Card>
        <Card title={info.name} info={info} ></Card>
        <Card title={info.name} info={info} ></Card>
      </div>
    </div>
  );
}

export default Planets;