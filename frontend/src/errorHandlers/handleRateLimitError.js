export default function handleRateLimitError() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("error-message");

  const icon = document.createElement("span");
  icon.classList.add("mdi", "mdi-timer-sand");
  icon.style.marginRight = "10px";

  div.appendChild(icon);

  const text = document.createElement("span");
  text.textContent = "Too many requests! Please wait a minute.";

  div.appendChild(text);
  main.appendChild(div);
}
