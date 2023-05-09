import { MainControler } from "../route";
import { copiaArrayMemory } from "./copiaArrayMemory";

let acc = 0;
export const pintarCartasMemory = (array1) => {
  array1.forEach((element) => {
    const ul = document.querySelector(".memoryUl");
    const li = document.createElement("li");
    li.setAttribute("class", "memoryLi");
    const img1 = document.createElement("img");
    img1.setAttribute(
      "src",
      "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683557235/pngwing.com_8_nveoht.png"
    );
    img1.setAttribute("class", "front");
    const img2 = document.createElement("img");
    img2.setAttribute("src", `${element[0]}`);
    li.setAttribute("id", `${element[1]}`);
    img2.setAttribute("class", "back");
    ul.appendChild(li);
    li.appendChild(img1);
    li.appendChild(img2);
    addListeners(li, img1, img2);
  });
};

const addListeners = (li, img1, img2) => {
  li.addEventListener("click", () => {
    acc++;
    img1.classList.toggle("rotateFront");
    img2.classList.toggle("rotateBack");
    li.classList.toggle("memoryLiRotate");
    const liRotates = document.querySelectorAll(".memoryLiRotate");
    const rotateBack = document.querySelectorAll(".rotateBack");
    const rotateFront = document.querySelectorAll(".rotateFront");
    console.log(liRotates);
    setTimeout(() => {
      if (liRotates[1]) {
        if (liRotates.length <= 2 && liRotates[0].id === liRotates[1].id) {
          liRotates[0].setAttribute("class", "acertados");
          liRotates[0].classList.remove("memoryLiRotate");
          liRotates[1].setAttribute("class", "acertados");
          liRotates[1].classList.remove("memoryLiRotate");
          rotateBack[0].classList.remove("rotateBack");
          rotateBack[0].classList.toggle("rotadaBack");
          rotateBack[1].classList.remove("rotateBack");
          rotateBack[1].classList.toggle("rotadaBack");
          rotateFront[0].classList.remove("rotateFront");
          rotateFront[0].classList.toggle("rotadaFront");
          rotateFront[1].classList.remove("rotateFront");
          rotateFront[1].classList.toggle("rotadaFront");
        } else {
          rotateBack.forEach((element) => {
            element.classList.remove("rotateBack");
          });
          rotateFront.forEach((element) => {
            element.classList.remove("rotateFront");
          });
          liRotates[0].classList.remove("memoryLiRotate");
          liRotates[1].classList.remove("memoryLiRotate");
        }
      }
      const acertados = document.querySelectorAll(".acertados");
      if (acertados.length === 16) {
        const confeti = new JSConfetti();
        confeti.addConfetti();
        const ul = document.querySelector(".memoryUl");
        ul.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.innerHTML = `Has ganado con un total de ${acc / 2} intentos`;
        const button = document.createElement("button");
        button.innerHTML = "Play Again";
        button.setAttribute("class", "resetMemory");
        const div = document.querySelector(".memoryDiv2");
        div.append(h1, button);
        addListeners2();
      }
    }, 1000);
  });
};
const addListeners2 = () => {
  const button = document.querySelector(".resetMemory");
  button.addEventListener("click", () => {
    MainControler("Memory");
  });
};
