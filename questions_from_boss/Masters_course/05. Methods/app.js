// first way of creating a method of a function
//create the methods

// const profile = {
//     //property and values
//   name: 'Shina',
//   location: ['Omu-Aran', 'Kwara-State', 'Nigeria'],
//   age: 27,
// };

// function myNames() {
//   return `My names are ${profile.name}, age ${profile.age} and I'm from ${profile.location[1]}`;
// }

// console.log(myNames());

// Anotherway and the best way to create methods inside an object:

const profile = {
  //property and values
  name: 'Shina Salau',
  location: ['Omu-Aran', 'Kwara-State', 'Nigeria'],
  age: 27,
  greetings: function () {
    return `My names are ${profile.name}, age ${profile.age} and I'm from ${profile.location[2]}`;
  },
};

console.log(profile.greetings());
