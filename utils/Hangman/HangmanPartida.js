export const partida = (array) => {
  array.forEach((element) => {
    let p = document.createElement("p");
    p.setAttribute("class", "hangmanP");
    p.setAttribute("id", `${element}`);
    const div = document.querySelector(".guiones");
    div.appendChild(p);
  });
};
