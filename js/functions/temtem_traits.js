export function createTraits(traits, index) {
  // Api
  const traitsApi = `https://temtem-api.mael.tech/api/traits`;

  // Elements
  const traitContent = document.querySelector(".traits-content");

  fetch(traitsApi)
    .then(response => response.json())
    .then(data => {
      data.forEach(trait => {
        if (trait.name == traits[index]) {
          const createTrait = document.createElement("p");
          createTrait.setAttribute("class", "trait");

          createTrait.innerHTML = `<p>${trait.name}:</p> <span>${trait.effect}</span>`;
          traitContent.appendChild(createTrait);
        }
      });
    });
}

export function clearTraits() {
  const traitElements = document.querySelectorAll(".trait");
  traitElements.forEach(item => {
    item.remove();
  });
}
