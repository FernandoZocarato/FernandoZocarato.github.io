const circ = document.querySelector("#circ");

function seguirMouse(event) {
  circ.style.top = event.y + "px";
  circ.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
