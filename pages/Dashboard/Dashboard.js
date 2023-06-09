import { getName } from "../../utils/DashboardName";
import { MainControler } from "../../utils/route";
import "./Dashboard.css";

const template = () => `
  <div class="DashboardContainer">
    <h1 class="saludos"></h1>
    <div class="conteun">
    <ul>
        <li class="card">
            <figure id="raya" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683729321/3enRayaR_j0suno.png"
                alt="3Raya"
                id="3Raya"
            />
            <h2 class="gameName">3 en Raya</h2>
            </figure>
        </li>
        <li class="card">  
            <figure id="topo" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032979/topo_kvpx43.png"
                alt="whakatopo"
                id="topo"
            />
            <h2 class="gameName">Whaka Topo</h2>
            </figure>
        </li>
        <li class="card">
            <figure id="memory" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032972/memoryGame_ys4kvy.png"
                alt="memory_game"
                id="memory"
            />
            <h2 class="gameName">Memory</h2>
            </figure>
        </li>
        <li class="card">
            <figure id="hangman" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032970/ahorcado_so8kq4.png"
                alt="ahorcado"
                id="ahorcado"
            />
            <h2 class="gameName">Hangman</h2>
            </figure>
        </li>
        <li class="card">
            <figure id="pokemon" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032974/pokemon_baos5x.jpg"
                alt="pokeapi"
                id="pokemon"
            />
            <h2 class="gameName">Pokedex</h2>
            </figure>
        </li>
        <li class="card">
            <figure id="quiz" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032976/quiz_dvw6y8.jpg"
                alt="quiz"
                id="quiz"
            />
            <h2 class="gameName">Quiz</h2>
            </figure>
        </li>
    </ul>
    </div>
  </div>
`;

const addListener = () => {
  const Raya = document.querySelector("#raya");
  Raya.addEventListener("click", () => {
    MainControler("Raya");
  });
  const Topo = document.querySelector("#topo");
  Topo.addEventListener("click", () => {
    MainControler("Topo");
  });
  const Memory = document.querySelector("#memory");
  Memory.addEventListener("click", () => {
    MainControler("Memory");
  });
  const Hangman = document.querySelector("#hangman");
  Hangman.addEventListener("click", () => {
    MainControler("Hangman");
  });
  const Pokemon = document.querySelector("#pokemon");
  Pokemon.addEventListener("click", () => {
    MainControler("Pokemon");
  });
  const Quiz = document.querySelector("#quiz");
  Quiz.addEventListener("click", () => {
    MainControler("Quiz");
  });
};

export const printDashboard = () => {
  document.querySelector("main").innerHTML = template();
  addListener();
  getName();
};
