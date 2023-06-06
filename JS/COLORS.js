function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let whileToggle = false;
const toggle = document.getElementById("rainbowToggle");

toggle.addEventListener('click', clicked);

function clicked() {
  console.log("clicked");
  var body = document.getElementById("body");

  whileToggle = !whileToggle;

  console.log(whileToggle);

  localStorage.setItem("whileToggleS", whileToggle);

  if (whileToggle) {
    COLORS(body);
  } else {
    body.style.color = "";
  }
  console.log(whileToggle);
}

async function COLORS(body) {
  var originalColor = body.style.color;

  console.log(whileToggle);

  while (whileToggle) {
    body.style.color = "#ff0000";
    await delay(300);
    body.style.color = "#ffa500";
    await delay(300);
    body.style.color = "#ffff00";
    await delay(300);
    body.style.color = "#008000";
    await delay(300);
    body.style.color = "#0000ff";
    await delay(300);
    body.style.color = "#4b0082";
    await delay(300);
    body.style.color = "#ee82ee";
    await delay(300);
    body.style.color = "#e3dfff";
  };

  body.style.color = originalColor;
}

window.addEventListener("DOMContentLoaded", function() {
  whileToggle = JSON.parse(localStorage.getItem("whileToggleS"));
  var body = document.getElementById("body");
  if (whileToggle) {
    COLORS(body);
    toggle.checked = true;
  }
});
