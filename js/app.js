// Functions imports
import { createTypes, setTypes } from "./functions/temtem_types.js";
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
temtemSearch.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchTemtem(event);
  }
});

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
          // Add or Remove Class
          temtemCard.classList.add("active");
          tempediaText.classList.remove("active");

          // Temtem
          urlApi = `https://temtem-api.mael.tech/api/temtems/${temtem.number}`;

          // Temtem Portrait
          temtemPortrait(temtem.name, temtem.number, temtem.gameDescription);

          // Temtem Types
          const type = temtem.types.map(type => type);
          type.forEach(() => {
            createTypes(type);
          });
          setTypes(type);

          //Traits
          const traits = temtem.traits.map(trait => trait);
          traits.forEach(() => {
            // createTraits();
          });

          // Reset
          temtemNumber = temtem.number;
          errorSearch.textContent = "";
        }
        // Search Error
        searchError(urlApi);
      });
    });
}
