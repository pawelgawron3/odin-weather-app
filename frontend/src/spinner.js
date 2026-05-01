const loader = document.querySelector("#loader");
const emojis = ["🌤️", "⛅", "🌧️", "🌩️"];
let emojiInterval;

function showLoader() {
  const emojiEl = document.querySelector("#weatherEmoji");
  loader.style.display = "flex";
  loader.classList.remove("hidden");

  let i = 0;
  emojiInterval = setInterval(() => {
    emojiEl.textContent = emojis[i % emojis.length];
    i++;
  }, 500);
}

function hideLoader() {
  loader.classList.add("hidden");
  clearInterval(emojiInterval);

  setTimeout(() => {
    loader.style.display = "none";
  }, 300);
}

export { showLoader, hideLoader };
