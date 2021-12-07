const temtemSearch = document.getElementById("temtemSearch");
const searchButton = document.getElementById("searchButton");
const temtemImg = document.getElementById("temtemImg");
const temtemName = document.getElementById("temtemName");

function searchTemtem() {
  let urlApi = `https://temtem-api.mael.tech/api/temtems`;

  fetch(urlApi)
    .then(response => response.json())
    .then(data => {
      data.forEach(temtem => {
        if (
          temtem.name.toLowerCase() ===
            temtemSearch.value.toLowerCase().trim() ||
          temtem.number == temtemSearch.value
        ) {
          urlApi = `https://temtem-api.mael.tech/api/temtems/${temtem.number}`;
          temtemImg.src = `https://temtem-api.mael.tech/images/portraits/temtem/large/${temtem.name}.png`;
          temtemName.textContent = temtem.name;
        }
      });
    });
}

searchButton.addEventListener("click", searchTemtem);
