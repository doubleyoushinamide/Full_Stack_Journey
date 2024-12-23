//1. First Solution
let x;
const library = [
  {
    title: 'Olushola Salau',
    author: 'Chike Gavi',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Shina',
    author: 'Gonzalez Pedri',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
console.log(library);

//2. Solution
//destructing the library[0].title to 'firstbook'
const { title: firstbook } = library[0];

console.log(firstbook);

//3. Convertto JSON
const toJson = JSON.stringify(library);
console.log(toJson);

//reverse order
const reverseJSON = JSON.parse(toJson);
console.log(reverseJSON);
