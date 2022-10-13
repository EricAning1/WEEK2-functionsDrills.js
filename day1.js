// Prompt 1: I want you to write a function that has a dog age, the function is for the dogs birthday and will increase the dogs age by 1.
// Prompt 2: I want you to make an array of dog names with 5 dogs. The dogs are at doggy daycare. The last dog in the array got picked up and three new dogs arrived
// Prompt 3: I want you to make a user object with 5 properties (name, age, email, friends, and hobbies). ONE function will add 1 to the age, ANOTHER FUNCTION will add a new friend

// const calDogAge = () => {
//   let age = 5;
//   birthday = age + 1;
//   return birthday;
// };
// //console.log(calDogAge());
// const dogNames = ["Bright", "Smart", "Good", "Excellent", "Grace"];
// dogNames.pop();
// dogNames.push("Clem", "Liz", "Jay");
// //console.log(dogNames);

// const myUser = {
//   name: "Prince",
//   age: 27,
//   email: "prince@gmail.com",
//   friends: ["Kobby", "Drake", "Jay"],
//   hobbies: ["Soccer", "Movies", "Reading"],
// };

// const increaseAge = () => {
//   let newAge = myUser.age + 1;
//   return newAge;
// };
// //console.log(increaseAge());
// let newFriend = friends.push("New");
// const addNewFriend = () => {
//   let additionalFriend = myUser.friends.newFriend;
//   return addNewFriend;
//};
//console.log(addNewFriend());
//console.log(typeof myUser.);
//console.log(new Date());

// Prompt 1: make a variable called studentGrade. Write a function that takes a parameter called grade. Set the student's grade to 80. log it.
// change the grade to 55. Log it. Change grade to 99.

const studentGrade = (grade) => {
  console.log(grade);
};
studentGrade(80);
studentGrade(55);
studentGrade(99);

// Prompt 2: Make an array of students in a kindergarten class. create a function that has a parameter of name and adds that name to the class.
// Add 3 students to the class.

const nameOfStudents = ["Michael", "Bob", "Jack"];
const newStudents = (name) => {
  nameOfStudents.push(name);
};
newStudents("Eric");

// Prompt 3: Make a user object. Make a function that takes user as a parameter and checks if their age is above 21 - add a new property to the object called canDrink and assign it true or false.
// If the user has no email log "User is unverfied"

// Prompt 4: Doggy Daycare. Make array of present dogs. Make function that takes a parameter of newDogs (array). take the array of new dogs and add them to the array of present dogs.

const presentDogs = ["Bright", "Mur", "Ban"];
const addArrays = (newDogs) => {
  let myDogs = ["Blacko", "Quart"];
  for (i = 0; i < presentDogs.length; i++) {
    console.log(myDogs.push(presentDogs[i]));
  }
};
console.log(addArrays());
