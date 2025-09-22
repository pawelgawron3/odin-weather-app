import "./styles.css";
import { fetchData } from "./fetchData";
import { handleEmptyInput } from "./handleEmptyInput";
import { displayData } from "./displayData";

let temp = false; //false => Fahrenheit

const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const tempToggle = document.querySelector("#tempToggle");

tempToggle.addEventListener("click", () => {
  temp = temp ? false : true;
  tempToggle.textContent = tempToggle.textContent == "°F" ? "°C" : "°F";
});

searchBtn.addEventListener("click", async () => {
  let city = cityInput.value.trim();
  if (city !== "") {
    let json = await fetchData(city, temp);
    displayData(json, temp);
    cityInput.value = "";
  } else {
    handleEmptyInput();
  }
});
