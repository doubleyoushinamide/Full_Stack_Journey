// setTimeout

// setTimeout(() => {
//   console.log(`This seconds will be executed after 3 seconds`);
// }, 3000);

//setInterval

const intervalID = setInterval(() => {
  console.log(`This code is being executed at the interval`);
}, 1000);

//Stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalID);
}, 10000);
