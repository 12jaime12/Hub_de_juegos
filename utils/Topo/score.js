export let score = 0;
export const scoreMarcador = (e) => {
  console.log(score);
  score++;
  e.target.parentNode.classList.remove("up");
  document.querySelector(".score").textContent = score;
};
