const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("big-black-box"),
  text: document.querySelector("#text"),
  points: document.querySelectorAll(".point"),
};
console.log(DOMSelectors.button);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContext = "This is now a big bigger red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
