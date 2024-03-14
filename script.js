function displayWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = `${temperature}`;
let h1 = document.querySelector("h1");
h1.innerHTML = response.data.city;
}

function searchCity(city) {
let apiKey = "16b4b9bft43b0d3a60caoa604550fe80";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiURL).then(displayWeather); 
}
function displayCity (event) {
    event.preventDefault();
    let enterCityInput = document.querySelector("#enter-city");
     searchCity (enterCityInput.value);
  
}

let form = document.querySelector("form");
form.addEventListener("submit", displayCity);


searchCity("lisbon");