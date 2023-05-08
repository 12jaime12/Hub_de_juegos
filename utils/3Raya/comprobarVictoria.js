export const comprobarVictoria = () => {
  const cuadros = document.querySelectorAll("li");
  console.log(cuadros);
  //cuadros.splice(1, 2);
  //console.log(cuadros);
  if (
    cuadros[2].innerHTML === "x" &&
    cuadros[3].innerHTML === "x" &&
    cuadros[4].innerHTML === "x"
  ) {
    return true;
  } else if (
    cuadros[5].innerHTML === "x" &&
    cuadros[6].innerHTML === "x" &&
    cuadros[7].innerHTML === "x"
  ) {
    return true;
  } else if (
    cuadros[8].innerHTML === "x" &&
    cuadros[9].innerHTML === "x" &&
    cuadros[10].innerHTML === "x"
  ) {
    return true;
  } else if (
    cuadros[2].innerHTML === "x" &&
    cuadros[5].innerHTML === "x" &&
    cuadros[8].innerHTML === "x"
  ) {
    return true;
  } else if (
    cuadros[3].innerHTML === "x" &&
    cuadros[6].innerHTML === "x" &&
    cuadros[9].innerHTML === "x"
  ) {
    return true;
  } else if (
    cuadros[4].innerHTML === "x" &&
    cuadros[7].innerHTML === "x" &&
    cuadros[10].innerHTML === "x"
  ) {
    return true;
  } else if (
    cuadros[2].innerHTML === "x" &&
    cuadros[6].innerHTML === "x" &&
    cuadros[10].innerHTML === "x"
  ) {
    return true;
  } else if (
    cuadros[4].innerHTML === "x" &&
    cuadros[6].innerHTML === "x" &&
    cuadros[8].innerHTML === "x"
  ) {
    return true;
  } else {
    return false;
  }
};
