import { temtemNumber, temtemCard, tempediaText } from "../app.js";

function searchError(api) {
  if (api != `https://temtem-api.mael.tech/api/temtems/${temtemNumber}`) {
    errorSearch.textContent = `Temtem "${temtemSearch.value}" is not available!`;
    temtemCard.classList.remove("active");
    tempediaText.classList.add("active");
  }
}

export default searchError;
