const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () =>
  addColor(1000, ".first", "red")
    .then(() => addColor(2000, ".second", "yellow"))
    .then(() => addColor(3000, ".third", "green"))
    .catch((err) => console.log(err))
);

const addColor = (time, selector, color) => {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve("Color changed");
      }, time);
    } else {
      reject("Element not found");
    }
  });
};
