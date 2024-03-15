function displayWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = `${temperature}`;
let h1 = document.querySelector("h1");
h1.innerHTML = response.data.city;
let descriptionElement= document.querySelector("#description");
descriptionElement.innerHTML = response.data.condition.description;
let humidityPercentageElement= document.querySelector("#humidity-percentage");
humidityPercentageElement.innerHTML = `${response.data.temperature.humidity}%`;
let windSpeedElement= document.querySelector("#wind-speed");
windSpeedElement.innerHTML= `${response.data.wind.speed}km/h`;
let dateTimeElement = document.querySelector("#date-time");
let date = new Date(response.data.time * 1000);
dateTimeElement.innerHTML= displayDate(date);
}
function displayDate (date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
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

