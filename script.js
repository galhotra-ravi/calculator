let AC = document.querySelector(".AC");
let answerBoxContainer = document.querySelector(".answerBox")
let answerBox = document.querySelector(".answerBox textarea");
let equalBtn = document.querySelector("#equalBtn");
let values = document.querySelectorAll(".values");
let clear = document.querySelector(".clear");

AC.addEventListener("click", () => {
  answerBox.value = "";
});

clear.addEventListener("click", () => {
  answerBox.value = answerBox.value.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
  if (answerBox.value != "") {
    answerBox.value = eval(answerBox.value);
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key == "Enter") {
    if (answerBox.value != "") {
      answerBox.value = eval(answerBox.value);
    }
  }
});

for (let val of values) {
  val.addEventListener("click", () => {
    answerBox.value = answerBox.value + val.innerText;
    answerBox.focus();
    // answerBox.setSelectionRange(answerBox.value.length, answerBox.value.length);
  });
}


answerBoxContainer.addEventListener("click", () => {
  answerBox.focus();
})

answerBox.addEventListener("keydown", (evt) => {
  if (evt.key == "Enter") {
    evt.preventDefault();
  }
});

window.onload = () => {
  answerBox.focus();

  document.body.addEventListener("keypress", () => {
      if (document.activeElement !== answerBox) {
          answerBox.focus();
      }
  });
};

window.addEventListener('resize', function() {
  if (window.innerWidth <= 600) {
      answerBox.setAttribute('disabled', 'disabled');
    } else {
      textarea.removeAttribute('disabled');
  }
});