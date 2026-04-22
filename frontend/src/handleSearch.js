import fetchData from "./fetchData";
import handleInputError from "./errorHandlers/handleInputError";
import handleNetworkError from "./errorHandlers/handleNetworkError";
import { displayData } from "./displayData";

export default async function handleSearch(temp, cityInput) {
  let city = cityInput.value.trim();

  if (!city) {
    handleInputError();
    return;
  }

  const data = await fetchData(city);

  if (data.error === "network") {
    handleNetworkError();
    return;
  }

  if (data.error === "api") {
    handleInputError();
    return;
  }

  displayData(data, temp);
  cityInput.value = "";
}
