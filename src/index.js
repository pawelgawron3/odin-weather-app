import "./styles.css";
import { fetchData } from "./fetchData";
import { handleEmptyInput } from "./handleEmptyInput";
import { displayData } from "./displayData";

const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", async () => {
  let city = document.querySelector("#cityInput").value.trim();
  if (city !== "") {
    let json = await fetchData(city);
    displayData(json);
  } else {
    handleEmptyInput();
  }
});
