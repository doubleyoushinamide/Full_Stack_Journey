// Java Script Object Notation (JSON)
// Used to store configurations and data
// Used to communicate between servers and web-pages

// const person = {
//   name: 'Shina OluwaSalau',
//   age: 27,
//   email: 'olusholasalau@gmail.com',
//   hobbies: ['Reading', 'Football', 'Games'],
//   address: {
//     city: 'Omu-Aran',
//     idk: true,
//   },
// };

// //converts JS object to a json string
// const jasonString = JSON.stringify(person);
// console.log(jasonString);
// // converts the json strings to a JS object
// const jasonObject = JSON.parse(jasonString);
// console.log(jasonObject);

// Dates
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// console.log('Year:', year);
// console.log('Month:', month);
// console.log('Day:', day);
// console.log('Hour:', hour);
// console.log('Minutes:', minutes);
// console.log('Seconds:', seconds);

const date = new Date();

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());
