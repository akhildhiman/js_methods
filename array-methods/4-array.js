var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Pochi',
    age: 3,
    type: 'dog'
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// Solution is 105
function getAges(data) {
  let sum = 0;
  for (var i = 0; i < data.length; i++){
    if (data[i].type === 'dog'){
      let tempAge = data[i].age;
      sum += (tempAge * 7);
    }
  }
  return sum;
}

// Write the same function using
// 1. filter - for filtering the cat or dog
let ages = data.filter((animal) => {
  return animal.type === 'dog';
})
// 2. map - to multiply human year to dog year
.map((animal) => {
  return animal.age *= 7
})
// 3. reduce - to accumulate total age.
.reduce((sum, animal) => {
  return sum + animal.age;
});
// Solution 105