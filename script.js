let sym = Symbol();

const user = {
  name: "kaif",
  sym: "mai acha larka hun ",
  age: "15",
  class: "9th",
  passion: ["cricket", "web develpment ", "gaming"],
  city: "karachi",
  friend: "?",
  attendence: [false, 35, true],
  salary: function sal() {
    return 1000000;
    
  },
};
console.log(user.salary);
// user.age = "16";
// console.log(user.age);

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
console.log(kaifApps);//nonSingletone