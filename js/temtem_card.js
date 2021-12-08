function createTypes(item) {
  const typesImg = document.querySelector(".types-img");
  const createImg = document.createElement("img");
  createImg.src = `https://temtem-api.mael.tech/images/icons/types/${item}.png`;
  typesImg.appendChild(createImg);
}

export default createTypes;
