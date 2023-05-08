export const changeBackground = () => {
  const p = document.querySelectorAll(".tipo");
  p.forEach((element) => {
    const figure = element.parentNode;
    switch (element.innerHTML) {
      case "grass":
        figure.setAttribute("id", "grass");
        break;
      case "fire":
        figure.setAttribute("id", "fire");
        break;
      case "water":
        figure.setAttribute("id", "water");
        break;
      case "bug":
        figure.setAttribute("id", "bug");
        break;
      case "normal":
        figure.setAttribute("id", "normal");
        break;
      case "poison":
        figure.setAttribute("id", "poison");
        break;
      case "electric":
        figure.setAttribute("id", "electric");
        break;
      case "ground":
        figure.setAttribute("id", "ground");
        break;
      case "fairy":
        figure.setAttribute("id", "fairy");
        break;
      case "fighting":
        figure.setAttribute("id", "fighting");
        break;
      case "psychic":
        figure.setAttribute("id", "psychic");
        break;
      case "rock":
        figure.setAttribute("id", "rock");
        break;
      case "ghost":
        figure.setAttribute("id", "ghost");
        break;
      case "ice":
        figure.setAttribute("id", "ice");
        break;
      case "dragon":
        figure.setAttribute("id", "dragon");
        break;
    }
  });
};
