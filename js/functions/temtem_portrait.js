import { temtemImg, temtemName } from "../app.js";

function temtemPortrait(name, number, temtemDescription) {
  temtemImg.src = `https://temtem-api.mael.tech/images/portraits/temtem/large/${name}.png`;
  temtemName.textContent = name;
  description.innerHTML = `<p>Description: <span>${temtemDescription}</span></p>`;
  temtemId.innerHTML = `<p>Number: <span>${number}</span></p>`;
}

export default temtemPortrait;
