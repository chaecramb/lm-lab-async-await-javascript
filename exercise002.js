import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const starWarsApi = "https://swapi.dev/api/films/1/";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (e) {
    console.log(error);
  }
};

fetchData(jsonTypicode);

const starWarsEpisode4Data = await fetchData(starWarsApi);

const planetsData = starWarsEpisode4Data.planets.map((planetUrl) =>
  fetchData(planetUrl)
);

const logPlanetNames = async (planetsData) => {
  let planets = await Promise.all(planetsData);
  planets.forEach((planet) => {
    console.log(planet.name);
  });
};

logPlanetNames(planetsData);
