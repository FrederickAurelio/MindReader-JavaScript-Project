const existBtn = document.getElementById("existBtn");
const nopeBtn = document.getElementById("nopeBtn");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");

const cardsArray = [card1, card2, card3, card4, card5, card6, card7];
card1.value = 1;
card2.value = 2;
card3.value = 4;
card4.value = 8;
card5.value = 16;
card6.value = 32;
card7.value = 64;

let current = 6;
let pressTime = 0;
let count = 1;
let number = 0;

shuffle(cardsArray);
document.getElementById("card-info").textContent = "Cards : " + count + "/7";

function shuffle(array) {
  for (i = 0; i < array.length; i += 1) {
    let randomIndex = Math.floor(Math.random() * array.length);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}
var mobile = window.matchMedia("(max-width: 760px)");
var desktop = window.matchMedia("(min-width: 761px)");
start(mobile, desktop);

function start(mobile, desktop) {
  if (mobile.matches) {
    cardsArray[6].style.marginRight = "0px";
    cardsArray[6].style.opacity = "1";
  } else if (desktop.matches) {
    cardsArray[6].style.marginRight = "0px";
    cardsArray[6].style.opacity = "1";
  }
}

existBtn.addEventListener("click", function () {
  AnimationOut();
  AnimationIn();
  btnDisable();
  counter();
  RemoveAll();
  displayEnd();
  resultPlus();
});
nopeBtn.addEventListener("click", function () {
  AnimationOut();
  AnimationIn();
  btnDisable();
  counter();
  RemoveAll();
  displayEnd();
  result();
});

function AnimationOut() {
  let x = 0;
  let scaleX = 1;
  let scaleY = 1;
  let timerId = null;

  timerId = setInterval(frame, 5);
  function frame() {
    if (mobile.matches) {
      if (x >= 110 && scaleX <= 0) {
        clearInterval(timerId);
        current -= 1;
      } else {
        x += 0.8;
        scaleX -= 0.01;
        scaleY -= 0.01;
        cardsArray[current].style.marginLeft = x + "px";
        cardsArray[current].style.transform =
          "scale(" + scaleX + "," + scaleY + ")";
        cardsArray[current].style.opacity = 0;
      }
    } else if (desktop.matches) {
      if (x >= 800 && scaleX <= 0) {
        clearInterval(timerId);
        current -= 1;
      } else {
        x += 6;
        scaleX -= 0.01;
        scaleY -= 0.01;
        cardsArray[current].style.marginLeft = x + "px";
        cardsArray[current].style.transform =
          "scale(" + scaleX + "," + scaleY + ")";
        cardsArray[current].style.opacity = 0;
      }
    }
  }
}

function AnimationIn() {
  let x = 0;
  let scaleX = 0;
  let scaleY = 0;
  let timerId = null;

  timerId = setInterval(frame, 5);
  function frame() {
    if (current < 1) {
    } else {
      if (mobile.matches) {
        if (x >= 500) {
          clearInterval(timerId);
        } else {
          x += 5;
          if (scaleX >= 1) {
          } else {
            scaleX += 0.01;
            scaleY += 0.01;
          }
          cardsArray[current - 1].style.marginRight = 500 - x + "px";
          cardsArray[current - 1].style.transform =
            "scale(" + scaleX + "," + scaleY + ")";
          cardsArray[current - 1].style.opacity = 1;
        }
      } else if (desktop.matches) {
        if (x >= 900) {
          clearInterval(timerId);
        } else {
          x += 8;
          if (scaleX >= 1) {
          } else {
            scaleX += 0.01;
            scaleY += 0.01;
          }
          cardsArray[current - 1].style.marginRight = 900 - x + "px";
          cardsArray[current - 1].style.transform =
            "scale(" + scaleX + "," + scaleY + ")";
          cardsArray[current - 1].style.opacity = 1;
        }
      }
    }
  }
}

function btnDisable() {
  let timerId = null;
  let x = 0;
  existBtn.disabled = true;
  existBtn.style.opacity = 0.2;
  nopeBtn.disabled = true;
  nopeBtn.style.opacity = 0.2;
  timerId = setInterval(frame, 300);
  function frame() {
    if (x >= 500) {
      existBtn.disabled = false;
      nopeBtn.disabled = false;
      existBtn.style.opacity = 1;
      nopeBtn.style.opacity = 1;
      clearInterval(timerId);
    } else {
      x = x + 200;
    }
  }
}
function RemoveAll() {
  if (pressTime == 6) {
    existBtn.style.display = "none";
    nopeBtn.style.display = "none";
    let element = document.querySelector("#button-container");
    element.style.marginTop = "0px";
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card5.style.display = "none";
    card6.style.display = "none";
    card7.style.display = "none";
    pressTime += 1;
  } else {
    pressTime += 1;
  }
}
function counter() {
  if (count == 7) {
    let element = document.getElementById("card-info");
    element.style.display = "none";
  } else {
    count += 1;
    document.getElementById("card-info").textContent =
      "Cards : " + count + "/7";
  }
}
function displayEnd() {
  let element = document.getElementById("end");
  setTimeout(wait1, 10);
  setTimeout(wait2, 1000);
  function wait1() {
    if (pressTime == 7) {
      element.style.display = "block";
    } else {
    }
  }
  function wait2() {
    if (pressTime == 7) {
      element.style.transition = "opacity 2s";
      element.style.opacity = "1";
    } else {
    }
  }
}
function resultPlus() {
  number += cardsArray[current].value;
  if (pressTime == 7) {
    if (number <= 0 || number > 100) {
      let element = document.getElementById("result");
      element.textContent = "Unexist";
    } else {
      let element = document.getElementById("result");
      element.textContent = number;
    }
  }
}
function result() {
  if (pressTime == 7) {
    if (number <= 0 || number > 100) {
      let element = document.getElementById("result");
      element.textContent = "Unexist";
    } else {
      let element = document.getElementById("result");
      element.textContent = number;
    }
  }
}
