// Functions imports
import createTypes from "./functions/temtem_types.js";
import searchError from "./functions/search_error.js";
import temtemPortrait from "./functions/temtem_portrait.js";

// Elements
export const temtemSearch = document.getElementById("temtemSearch");
export const searchButton = document.getElementById("searchButton");
export const temtemImg = document.getElementById("temtemImg");
export const temtemName = document.getElementById("temtemName");
export const temtemCard = document.querySelector(".temtem-card");
export const tempediaText = document.querySelector(".tempedia-text");

// Events
searchButton.addEventListener("click", searchTemtem);

// Api
function temtemApi(api) {
  api = `https://temtem-api.mael.tech/api/temtems`;
  return api;
}
export let temtemNumber = 0;

// Search Temtem
function searchTemtem(event) {
  event.preventDefault();
  let urlApi = temtemApi();

  fetch(urlApi)
    .then(response => response.json())
    .then(data => {
      data.forEach(temtem => {
        if (
          temtem.name.toLowerCase() ===
            temtemSearch.value.toLowerCase().trim() ||
          temtem.number == temtemSearch.value.trim()
        ) {
          temtemCard.classList.add("active");
          tempediaText.classList.remove("active");

          urlApi = `https://temtem-api.mael.tech/api/temtems/${temtem.number}`;
          const type = temtem.types.map(type => type);

          // // Temtem Portrait
          temtemPortrait(temtem.name, temtem.number, temtem.gameDescription);

          // Temtem Types
          type.forEach(item => {
            createTypes(item);
          });

          temtemNumber = temtem.number;
          errorSearch.textContent = "";
        }
        // Search Error
        searchError(urlApi);
      });
    });
}
