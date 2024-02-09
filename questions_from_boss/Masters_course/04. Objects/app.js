const car = {
  type: 'Toyota',
  model: 'Venza',
  color: 'blue',
};

console.log(typeof car);

// update
car.color = 'black';
car.model = 'Avaro 2025';
car.type = 'Mercedes Benz';

// New property called wheels
car.wheels = 'rotation-type';
console.log(car);
