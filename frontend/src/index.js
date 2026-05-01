import "./styles/reset.css";
import "./styles/header.css";
import "./styles/spinner.css";
import "./styles/main.css";
import "./styles/footer.css";
import handleSearch from "./handleSearch";

let temp = false; // false => Fahrenheit

const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const tempToggle = document.querySelector("#tempToggle");

tempToggle.addEventListener("click", () => {
  temp = !temp;
  tempToggle.textContent = tempToggle.textContent === "°F" ? "°C" : "°F";
});

searchBtn.addEventListener("click", () => handleSearch(temp, cityInput));

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch(temp, cityInput);
});
