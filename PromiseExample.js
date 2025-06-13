// Promise Example
// ===============

// This is an example of a Promise in JavaScript. A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// The idea is that we want to change the color of each of the three headings on the page one after the other. We can do this by using a Promise to wait for the first color to be changed, then wait for the second color to be changed, and finally wait for the third color to be changed.

// The addColor function takes three arguments: the time to wait, the CSS selector of the element to change, and the color to change it to. It returns a Promise that resolves with a success message if the element is found, or rejects with an error message if the element is not found.

// The btn.addEventListener is an event listener that listens for a click on the button. When the button is clicked, it calls the addColor function three times in a row, with different times and colors. The .then method is used to wait for the previous Promise to resolve before calling the next one. The .catch method is used to catch any errors that might occur.

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
        resolve(`Color changed to ${color}`);
      }, time);
    } else {
      reject(`Element not found: ${selector}`);
    }
  });
};
