import logo from "../assets/images/logo.svg"
import react_logo from "../assets/images/react_logo.png"
import rails_logo from "../assets/images/rails_logo.png"

const Home = () => {
  return (
    <div className="flex flex-col items-center my-16 w-full">
      <div className="bg-white w-3/4 py-8 flex flex-col items-center rounded">
        <img className="h-72" src={logo} alt="StarWars" />
        <div className="text-2xl"> Application to list Planets, People and Films from the Star Wars API</div>
        <div className="text-lg pt-3"> This application was made for a technical assessment, by
          <a href= "https://www.linkedin.com/in/jcamilocp/" className="hover:underline">
            {" Juan Camilo Correa"}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-right py-16 text-white w-3/4">
        <div className="text-6xl">Discover the Galaxy!</div>
        <div className="text-4xl">With this awesome application, you will be able to explore the Galaxy. Know a lot of planets, a lot of people, and know films where the people acted in!</div>
      </div>

      <div className="flex flex-col items-right p-16 bg-white w-3/4 rounded">
        <div className="text-5xl text-center">This wonderful aplication was made with</div>
        <div className="flex gap-12 p-16">
          <img className="w-1/2 h-64" src={rails_logo} alt="StarWars" />
          <img className="w-1/2 h-64" src={react_logo} alt="StarWars" />
        </div>
      </div>
    </div>
  );
}

export default Home;
