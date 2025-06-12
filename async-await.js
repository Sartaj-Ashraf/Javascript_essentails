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
const getData = async () => {
  const user = await getUser("shahid");
  const article = await getArticles(user.id);
  console.log(article);
};
getData();
// getUser("shahid")
//   .then((user) => getArticles(user.id)
//   .then((article)=>console.log(article)))
//   .catch((error) => console.log(error));
