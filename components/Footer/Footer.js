import "./Footer.css";

const template = () =>
  `
    <h2>Jaime Calvo Cuadrado ©2023</h2>
`;

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template();
};
