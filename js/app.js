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
  // use destructuring option 1
  const { name, flags, area, region } = country;
  return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area} </p>
            <p>Region: ${region}</p>
            <img src="${flags.png}">
        </div> 
  `;

  // return `
  //       <div class="country">
  //           <h1>${country.name.common}</h1>
  //           <img src="${country.flags.png}">
  //       </div>
  // `;
};

loadCountries();
