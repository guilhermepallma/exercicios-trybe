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

//Exercício 03

// let sum = 0;
// let result = 0;
// let average = 0;


// for (let index = 0; index < numbers.length; index +=1) {
//   result = sum += numbers[index];
//   average = result / numbers.length;
// }

// console.log(average);

//Exercício 04

// let sum = 0;
// let result = 0;
// let average = 0;


// for (let index = 0; index < numbers.length; index +=1) {
//   result = sum += numbers[index];
//   average = result / numbers.length;
// }
//   if(average > 20) {
//   console.log('valor maior que 20');
// } else {
//   console.log('valor menor ou igual a 20');
// }

//Exercício 05
let larger = numbers[0];

for (let i = 0; i < numbers.length; i += 1){
  if (larger < numbers[i]) {
      larger = numbers[i];
  }
}
console.log(larger);