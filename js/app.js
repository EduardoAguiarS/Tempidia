import searchError from "./search_error.js";
import createTypes from "./temtem_card.js";
// Elements
const temtemSearch = document.getElementById("temtemSearch");
const searchButton = document.getElementById("searchButton");
const temtemImg = document.getElementById("temtemImg");
const temtemName = document.getElementById("temtemName");
const temtemCard = document.querySelector(".temtem-card");
const tempediaText = document.querySelector(".tempedia-text");

// Events
searchButton.addEventListener("click", searchTemtem);

// Api
function temtemApi() {
  let urlApi = `https://temtem-api.mael.tech/api/temtems`;
  return urlApi;
}

// Search Temtem
function searchTemtem(event) {
  event.preventDefault();
  let temtemNumber = 0;
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

          // Temtem Card
          temtemImg.src = `https://temtem-api.mael.tech/images/portraits/temtem/large/${temtem.name}.png`;
          temtemName.textContent = temtem.name;
          description.innerHTML = `<p>Description: <span>${temtem.gameDescription}</span></p>`;
          temtemId.innerHTML = `<p>Number: <span>${temtem.number}</span></p>`;

          // Temtem Types
          type.forEach(item => {
            createTypes(item);
          });

          // type.forEach((item, index, array) => {
          //   if (index === 0) {
          //     type1.src = `https://temtem-api.mael.tech/images/icons/types/${item}.png`;
          //   }

          //   if (index === 1) {
          //     type2.src = `https://temtem-api.mael.tech/images/icons/types/${item}.png`;
          //   } else {
          //     type2.src = "";
          //   }
          //   console.log(array.length);
          // });

          temtemNumber = temtem.number;
          errorSearch.textContent = "";
        }
      });

      // Search Erros
      searchError(urlApi, temtemNumber, temtemCard, tempediaText);
    });
}
