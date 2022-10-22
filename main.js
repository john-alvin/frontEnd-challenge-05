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

const keys = document.querySelector(".container-buttons");
const display = document.querySelector(".calc-display");
const calc = document.querySelector(".calc-container");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calc.dataset;

  if (type === "numbers") {
    if (displayValue === "0") {
      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  if (type === "operator") {
    calc.dataset.firstNumber = displayValue;
    calc.dataset.operator = key.dataset.key;
  }

  if (type === "equal") {
    const firstNumber = calc.dataset.firstNumber;
    const operator = calc.dataset.operator;
    const secondNumber = displayValue;

    display.textContent = calculate(firstNumber, operator, secondNumber);
  }
  calc.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  let result = "";

  if (operator === "plus") result = firstNumber + secondNumber;
  if (operator === "minus") result = firstNumber - secondNumber;
  if (operator === "times") result = firstNumber * secondNumber;
  if (operator === "divide") result = firstNumber / secondNumber;

  return result;
}
