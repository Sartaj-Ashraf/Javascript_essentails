// This is an example of a common problem in JavaScript called "callback hell". It's called that because it looks like a bunch of nested callbacks that are hard to read and understand.

// The goal of this code is to change the color of each of the three headings on the page, one after the other.

// The first way to do this is to use a bunch of setTimeouts, like so:
// btn.addEventListener("click", () => {
//   setTimeout(() => {first.style.color='red'}, 1000);
//   setTimeout(() => {second.style.color='yellow'}, 3000);
//   setTimeout(() => {third.style.color='green'}, 4000);
// });

// However, this can be hard to read and understand, especially if there are many more headings to change. So instead, we can use callbacks to make the code more linear and easier to read.

// The way to do this is to use a callback function for each setTimeout, like so:

const first =document.querySelector(".first")
const second =document.querySelector(".second")
const third =document.querySelector(".third")
const btn =document.querySelector(".btn")

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
      second.style.color = "yellow";
      setTimeout(() => {
        third.style.color = "green";
      }, 2000);
    }, 3000);
  }, 1000);
});

// This way, each setTimeout is only responsible for changing one heading, and the next one is called after the previous one has finished. This makes the code easier to read and understand.
