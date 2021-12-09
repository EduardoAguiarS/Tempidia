export function createTraits(traits, index) {
  const traitsApi = `https://temtem-api.mael.tech/api/traits`;

  fetch(traitsApi)
    .then(response => response.json())
    .then(data => {
      data.forEach(trait => {
        if (trait.name == traits[index]) {
          console.log(trait.name);
          console.log(trait.effect);
        }
      });
    });
}
