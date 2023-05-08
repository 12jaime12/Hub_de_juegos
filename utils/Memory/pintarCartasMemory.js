export const pintarCartasMemory = (array1) => {
  array1.forEach((element) => {
    console.log(element);
    const button = document.querySelector(".buttonPlay");
    button.innerHTML = "";
    const ul = document.querySelector(".memoryUl");
    const li = document.createElement("li");
    li.setAttribute("class", "memoryLi");
    const img = document.createElement("img");
    img.setAttribute("src", `${element[0]}`);
    img.setAttribute("id", `${element[1]}`);
    img.setAttribute("class", "personaje");
    ul.appendChild(li);
    li.appendChild(img);
  });
};
