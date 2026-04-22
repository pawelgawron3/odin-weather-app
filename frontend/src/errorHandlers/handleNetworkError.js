export default function handleNetworkError() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("error-message");

  const icon = document.createElement("span");
  icon.classList.add("mdi", "mdi-wifi-off");
  icon.style.marginRight = "10px";

  div.appendChild(icon);

  const text = document.createElement("span");
  text.textContent = "Server is unavailable. Please try again later.";

  div.appendChild(text);

  main.appendChild(div);
}
