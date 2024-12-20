// Step 1: Creating Randoms
const x = Math.floor(Math.random() * 100 + 1); //random between 1 and 100
const y = Math.floor(Math.random() * 50 + 1); //random numbe between 1 and 50

//Step 2: Operations
const sumVariable = x + y; //sum variable
const productVariable = x * y; //product variable
const subtractVariable = x - y; // Subtraction Variable
const remainderVariable = x % y; //remainder Variable
const divisionVariable = Math.ceil(x / y); //Division Variable

// Step 3: Print out the operations
console.log("Value of 'x' is " + x + " while the value of 'y' is " + y);
console.log(x + ' + ' + y + ' = ' + sumVariable);
console.log(x + ' * ' + y + ' = ' + productVariable);
console.log(x + ' - ' + y + ' = ' + subtractVariable);
console.log(x + ' % ' + y + ' = ' + remainderVariable);
console.log(x + ' / ' + y + ' = ' + divisionVariable);

//
