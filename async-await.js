// Async Await Concept
// ===================

// Async Await is a way to write asynchronous code that is easier to read and understand. It is a syntax sugar on top of Promises. It allows us to write asynchronous code that looks like synchronous code.

// In this example, we are going to use two functions: getUser and getArticles. These functions return Promises. We are going to use Async Await to write a function that will call these functions and log the result to the console.

// getUser function takes a name and returns a Promise that resolves with the user object if the user is found, or rejects with an error if the user is not found.

// getArticles function takes a userId and returns a Promise that resolves with the articles array if the articles are found, or rejects with an error if the articles are not found.

const users = [
  {
    id: 1,
    name: "sartaj",
    age: 22,
    gender: "male",
  },
  {
    id: 2,
    name: "aquib",
    age: 22,
    gender: "male",
  },
  {
    id: 3,
    name: "shahid",
    age: 22,
    gender: "male",
  },
];

const articles = [
  {
    userId: 1,
    articles: ["one", "two", "three"],
  },
  {
    userId: 2,
    articles: ["four", "five"],
  },
  {
    userId: 3,
    articles: ["six", "seven", "eight", "nine"],
  },
];

function getUser(name) {
  return new Promise((resolve, reject) => {
    let user = users.find((user) => user.name === name);
    if (user) {
      resolve(user);
    } else {
      reject("User not found");
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    let article = articles.find((article) => article.userId === userId);
    if (article) {
      resolve(article);
    } else {
      reject("Articles not found");
    }
  });
}

// Async Await syntax
const getData = async () => {
  const user = await getUser("shahid");
  const article = await getArticles(user.id);
  console.log(article);
};
getData();

// Promise syntax with .then chaining
// getUser("shahid")
//   .then((user) => getArticles(user.id)
//   .then((article)=>console.log(article)))
//   .catch((error) => console.log(error));
