import { timeUp } from "./playTopo";
import { randomHole } from "./randomHole";
import { randomTime } from "./randomTime";

export const showTopo = () => {
  const time = randomTime(500, 1000);
  const hole = randomHole(document.querySelectorAll(".hole"));
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      showTopo();
    }
  }, time);
};
