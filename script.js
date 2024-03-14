function displayCity (event) {
    event.preventDefault();
    let enterCityInput = document.querySelector("#enter-city");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${enterCityInput.value}`; 
}

let form = document.querySelector("form");
form.addEventListener("submit", displayCity);