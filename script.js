"use strict";

// Variables
const newGame = document.querySelector("#new-game");

const roll = document.querySelector("#roll");

const pass = document.querySelector("#pass");

const howTo = document.querySelector("#how-to");

const rename1 = document.querySelector("#rename1");

const rename2 = document.querySelector("#rename2");

const yes = document.querySelector("#yes");

const no = document.querySelector("#no");

const close = document.querySelector("#close");

const identity1 = document.querySelector("#name1");

const identity2 = document.querySelector("#name2");

const card1 = document.querySelector("#card-1");

const card2 = document.querySelector("#card-2");

const theDice = document.querySelector("#the-dice");

const currentScore1 = document.querySelector("#current-score1");

const currentScore2 = document.querySelector("#current-score2");

const totalScore1 = document.querySelector("#total-score1");

const totalScore2 = document.querySelector("#total-score2");

const overlay = document.querySelector("#overlay");

const warning = document.querySelector("#warning");

const inst = document.querySelector("#inst");

const popupRename = document.querySelector("#popup-rename");

const reAssignBtn = document.querySelector("#re-assign-btn");

const nameField = document.querySelector("#name-field");

const mainHeading = document.querySelector("#main-heading");

let activePlayer = 1;
let diceNumber;
let renameRequest = 1;
let range = 50;

// Functions
function setActivePlayer() {
  if (card1.classList.contains("active")) {
    let current;
    let final;
    current = Number(currentScore1.textContent);
    final = Number(totalScore1.textContent) + current;
    totalScore1.textContent = final;
    card1.classList.remove("active");
    card2.classList.add("active");
    currentScore1.textContent = "0";
    activePlayer = 2;
    winOrLoose();
  } else {
    let current;
    let final;
    current = Number(currentScore2.textContent);
    final = Number(totalScore2.textContent) + current;
    totalScore2.textContent = final;
    card2.classList.remove("active");
    card1.classList.add("active");
    currentScore2.textContent = "0";
    activePlayer = 1;
    winOrLoose();
  }
}

function rolling() {
  diceNumber = Number(Math.floor(Math.random() * 6 + 1));
  switch (diceNumber) {
    case 1:
      theDice.setAttribute("src", "./img/1.png");
      break;
    case 2:
      theDice.setAttribute("src", "./img/2.png");
      break;
    case 3:
      theDice.setAttribute("src", "./img/3.png");
      break;
    case 4:
      theDice.setAttribute("src", "./img/4.png");
      break;
    case 5:
      theDice.setAttribute("src", "./img/5.png");
      break;
    case 6:
      theDice.setAttribute("src", "./img/6.png");
      break;
  }
  if (activePlayer === 1) {
    if (diceNumber === 1) {
      currentScore1.textContent = "0";
      setActivePlayer();
    } else {
      let calc;
      let result;
      calc = Number(currentScore1.textContent);
      result = calc + diceNumber;
      currentScore1.textContent = result;
    }
  } else {
    if (diceNumber === 1) {
      currentScore2.textContent = "0";
      setActivePlayer();
    } else {
      let calc;
      let result;
      calc = Number(currentScore2.textContent);
      result = calc + diceNumber;
      currentScore2.textContent = result;
    }
  }
}

function warnPopupOpen() {
  if (
    overlay.classList.contains("hidden") &&
    warning.classList.contains("hidden")
  ) {
    warning.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

function instPopupOpen() {
  if (
    overlay.classList.contains("hidden") &&
    inst.classList.contains("hidden")
  ) {
    inst.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

function renamePopupOpen() {
  if (
    overlay.classList.contains("hidden") &&
    popupRename.classList.contains("hidden")
  ) {
    popupRename.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

function popupClose() {
  if (!overlay.classList.contains("hidden")) {
    overlay.classList.add("hidden");
  }
  if (!warning.classList.contains("hidden")) {
    warning.classList.add("hidden");
  }
  if (!inst.classList.contains("hidden")) {
    inst.classList.add("hidden");
  }
  if (!popupRename.classList.contains("hidden")) {
    popupRename.classList.add("hidden");
  }
}

function playAgain() {
  identity1.textContent = "Player 1";
  identity2.textContent = "Player 2";
  currentScore1.textContent = "0";
  currentScore2.textContent = "0";
  totalScore1.textContent = "0";
  totalScore2.textContent = "0";
  document.getElementById("roll").style.pointerEvents = "all";
  document.getElementById("pass").style.pointerEvents = "all";
  mainHeading.textContent = `Roll The Dice.`;
  popupClose();
}

function currentInput(inp) {
  renameRequest = inp;
}

function changeName() {
  if (renameRequest === 1) {
    identity1.textContent = nameField.value;
  } else {
    identity2.textContent = nameField.value;
  }
  nameField.value = "";
  popupClose();
}

function winOrLoose() {
  if (totalScore1.textContent >= range) {
    mainHeading.textContent = `${identity1.textContent} Won`;
    document.getElementById("roll").style.pointerEvents = "none";
    document.getElementById("pass").style.pointerEvents = "none";
  }
  if (totalScore2.textContent >= range) {
    mainHeading.textContent = `${identity2.textContent} Won`;
    document.getElementById("roll").style.pointerEvents = "none";
    document.getElementById("pass").style.pointerEvents = "none";
  }
}

function changeRange() {
  range = Number(document.getElementById("range-field").value);
  document.getElementById("range-field").value = "";
  popupClose();
}
