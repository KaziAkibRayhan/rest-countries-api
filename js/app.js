const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries[0]);
  const allCountries = countries.map((country) => singleCountry(country));
  const countriesDiv = document.getElementById("countries");
  countriesDiv.innerHTML = allCountries.join(" ");
};

const singleCountry = (country) => {
  console.log(country.flags.png);
  return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div> 
  `;
};

loadCountries();
