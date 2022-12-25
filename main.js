"use strict";

let buttons = document.getElementsByClassName("button");
let arr = [...buttons];

const body = document.querySelector("body");

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      body.classList.remove("theme-01");
      body.classList.remove("theme-02");
    } else if (index == 1) {
      body.classList.add("theme-01");
      body.classList.remove("theme-02");
    } else {
      body.classList.add("theme-02");
      body.classList.remove("theme-01");
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

const display = document.querySelector(".calc-display");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const btn = document.querySelectorAll("button");

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  display.textContent = calculator.displayValue;
}
updateDisplay();
