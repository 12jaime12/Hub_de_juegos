let lastHole;
export const randomHole = () => {
  const hole = document.querySelectorAll(".hole");
  const index = Math.floor(Math.random() * hole.length);

  const holeRandom = hole[index];

  if (holeRandom === lastHole) {
    return randomHole(document.querySelectorAll(".hole"));
  }
  lastHole = holeRandom;
  return holeRandom;
};
