export const getName = () => {
  const name = localStorage.getItem("user");
  const h3 = document.createElement("h3");
  h3.innerHTML = `Bienvenido ${name}`;
  const div = document.querySelector(".saludos");
  div.appendChild(h3);
};
