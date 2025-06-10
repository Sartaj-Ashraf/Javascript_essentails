// Concept: Dynamic Keys
// ================

// In JavaScript, objects can have dynamic keys, which are keys that are not known until runtime. This is useful when you want to create an object with keys that are based on user input or other dynamic data.

// Example
const person = { name: "Sartaj" };
console.log(person.name);
person.age = 20;
console.log(person);

// Using bracket notation to access a property
const items = {
  "fetaured-items": ['item1', 'item2'],
};

console.log(items['fetaured-items']); // ['item1', 'item2']


// Using bracket notation to create a property
const appName = "game";
const app = {
  [appName]: true,
};

app[appName] = "sartaj added";
console.log(app); // { game: 'sartaj added' }


// Using bracket notation to update a property
const state = {
  loading: true,
  data: null,
  error: null,
};

function updateState(key, value) {
  state[key] = value;
}

updateState("loading", true);
updateState("data", [{ id: 1, name: "sartaj" }, { id: 2, name: "aquib" }]);
// updateState("error", new Error("Something went wrong"));
updateState("prototype", []);
console.log({ ...state });

// Destructuring
const { data,loading,error } = state;
if(loading){
    console.log("Loading...")
    data.map((item) => console.log(item.name));
}

