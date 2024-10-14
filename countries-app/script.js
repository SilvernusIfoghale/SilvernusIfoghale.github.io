const divContainer = document.querySelector(".flag-container");
const divSelect = document.querySelector("#region");
const div = document.createElement("div");
const search = document.querySelector(".fa-solid");
const inputEl = document.querySelector(".input");

const regionUrl = `https://restcountries.com/v3.1/all`;

//Search Query
let dataQuery;
search.addEventListener("click", () => {
  dataQuery = inputEl.value;
  fetchData(dataQuery);
  inputEl.value = "";
  divSelect.value = "";
});

divSelect.addEventListener("click", () => {
  //   console.log(divSelect.value);
  dataQuery = divSelect.value;
  if (dataQuery) {
    fetchData(dataQuery);
  }
});

const fetchRegion = () => {
  fetch(regionUrl)
    .then((res) => res.json())
    .then((data) => {
      const result = data;
      const returnedResult = result.map(
        (item) =>
          `<option value="${item.name.common}">${item.name.common}</option>`
      );
      divSelect.innerHTML += returnedResult;
    });
};
fetchRegion();

//Query and Search Functionality
const fetchData = (dataQuery) => {
  if (!dataQuery) {
    url = `https://restcountries.com/v3.1/all`;
  } else {
    url = `https://restcountries.com/v3.1/name/${dataQuery}`;
  }
  console.log(dataQuery);
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data;
      const returnedResult = result
        .map(
          (data) => `
      <div class="single-card">
              <div class="img-container">
                <img src=${data.flags.png} alt="" />
              </div>
              <div class="text-container">
                <p class="country">${data.name.common}</p>
                <p><b>Population:</b> <span>${data.population.toLocaleString(
                  "en-Us"
                )} </span></p>
                <p><b>Region:</b> <span>${data.region}</span></p>
                <p><b>Capital:</b> <span>${data.capital}</span></p>
              </div>
            </div>
      `
        )
        .join("");
      divContainer.innerHTML = returnedResult;
    });
};
fetchData(dataQuery);

//Toggle Light and Dark Mode
const switchMode = document.querySelector(".right-container");
const moonIcon = document.querySelector(".fa-moon");
const para = document.querySelector("#dark-mode");
const body = document.querySelector("body");

switchMode.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (moonIcon.classList.contains("fa-regular")) {
    moonIcon.classList.replace("fa-regular", "fa-solid");
  } else {
    moonIcon.classList.replace("fa-solid", "fa-regular");
  }
  if (para.textContent == "Dark Mode") {
    para.textContent = "Light Mode";
  } else {
    para.textContent = "Dark Mode";
  }
});
