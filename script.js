const boxes = document.querySelectorAll(".key");
const start = document.getElementById("start");
const key = document.getElementById("key");
const keyCodeValue = document.getElementById("key-code");
const codeValue = document.getElementById("code");

window.addEventListener("keydown", e => {
  key.innerText = e.key;
  keyCodeValue.innerText = e.keyCode;
  codeValue.innerText = e.code;

  starting();
})

function starting() {
  boxes.forEach(box => {
    box.classList.remove("hide");
  });

  start.classList.add("hide");
}