import "./Footer.css";

const template = () =>
  `
    <h1>Jaime Calvo Cuadrado ©2023</h1>
`;

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template();
};
