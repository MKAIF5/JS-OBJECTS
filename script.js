let sym = Symbol();

const user = {
  name: "kaif",
  sym: "mai acha larka hun ",
  age: "15",
  class: "9th",
  passion: ["cricket", "web develpment ", "gaming"],
  city: "karachi",
  "friend": "?"
};

console.log(user.sym);
//OBJECTS
const mySym = Symbol("mykey1")
const myObjects = {
  [mySym]: "mykey1",
  name: "kaif",
  age: "15",
  location: "karachi",
  email: "kaif@gmail.com",
  online: true,
  lastOnlineDays: ["monday", "thursday", "saturday"],
  siblings: { sister: "1", brother: "0" }
}

// console.log(myObjects.location);
// console.log(myObjects[location]);
// console.log(myObjects[mySym]);

// Object.freeze(myObjects)
// myObjects.email = "kaif@google.com"
// myObjects.email = "kaif@chatgpt.com"
// console.log(myObjects);

const kaifApp = new Object();
const kaifApps = {};
console.log(kaifApp); //singleTone
// console.log(kaifApps);//nonSingletone

const course = {
  courses: "web and develpment",
  price: "999rs",
  teacher: "shehzad"
}

for(key in course){
  console.log(key + " " + course[key] );
}