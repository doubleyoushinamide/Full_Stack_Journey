function askNames() {
  let name = String(prompt('What is your name?'));
  let yourAge = Number(prompt('What is your age?'));

  alert(
    `Hello ${name}, Please proceed before you are ${
      yourAge + 1
    } years old. \nThank you!`
  );
}
