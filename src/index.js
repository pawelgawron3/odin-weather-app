import "./styles.css";
import { fetchData } from "./fetchData";
import { handleEmptyInput } from "./handleEmptyInput";
import { displayData } from "./displayData";

const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", async () => {
  let city = cityInput.value.trim();
  if (city !== "") {
    let json = await fetchData(city);
    displayData(json);
    cityInput.value = "";
  } else {
    handleEmptyInput();
  }
});
