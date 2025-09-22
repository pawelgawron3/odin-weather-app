import { mapIconToMDI } from "./mapJsonToMdiIcons";

class Weather {
  constructor(address, currentConditions, days) {
    this.address = address;
    this.currentConditions = currentConditions;
    this.days = days;
  }
}

const main = document.querySelector("main");

function displayData(json) {
  main.innerHTML = "";
  let weather = new Weather(json.address, json.currentConditions, json.days);

  let h2 = document.createElement("h2");
  h2.classList.add("contentHeader");
  h2.textContent = weather.address;

  main.appendChild(h2);

  let divCurrent = document.createElement("div");
  divCurrent.classList.add("currentConditions");

  let h3 = document.createElement("h3");
  h3.classList.add("sectionHeader");
  h3.textContent = `Current conditions in ${weather.address}:`;

  divCurrent.appendChild(h3);

  let condDiv = document.createElement("div");
  condDiv.classList.add("conditions");

  let icon = document.createElement("span");
  icon.classList.add("mdi", mapIconToMDI(icon, weather.currentConditions.icon));
  icon.style.fontSize = "2rem";
  icon.style.marginRight = "10px";

  condDiv.appendChild(icon);

  let condText = document.createElement("span");
  condText.textContent = `${weather.currentConditions.conditions}`;
  condText.classList.add("conditionText");

  condDiv.appendChild(condText);

  divCurrent.appendChild(condDiv);

  let temp = document.createElement("p");
  temp.textContent = `Temp: ${weather.currentConditions.temp}°F (Feels like: ${weather.currentConditions.feelslike}°F)`;
  temp.classList.add("temp", "currCondsHover");

  divCurrent.appendChild(temp);

  let humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${weather.currentConditions.humidity}%`;
  humidity.classList.add("humidity", "currCondsHover");

  divCurrent.appendChild(humidity);

  let wind = document.createElement("p");
  wind.textContent = `Wind: ${weather.currentConditions.windspeed} mph, Gusts: ${weather.currentConditions.windgust} mph`;
  wind.classList.add("wind", "currCondsHover");

  divCurrent.appendChild(wind);

  let pressure = document.createElement("p");
  pressure.textContent = `Pressure: ${weather.currentConditions.pressure} hPa`;
  pressure.classList.add("pressure", "currCondsHover");

  divCurrent.appendChild(pressure);

  let clouds = document.createElement("p");
  clouds.textContent = `Cloud Cover: ${weather.currentConditions.cloudcover}%`;
  clouds.classList.add("cloudcover", "currCondsHover");

  divCurrent.appendChild(clouds);

  let sun = document.createElement("p");
  sun.textContent = `Sunrise: ${weather.currentConditions.sunrise}, Sunset: ${weather.currentConditions.sunset}`;
  sun.classList.add("sun", "currCondsHover");

  divCurrent.appendChild(sun);

  let uv = document.createElement("p");
  uv.textContent = `UV Index: ${weather.currentConditions.uvindex}`;
  uv.classList.add("uv", "currCondsHover");

  divCurrent.appendChild(uv);

  main.appendChild(divCurrent);

  let h2Forecast = document.createElement("h2");
  h2Forecast.classList.add("contentHeader");
  h2Forecast.textContent = "Weather forecast:";

  main.appendChild(h2Forecast);

  let divForecast = document.createElement("div");
  divForecast.classList.add("forecastDiv");

  //weather.days[0] is currentConditions info
  weather.days.slice(1).forEach((day) => {
    let dayDiv = document.createElement("div");
    dayDiv.classList.add("dayDiv");

    let h3 = document.createElement("h3");
    h3.classList.add("sectionHeader");
    h3.textContent = day.datetime;

    dayDiv.appendChild(h3);

    let condDiv = document.createElement("div");
    condDiv.classList.add("dayConditions");

    let iconSpan = document.createElement("span");
    iconSpan.classList.add("mdi", mapIconToMDI(iconSpan, day.icon));
    iconSpan.style.fontSize = "2rem";
    iconSpan.style.marginRight = "10px";

    condDiv.appendChild(iconSpan);

    let dayCondText = document.createElement("span");
    dayCondText.classList.add("conditionText");
    dayCondText.textContent = day.conditions;

    condDiv.appendChild(dayCondText);

    dayDiv.appendChild(condDiv);

    let temp = document.createElement("p");
    temp.textContent = `Temp: ${day.tempmin}° - ${day.tempmax}°\n(Feels like: ${day.feelslike}°)`;
    temp.classList.add("temp", "forecastHover");

    dayDiv.appendChild(temp);

    let humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${day.humidity}%`;
    humidity.classList.add("humidity", "forecastHover");

    dayDiv.appendChild(humidity);

    let wind = document.createElement("p");
    wind.textContent = `Wind: ${day.windspeed} mph, Gusts: ${day.windgust} mph`;
    wind.classList.add("wind", "forecastHover");

    dayDiv.appendChild(wind);

    let clouds = document.createElement("p");
    clouds.textContent = `Cloud Cover: ${day.cloudcover}%`;
    clouds.classList.add("cloudcover", "forecastHover");

    dayDiv.appendChild(clouds);

    let sun = document.createElement("p");
    sun.textContent = `Sunrise: ${day.sunrise}, Sunset: ${day.sunset}`;
    sun.classList.add("sun", "forecastHover");

    dayDiv.appendChild(sun);

    divForecast.appendChild(dayDiv);
  });

  main.appendChild(divForecast);
}

export { displayData };
