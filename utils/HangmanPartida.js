export const partida = (array) => {
  array.forEach((element) => {
    let p = document.createElement("p");
    p.setAttribute("class", "hangmanP");
    p.setAttribute("id", `${element}`);
    const section = document.querySelector("#palabra");
    section.appendChild(p);
  });
};
