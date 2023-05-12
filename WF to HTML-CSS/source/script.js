function finalDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let weekDays = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[weekDays];

  return `${day} ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
currentDate.innerHTML = finalDate(currentTime);

function showEnterWeather(response) {
  let heading = document.querySelector("#city");
  heading.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  let feels = document.querySelector("#feel-like");
  feels.innerHTML = Math.round(response.data.main.feels_like);
  let humid = document.querySelector("#humidity");
  humid.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
}

function searchForm(event) {
  event.preventDefault();
  let apiKey = "73bbda59673cb288e43e9c3380432f53";
  let city = document.querySelector("#weather-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showEnterWeather);
}

let form = document.querySelector("#search-date");
form.addEventListener("submit", searchForm);

function changeCelcius(event) {
  event.preventDefault();
  let mainTemp = document.querySelector("#temperature");
  let temperature = mainTemp.innerHTML;
  temperature = Number(temperature);
  mainTemp.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", changeCelcius);

function changeFahren(event) {
  event.preventDefault();
  let mainTemp = document.querySelector("#temperature");
  let temperature = mainTemp.innerHTML;
  temperature = Number(temperature);
  mainTemp.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahrenLink = document.querySelector("#fahren-link");
fahrenLink.addEventListener("click", changeFahren);
