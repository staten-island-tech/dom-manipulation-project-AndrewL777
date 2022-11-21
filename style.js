const DOMSelectors = {
  button: document.getElementById("btn"),
  artist: document.getElementById("artist"),
  title: document.getElementById("title"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
  url: document.getElementById("url"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  card();
});
function card() {
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",
    `
    <div class="display-card"> 
    <img class src="${DOMSelectors.url.value}" /><img>
    <h2 class="artist">${DOMSelectors.artist.value}</h2>
    <h3 class="title">${DOMSelectors.title.value}</h3>
    <button class="remove btn">Remove</button>
    </div>
    `
  );
  deletebtn();
}

function deletebtn() {
  let del = document.querySelectorAll(".remove");

  del.forEach((bt) => {
    bt.addEventListener("click", function (bt) {
      this.parentElement.remove();
    });
  });
}
