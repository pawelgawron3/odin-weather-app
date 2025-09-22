import "./styles.css";
import { fetchData } from "./fetchData";
import { handleEmptyInput } from "./handleEmptyInput";

const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
  let city = document.querySelector("#cityInput").value.trim();
  if (city !== "") {
    let json = fetchData(city);
  } else {
    handleEmptyInput();
  }
});
