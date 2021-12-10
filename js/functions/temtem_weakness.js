export function calcWeak(type) {
  const WeakApi = `https://temtem-api.mael.tech/api/weaknesses`;
  const matchups = document.querySelector(".matchups");
  matchups.classList.add("active");

  fetch(WeakApi)
    .then(response => response.json())
    .then(data => {
      type.forEach((item, index, array) => {
        // Create Damge img
        if (array[0] == item) {
          const createImg = document.createElement("img");
          createImg.src = `https://temtem-api.mael.tech/images/icons/types/${item}.png`;
          createImg.classList.add("weakness-img");
          matchup1.before(createImg);
        }

        if (array[1] == item) {
          const createImg = document.createElement("img");
          createImg.src = `https://temtem-api.mael.tech/images/icons/types/${item}.png`;
          createImg.classList.add("weakness-img");
          matchup2.before(createImg);
        }

        //Create Weakness img
        if (array[0] == item) {
          const createImg = document.createElement("img");
          createImg.src = `https://temtem-api.mael.tech/images/icons/types/${item}.png`;
          createImg.classList.add("weakness-img");
          weakness1.before(createImg);
        }

        if (array[1] == item) {
          const createImg = document.createElement("img");
          createImg.src = `https://temtem-api.mael.tech/images/icons/types/${item}.png`;
          createImg.classList.add("weakness-img");
          weakness2.before(createImg);
        }

        for (let types in data) {
          const temtemWeak = data[types];
          for (let element in temtemWeak) {
            if ((item == types) & (array[0] == item)) {
              const createLi = document.createElement("li");
              matchup1.appendChild(createLi);
              createLi.classList.add("weakness");
              createLi.innerHTML = `<img src="https://temtem-api.mael.tech/images/icons/types/${element}.png"> <span>${temtemWeak[element]}</span> `;
            }

            if ((item == types) & (array[1] == item)) {
              const createLi = document.createElement("li");
              matchup2.appendChild(createLi);
              createLi.classList.add("weakness");
              createLi.innerHTML = `<img src="https://temtem-api.mael.tech/images/icons/types/${element}.png"> <span>${temtemWeak[element]}</span> `;
            }
          }

          // console.log(
          //   `${types} x ${item}: ${temtemWeak[item]}x damage received`
          // );

          if (temtemWeak[item] == 2) {
            console.log(
              `${types} x ${item}: ${temtemWeak[array[index]]}x damage received`
            );
          }

          if (array[0] == item) {
            const createLi = document.createElement("li");
            weakness1.appendChild(createLi);
            createLi.classList.add("weakness");
            createLi.innerHTML = `<img src="https://temtem-api.mael.tech/images/icons/types/${types}.png"> <span>${
              temtemWeak[array[index]]
            }</span> `;
          }

          if (array[1] == item) {
            const createLi = document.createElement("li");
            weakness2.appendChild(createLi);
            createLi.classList.add("weakness");
            createLi.innerHTML = `<img src="https://temtem-api.mael.tech/images/icons/types/${types}.png"> <span>${
              temtemWeak[array[index]]
            }</span> `;
          }
        }
      });
    });
}

export function clearMatchups() {
  document.querySelectorAll(".weakness").forEach(item => {
    item.remove();
  });

  document.querySelectorAll(".weakness-img").forEach(item => {
    item.remove();
  });
}
