export const comprobarDerrota = () => {
  const cuadros = document.querySelectorAll("li");
  console.log(cuadros);
  //cuadros.splice(1, 2);
  //console.log(cuadros);
  if (
    cuadros[2].innerHTML === "o" &&
    cuadros[3].innerHTML === "o" &&
    cuadros[4].innerHTML === "o"
  ) {
    return true;
  } else if (
    cuadros[5].innerHTML === "o" &&
    cuadros[6].innerHTML === "o" &&
    cuadros[7].innerHTML === "o"
  ) {
    return true;
  } else if (
    cuadros[8].innerHTML === "o" &&
    cuadros[9].innerHTML === "o" &&
    cuadros[10].innerHTML === "o"
  ) {
    return true;
  } else if (
    cuadros[2].innerHTML === "o" &&
    cuadros[5].innerHTML === "o" &&
    cuadros[8].innerHTML === "o"
  ) {
    return true;
  } else if (
    cuadros[3].innerHTML === "o" &&
    cuadros[6].innerHTML === "o" &&
    cuadros[9].innerHTML === "o"
  ) {
    return true;
  } else if (
    cuadros[4].innerHTML === "o" &&
    cuadros[7].innerHTML === "o" &&
    cuadros[10].innerHTML === "o"
  ) {
    return true;
  } else if (
    cuadros[2].innerHTML === "o" &&
    cuadros[6].innerHTML === "o" &&
    cuadros[10].innerHTML === "o"
  ) {
    return true;
  } else if (
    cuadros[4].innerHTML === "o" &&
    cuadros[6].innerHTML === "o" &&
    cuadros[8].innerHTML === "o"
  ) {
    return true;
  } else {
    return false;
  }
};
