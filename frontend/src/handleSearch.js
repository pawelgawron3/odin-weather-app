import fetchData from "./fetchData";
import handleInputError from "./errorHandlers/handleInputError";
import handleNetworkError from "./errorHandlers/handleNetworkError";
import { showLoader, hideLoader } from "./spinner";
import displayData from "./displayData";

export default async function handleSearch(temp, cityInput) {
  let city = cityInput.value.trim();

  if (!city) {
    handleInputError();
    return;
  }

  showLoader();
  const data = await fetchData(city);

  if (data?.error === "network") {
    handleNetworkError();
  } else if (data?.error === "api") {
    handleInputError();
  } else {
    displayData(data, temp);
  }

  hideLoader();
  cityInput.value = "";
}
