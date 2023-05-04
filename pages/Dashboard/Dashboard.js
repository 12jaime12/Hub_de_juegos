import { MainControler } from "../../utils/route";
import "./Dashboard.css";

const template = () => `
  <div class="DashboardContainer">
    <ul>
        <li>
            <figure id="raya" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032968/3raya_b15kyo.png"
                alt="3Raya"
                id="3Raya"
            />
            </figure>
        </li>
        <li>    
            <figure id="topo" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032979/topo_kvpx43.png"
                alt="whakatopo"
                id="topo"
            />
            </figure>
        </li>
        <li>
            <figure id="memory" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032972/memoryGame_ys4kvy.png"
                alt="memory_game"
                id="memory"
            />
            </figure>
        </li>
        <li>
            <figure id="hangman" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032970/ahorcado_so8kq4.png"
                alt="ahorcado"
                id="ahorcado"
            />
            </figure>
        </li>
        <li>
            <figure id="pokemon" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032974/pokemon_baos5x.jpg"
                alt="pokeapi"
                id="pokemon"
            />
            </figure>
        </li>
        <li>
            <figure id="quiz" class="figureDashboard">
            <img
                src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683032976/quiz_dvw6y8.jpg"
                alt="quiz"
                id="quiz"
            />
            </figure>
        </li>
    </ul>
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
};
