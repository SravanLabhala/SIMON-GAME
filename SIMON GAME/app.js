let gameSequence = [];
let userSequence = [];
let btns = ["pink", "blue", "orange", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

// STEP 1
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

//STEP 2 [LEVEL UP & BUTTON FLASH]
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}
function levelUp() {
  userSequence = [];
  level++;
  h2.innerText = `Level ${level}`;
  // random button flash
  let randIndx = Math.floor(Math.random() * 3);
  let randomColor = btns[randIndx];
  let randomButton = document.querySelector(`.${randomColor}`);
  gameSequence.push(randomColor);
  console.log(gameSequence);
  // console.log(randIndx);
  // console.log(randomColor);
  btnFlash(randomButton);
}

function checkBtn(index) {
  // console.log("user level:", level);
  // let index = level - 1;
  if (gameSequence[index] == userSequence[index]) {
    if (gameSequence.length == userSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over ! <br> Your score is ${level}<br>PRESS ANY 'KEY' TO START`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#1e2227";
    }, 300);
    reset();
  }
}

// BUTTON PRESS
function btnPress() {
  let btn = this;
  console.log(this);
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSequence.push(userColor);
  checkBtn(userSequence.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// RESET GAME
function reset() {
  started = false;
  gameSequence = [];
  userSequence = [];
  level = 0;
}
