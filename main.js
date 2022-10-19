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

const numberButtons = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const delBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");
const resetBtn = document.querySelector("[data-reset]");
const display = document.querySelector("[data-display]");

class calculator {
  constructor(display) {
    this.display = display;
    this.clear();
  }

  clear() {
    this.display = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.display.includes(".")) return;
    this.display = this.display.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.operation = operation;
  }

  compute() {}

  updateDisplay() {
    display.innerHTML = this.display;
  }
}

const calc = new calculator(display);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.appendNumber(button.textContent);
    calc.updateDisplay();
  });
});

operation.forEach((button) => {
  button.addEventListener("click", () => {
    calc.chooseOperation(button.textContent);
    calc.updateDisplay();
  });
});
