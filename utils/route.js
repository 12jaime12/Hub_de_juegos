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
      Raya();
      break;
    case "Topo":
      Topo();
      break;
    case "Memory":
      Memory();
      break;
    case "Hangman":
      Hangman();
      break;
    case "Pokemon":
      Pokemon();
      break;
    case "Quiz":
      Quiz();
      break;
    case "Login":
      Login();
      break;
    case "Dashboard":
      printDashboard();
      break;
  }
};
