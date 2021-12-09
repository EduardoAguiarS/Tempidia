// export function createTypes(type) {
//   const typesImg = document.querySelector(".types-img");
//   const imgsType = document.querySelectorAll(".types-img img");

//   if (imgsType.length < type.length) {
//     const createImg = document.createElement("img");
//     typesImg.append(createImg);
//     createImg.setAttribute("class", "elementar");
//     createImg.setAttribute("src", "");
//   }
// }

// export function setTypes(type) {
//   const elementar = document.querySelectorAll(".elementar");

//   elementar.forEach((element, index) => {
//     element.src = "";

//     const elementUrl = `https://temtem-api.mael.tech/images/icons/types/${type[index]}.png`;
//     const undefinedUrl = `https://temtem-api.mael.tech/images/icons/types/undefined.png`;

//     if (elementUrl !== undefinedUrl) {
//       element.src = elementUrl;
//     }
//   });
// }
export function createTypes(type, index) {
  const typesImg = document.querySelector(".types-img");

  const createImg = document.createElement("img");
  createImg.setAttribute("class", "elementar");
  createImg.src = `https://temtem-api.mael.tech/images/icons/types/${type[index]}.png`;
  typesImg.append(createImg);
}
