let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 01

// for (let index = 0; index < numbers.length; index +=1) {
//   console.log(numbers[index]);
// }

//Exercício 02

// let sum = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//   sum += numbers[index]
// }

// console.log(sum);

//Exercicío 03

let sum = 0;
let result = 0;
let average = 0;


for (let index = 0; index < numbers.length; index +=1) {
  result = sum += numbers[index];
  average = result / numbers.length;
}

console.log(average);