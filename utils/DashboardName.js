export const getName = () => {
  const name = localStorage.getItem("user");
  const h3 = document.createElement("h3");
  h3.innerHTML = `Bienvenido a mi hub de juegos ${name} espero que te guste`;
  const div = document.querySelector(".saludos");
  div.appendChild(h3);
};
