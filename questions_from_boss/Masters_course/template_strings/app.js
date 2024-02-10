/**
 * Template Strings or literals are a feature
 * in JS that allows you to create strings with embedded
 * expressions. They are denoted by backticks `` instead of single
 * or double quotes. Template strings provide a more flexible and
 * consice way to construct strings, especialy when they involve
 * variables or expressions.
 */
const firstName = 'Shina';
const lastNAme = 'Salau';
//using the template literals or strings

console.log(`My names are ${firstName} and Surname is ${lastNAme}`);

//another use in scenarios of functions

const greetMe = function () {
  return `Good Morning, Mr. Salau!`;
};

console.log(`Hello,\n ${greetMe()}`);
