const DOMSelectors = {
  button: document.getElementById("btn"),
  artist: document.getElementById("artist"),
  title: document.getElementById("tile"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
  url: document.getElementById("url"),
};
function card() {
  url = DOMSelectors.urlInput.value;
  artist = DOMSelectors.artistInput.value;
  title = DOMSelectors.titleInput.value;
  DOMSelectors.display.insertAdjacentHTML(
    "afterend",
    `
    <div class="display-card"> 
    <img class"display-img" src="${DOMSelectors.url.value}" /><img>
    <h2 class="display-artist">${DOMSelectors.artist.value}</h2>
    <h3 class="display-title">${DOMSelectors.title.value}</h3>
    <button class="remove btn">Remove</button>
    </div>
    `
  );
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  card();
});
