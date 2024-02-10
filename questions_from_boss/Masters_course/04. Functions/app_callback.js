// Callback function

/**
 * When we provide a function as an (argument) to
 * other functions, that function is known
 * as a callback function
 */

// function showCallFunc(fn) {
//   const numHolder = 10;
//   fn(numHolder);
// }

// showCallFunc(function (numHolder) {
//   console.log(numHolder);
// });

// possibility?

function aFunc(fnt) {
  // A. what you want the fnt to do
  const numH = 10000;
  // B. call fnt here and tell it what to do
  fnt(numH);
}

// function fnt(numH) {
//   console.log(numH);
// }

// aFunc(fnt);

// C. Now callback aFunc when fnt is done
aFunc(function (numH) {
  console.log(`You are now ready at about ${numH} seconds`);
});
