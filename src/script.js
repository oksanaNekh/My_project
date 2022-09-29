// Add weather forecast
function formatDay(timestamp) {
  let data = new Date(timestamp * 1000);
  let day = data.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
    
      <div class="col-2">
        <div class="forecast-data">${formatDay(forecastDay.dt)}</div>
        <img
          alt="icon"
          width="36"
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
        />
        <br />
        <div class="=forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span> |
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

// Display the city name on the page and weather forecast
function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "49b631c45785fe73d2a88477803dea22";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function show(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let realFeels = Math.round(response.data.main.feels_like);
  let wind = Math.round(response.data.wind.speed);
  let icon = response.data.weather[0].icon;

  celElement = Math.round(response.data.main.temp);

  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let realFealsElement = document.querySelector("#feelsLike");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
  realFealsElement.innerHTML = `Real feels: ${realFeels}°C`;
  windElement.innerHTML = `Wind: ${wind}km/h`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );

  getForecast(response.data.coord);
}
let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
let city = "Rivne";
let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiWeather).then(show);

//  Display the current date and time
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
let nowHour = now.getHours();
let nowMinute = now.getMinutes();
let nowDate = now.getDate();
let nowYear = now.getFullYear();
let nowDays = days[now.getDay()];
let nowMonth = month[now.getMonth()];

if (nowMinute < 10) {
  nowMinute = `0${nowMinute}`;
}
if (nowHour < 10) {
  nowHour = `0${nowHour}`;
}
function ourDate() {
  let newDay = document.querySelector("#currentDay");
  let newDate = document.querySelector("#currentDate");
  let newHour = document.querySelector("#currentHour");
  newDay.innerHTML = nowDays;
  newDate.innerHTML = `${nowDate} ${nowMonth} ${nowYear}`;
  newHour.innerHTML = `${nowHour}:${nowMinute}`;
}
ourDate();

// Display the city name on the page after the user submits the form
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let realFeels = Math.round(response.data.main.feels_like);
  let wind = Math.round(response.data.wind.speed);
  let icon = response.data.weather[0].icon;

  celElement = Math.round(response.data.main.temp);

  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let realFealsElement = document.querySelector("#feelsLike");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
  realFealsElement.innerHTML = `Real feels: ${realFeels}°C`;
  windElement.innerHTML = `Wind: ${wind}km/h`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );
  getForecast(response.data.coord);
}
function ourForm(event) {
  event.preventDefault();
  let newForm = document.querySelector("#enter-city");
  let newCity = document.querySelector("#city");
  newCity.innerHTML = newForm.value;

  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${newForm.value}&appid=${apiKey}&units=metric`;
  axios.get(apiWeather).then(showTemperature);
}

let formCity = document.querySelector("#city-form");
formCity.addEventListener("submit", ourForm);

//Display and the city and current temperature using the OpenWeather API

function showNameCity(response) {
  let name = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let realFeels = Math.round(response.data.main.feels_like);
  let wind = Math.round(response.data.wind.speed);
  let icon = response.data.weather[0].icon;

  celElement = Math.round(response.data.main.temp);

  let place = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let realFealsElement = document.querySelector("#feelsLike");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  place.innerHTML = name;
  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
  realFealsElement.innerHTML = `Real feels: ${realFeels}°C`;
  windElement.innerHTML = `Wind: ${wind}km/h`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiWeatherLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}
&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiWeatherLocation).then(showNameCity);
}

function showLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let buttonElement = document.querySelector("#current-location-button");
buttonElement.addEventListener("click", showLocation);

// Display temperature in Celsius and add a link to convert it to Fahrenheit

let celElement = null;
function celsius() {
  let temp = document.querySelector("#temperature");
  cel.classList.add("active");
  fah.classList.remove("active");
  temp.innerHTML = celElement;
}

function fahrenheit() {
  let temp = document.querySelector("#temperature");
  cel.classList.remove("active");
  fah.classList.add("active");
  temp.innerHTML = Math.round((celElement * 9) / 5 + 32);
}

let cel = document.querySelector("#celsius-link");
cel.addEventListener("click", celsius);

let fah = document.querySelector("#fahrenheit-link");
fah.addEventListener("click", fahrenheit);
