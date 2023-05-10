export let score = 0;
export const scoreMarcador = (e) => {
  score++;
  e.target.parentNode.classList.remove("up");
  document.querySelector(".score").textContent = score;
};
export const getScore = () => {
  return score;
};

export const setScore = (value) => {
  score = value;
};
