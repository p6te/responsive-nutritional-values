const values = [
  { name: "pineapple", calories: 33, fat: 0, carbs: 11.8 },
  { name: "apple", calories: 57, fat: 0.7, carbs: 12.1 },
  { name: "orange", calories: 51, fat: 0.2, carbs: 11.3 },
  { name: "cherries", calories: 67, fat: 0.4, carbs: 14.6 },
];

const valuesContainer = document.querySelector(".app--values");

const desktopVieport = window.matchMedia("screen and (min-width: 500px )");

const drawValues = (isDesktop) => {
  isDesktop ? drawDesktopValues() : drawMobileValues();
};

const drawMobileValues = () => {
  valuesContainer.innerHTML = "";

  let list = document.createElement("ul");

  values.forEach((value) => {
    let element = document.createElement("li");

    let name = document.createElement("div");
    name.innerHTML = `<strong>Name: </strong>${value.name}`;
    let calories = document.createElement("div");
    calories.innerHTML = `<strong>Calories: </strong>${value.calories}`;
    let fat = document.createElement("div");
    fat.innerHTML = `<strong>Fat: </strong>${value.fat}`;
    let carbs = document.createElement("div");
    carbs.innerHTML = `<strong>Carbs: </strong>${value.carbs}`;

    element.appendChild(name);
    element.appendChild(calories);
    element.appendChild(fat);
    element.appendChild(carbs);

    list.appendChild(element);
  });

  valuesContainer.appendChild(list);
};

const drawDesktopValues = () => {
  valuesContainer.innerHTML = "";
  let table = document.createElement("table");

  let thead = document.createElement("thead");

  thead.innerHTML =
    "<tr> <th>Name</th>  <th>Calories</th>  <th>Fat</th>  <th>Carbs</th></tr>";

  let tbody = document.createElement("tbody");

  values.forEach((value) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;

    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  valuesContainer.appendChild(table);
};

drawValues(desktopVieport.matches);

desktopVieport.addListener((isDesktop) => {
  drawValues(isDesktop.matches);
});
