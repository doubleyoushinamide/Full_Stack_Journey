let favActorFirstNAme = 'Kanayo ';
let favActorLastName = 'O-Kanayo';
//concatenation using + sign
let fullName = favActorFirstNAme + favActorLastName;

console.log(fullName);

// concatenation using string literals
console.log(`${favActorFirstNAme}Agunechamba ${favActorLastName}`);

//capitalize fav actor name
let upperCase = fullName.toUpperCase();
// console.log(capitalize);

let message = `My favourite Actor is ${upperCase} & say something
about your fav actor`;
console.log(message);

// appending more messages using '+='
console.log((message += '; his best show is Silicon Valley'));
