export function calcWeak(type) {
  const WeakApi = `https://temtem-api.mael.tech/api/weaknesses`;

  fetch(WeakApi)
    .then(response => response.json())
    .then(data => {
      type.forEach((item, index, array) => {
        for (let types in data) {
          const temtemWeak = data[types];
          for (let element in temtemWeak) {
            // if (item == types) {
            //   console.log(
            //     `${item} x ${element}: ${temtemWeak[element]}x damage`
            //   );
            // }
            if ((item == types) & (array[0] == item)) {
              const createLi = document.createElement("li");
              matchup1.appendChild(createLi);
              createLi.classList.add("damage1");
              createLi.innerHTML = `<img src="https://temtem-api.mael.tech/images/icons/types/${item}.png"> x <img src="https://temtem-api.mael.tech/images/icons/types/${element}.png">: <span>${temtemWeak[element]}</span> `;
            }

            if ((item == types) & (array[1] == item)) {
              const createLi = document.createElement("li");
              matchup2.appendChild(createLi);
              createLi.classList.add("damage2");
              createLi.innerHTML = `<img src="https://temtem-api.mael.tech/images/icons/types/${item}.png"> x <img src="https://temtem-api.mael.tech/images/icons/types/${element}.png">: <span>${temtemWeak[element]}</span> `;
            }
          }

          // console.log(
          //   `${types} x ${item}: ${temtemWeak[item]}x damage received`
          // );

          // if (temtemWeak[item] == 2) {
          //   console.log(
          //     `${types} x ${item}: ${temtemWeak[array[index]]}x damage received`
          //   );
          // }
        }
      });
    });
}
