// For prompts 1 - 3:
class Vehicle {
  // myNewCar = {vehicleSpeed: 240, vehicleColor: yellow}
  constructor(speed, color, owner, year) {
    this.vehicleSpeed = speed;
    this.vehicleColor = color;
    this.vehicleOwner = owner;
    this.vehicleYear = year;
  }
  //   let logVehicleInformation = function() {
  //   console.log(this.vehicleSpeed, this.vehicleColor, this.vehicleOwner, this.vehicleYear);
}
// prompt 1: Use class Vehicle to make 3 new vehicles called plane, car, and train.

let newPlane = new Vehicle(1600, "white", "Eric", 2022);
let newCar = new Vehicle(380, "grey", "Mike", 2020);
let newTrain = new Vehicle(890, "red", "Peter", 2023);
let logVehicleInformation = new Vehicle(160, "black", "Bob", 2021);
console.log(newPlane, newCar, newTrain, logVehicleInformation);

// rompt 2: Add a new property to class Vehicle called "vehicleYear" (and the parameter "year).
// prompt 3: Add a new property to class Vehicle called "logVehicleInformation" that will log the speed, color, owner, and year of the vehicle.

// Prompt 4: Create a new class called "Doctor" that will make new objects. The class should have at least 4 properties (for example "age"). One property should be a function that will log "time to go to work!". One property should be a list of coworkers.

class Doctor {
  constructor(name, age, height, city) {
    this.doctorName = name;
    this.dotorAge = age;
    this.dotorHeight = height;
    this.listCoWorker = ["Jonny", "Adrian", "Steve"];
    this.dotorCity = city;
    this.getUp = () => {
      console.log("time to go to work!");
    };
  }
}
let newDoctor = new Doctor("Eric", 38, 6, "New York City");

console.log(newDoctor);
newDoctor.getUp();
// console.log(newDoctor.listCoWorker);

// Prompt 5: create a new class called "User" that will make new objects. The class should have user information and the ability to login the user and logout the user - console.log("you are logged in!");

class User {
  constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.canLog = () => {};
  }
}

let newUser = new User("Bob", 39, "Finance");
console.log(newUser);

// class Car {
//     constructor(speed, color, owner) {
//         this.vehicleSpeed = speed,
//         this.vehicleColor = color,
//         this.vehicleOwner = owner,

//     }
// };

//console.log(car);

//console.log(car);

// const AkbarCar = new Car(120, 'black', 'Akbar');

// AkbarCar.year = 2022;

// console.log(AkbarCar)
// class Car {
//     constructor(speed, color, owner) {
//         this.vehicleSpeed = speed,
//         this.vehicleColor = color,
//         this.vehicleOwner = owner,
//         this.startEngine = () => {
//           console.log("vroommmmmmm")
//         }
//     }
// };

// //console.log(car);

// //console.log(car);

// const AkbarCar = new Car(120, 'black', 'Akbar');

// AkbarCar.year = 2022;

// AkbarCar.startEngine()

// class car {
//     constructor(speed, color, owner) {
//         this.vehicleSpeed = speed,
//         this.vehicleColor = color,
//         this.vehicleOwner = owner
//     }
// };

// //console.log(car);

// car.vehicleYear = "year"

// //console.log(car);

// const logVehicleInformation = new car(120, 'black', 'ABC', 2001);

// console.log(logVehicleInformation)
