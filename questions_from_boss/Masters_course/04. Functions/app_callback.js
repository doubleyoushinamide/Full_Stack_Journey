// Callback function

/**
 * When we provide a function as an (argument) to
 * other functions, that function is known
 * as a callback function
 */

function showCallFunc(fn) {
  const numHolder = 10;
  fn(numHolder);
}

showCallFunc(function (numHolder) {
  console.log(numHolder);
});
