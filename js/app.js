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
  urlApi = temtemApi();
  temtemCard.classList.add("active");
  tempediaText.classList.remove("active");

  fetch(urlApi)
    .then(response => response.json())
    .then(data => {
      data.forEach(temtem => {
        if (
          temtem.name.toLowerCase() ===
            temtemSearch.value.toLowerCase().trim() ||
          temtem.number == temtemSearch.value.trim()
        ) {
          urlApi = `https://temtem-api.mael.tech/api/temtems/${temtem.number}`;
          const type = temtem.types.map(type => type).join(", ");

          // Temtem Card
          temtemImg.src = `https://temtem-api.mael.tech/images/portraits/temtem/large/${temtem.name}.png`;
          temtemName.textContent = temtem.name;
          description.innerHTML = `<p>Description: <span>${temtem.gameDescription}</span></p>`;
          types.innerHTML = `<p>Types: <span>${type}</span></p>`;

          temtemNumber = temtem.number;
          errorSearch.textContent = "";
        }
      });
      if (
        urlApi != `https://temtem-api.mael.tech/api/temtems/${temtemNumber}`
      ) {
        errorSearch.textContent = `Temtem "${temtemSearch.value}" is not available!`;
        temtemCard.classList.remove("active");
        tempediaText.classList.add("active");
      }
    });
}
