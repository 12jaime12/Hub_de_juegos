import { printTemplate as Raya } from "../pages/3Raya/3Raya";
import { printDashboard } from "../pages/Dashboard/Dashboard";
import { printTemplate as Hangman } from "../pages/Hangman/Hangman";
import { printTemplate as Login } from "../pages/Login/Login";
import { printTemplate as Memory } from "../pages/Memory/Memory";
import { printTemplate as Pokemon } from "../pages/Pokemon/Pokemon";
import { printTemplate as Quiz } from "../pages/Quiz/Quiz";
import { printTemplate as Topo } from "../pages/Topo/Topo";

export const MainControler = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? printDashboard() : Login();
      break;
    case "Raya":
      localStorage.getItem("user") ? Raya() : Login();
      break;
    case "Topo":
      localStorage.getItem("user") ? Topo() : Login();
      break;
    case "Memory":
      localStorage.getItem("user") ? Memory() : Login();
      break;
    case "Hangman":
      localStorage.getItem("user") ? Hangman() : Login();
      break;
    case "Pokemon":
      localStorage.getItem("user") ? Pokemon() : Login();
      break;
    case "Quiz":
      localStorage.getItem("user") ? Quiz() : Login();
      break;
    case "Login":
      Login();
      break;
    case "Dashboard":
      localStorage.getItem("user") ? printDashboard() : Login();
      break;
  }
};
