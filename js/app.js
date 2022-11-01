const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const allCountries = countries.map((country) => singleCountry(country));
  const countriesDiv = document.getElementById("countries");
  countriesDiv.innerHTML = allCountries.join(" ");
};

const singleCountry = (country) => {
  return `
        <div class="country">
            <h1>${country.name.common}</h1>
            <img src="${country.flags.png}">
        </div> 
  `;
};

loadCountries();
