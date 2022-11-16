const DOMSelectors = {
  button: document.getElementById("btn"),
  artist: document.getElementById("artist"),
  title: document.querySelector(`tile`),
  form: document.querySelector(`form`),
  display: document.querySelector(`display`),
  url: document.querySelector(`url`),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  createcard();
});
function createcard() {
  DOMSelectors.display.insertAdjacentHTML(
    "afterend",
    `
    <div class='display-card'> 
    <img class'display-img" src='${DOMSelectors.url.value}" /><img>
    <h2 class
    `
  );
} // this function will cause new HTML to be added when the input button is clicked.
