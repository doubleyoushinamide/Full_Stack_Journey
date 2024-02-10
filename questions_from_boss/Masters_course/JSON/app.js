// Java Script Object Notation (JSON)
// Used to store configurations and data
// Used to communicate between servers and web-pages

const person = {
  name: 'Shina OluwaSalau',
  age: 27,
  email: 'olusholasalau@gmail.com',
  hobbies: ['Reading', 'Football', 'Games'],
  address: {
    city: 'Omu-Aran',
    idk: true,
  },
};

//converts JS object to a json string
const jasonString = JSON.stringify(person);
console.log(jasonString);
// converts the json strings to a JS object
const jasonObject = JSON.parse(jasonString);
console.log(jasonObject);
