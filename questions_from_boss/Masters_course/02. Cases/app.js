// This is the code exercise for the case switch task

let fruit = prompt('What fruit do you cherish the most?\n');
switch (fruit) {
  case 'banana':
    console.log('Banana is good');
    break;
  case 'orange':
    console.log(`I'm not a fan of Oranges`);
    break;
  case 'apple':
    console.log('How do you like your apples?');
    break;
  default:
    console.log("I've never heard of that fruit before");
    break;
}
