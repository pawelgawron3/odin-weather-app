function handleEmptyInput() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("error-message");

  const icon = document.createElement("span");
  icon.classList.add("mdi", "mdi-alert-circle-outline");
  icon.style.marginRight = "10px";

  div.appendChild(icon);

  const text = document.createElement("span");
  text.textContent = "Please enter a city name!";

  div.appendChild(text);

  main.appendChild(div);
}

export { handleEmptyInput };
