export const comprobarVictoria = () => {
  const cuadroa1 = document.querySelector("#a1");
  const cuadroa2 = document.querySelector("#a2");
  const cuadroa3 = document.querySelector("#a3");

  const cuadrob1 = document.querySelector("#b1");
  const cuadrob2 = document.querySelector("#b2");
  const cuadrob3 = document.querySelector("#b3");

  const cuadroc1 = document.querySelector("#c1");
  const cuadroc2 = document.querySelector("#c2");
  const cuadroc3 = document.querySelector("#c3");

  // 0,1,2
  // 3,4,5
  // 6,7,8

  if (
    cuadroa1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroa2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroa3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else if (
    cuadrob1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadrob2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadrob3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else if (
    cuadroc1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroc2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroc3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else if (
    cuadroa1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadrob1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroc1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else if (
    cuadroa2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadrob2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroc2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else if (
    cuadroa3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadrob3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroc3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else if (
    cuadroa3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadrob2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroc1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else if (
    cuadroa1.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadrob2.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">` &&
    cuadroc3.innerHTML ===
      `<img src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png" class="imagenLlena" id="x">`
  ) {
    return true;
  } else {
    return false;
  }
};
