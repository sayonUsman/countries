const loadCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    displayCountries(data);
    // console.log (data[0].name.official);
  } catch (error) {
    console.error(error);
  }
};

const displayCountries = (countries) => {
  console.log(countries);
  const countriesContainer = document.getElementById("countries");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");

    countryDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${
                          country.flags.svg
                        }" class="img-fluid rounded-start rounded-end" alt="...">
                    </div>

                    <div class="col-md-8">
                        <div class="card-body ps-5">
                            <h1 class="card-title fw-bold">${
                              country.name.common
                            }</h1>
                            <h3>Capital: ${
                              country.capital
                                ? country.capital[0]
                                : "No Capital City"
                            }</h3>
                            <h5>Region: ${country.region}</h5>
                            <h5>Subregion: ${country.subregion}</h5>
                            <h5>TimeZones: ${country.timezones[0]}</h5>
                        </div>
                    </div>
                </div> 
            </div>
        `;
    countriesContainer.appendChild(countryDiv);
  });
};

loadCountries();
