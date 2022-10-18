let buttons = document.getElementsByClassName("button");
let arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

const body = document.querySelector("body");
const title = document.querySelector(".title");

title.addEventListener("click", () => {
  body.classList.add("theme-01");
});
