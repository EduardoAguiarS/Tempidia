export function createTypes(type, index) {
  const typesImg = document.querySelector(".types-img");

  const createImg = document.createElement("img");
  createImg.setAttribute("class", "elementar");
  createImg.src = `https://temtem-api.mael.tech/images/icons/types/${type[index]}.png`;
  typesImg.append(createImg);
}

export function clearTypes() {
  const elementar = document.querySelectorAll(".elementar");
  elementar.forEach(item => {
    item.remove();
  });
}
