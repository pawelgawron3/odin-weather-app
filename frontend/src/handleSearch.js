import fetchData from "./fetchData";
import { handleInputError } from "./handleInputError";
import { displayData } from "./displayData";

export default async function handleSearch(temp, cityInput) {
  let city = cityInput.value.trim();

  if (!city) {
    handleInputError();
    return;
  }

  const data = await fetchData(city);

  if (data) {
    displayData(data, temp);
  } else {
    handleInputError();
  }

  cityInput.value = "";
}
