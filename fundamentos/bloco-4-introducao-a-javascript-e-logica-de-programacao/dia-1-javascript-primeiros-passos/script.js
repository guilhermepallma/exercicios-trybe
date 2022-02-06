//Exercicio 01;

/** 
const a = 33;
const b = 44;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);
*/


//Exercicio 02;

/**
const num1 = 11;
const num2 = 22;

if (num2 > num1){
    console.log(num2);
} else {
    console.log(num1);
}
*/

//Exercicio 03;

/** 
const num1 = 9;
const num2 = 11;
const num3 = 7;

if (num1 > num2 && num1 > num3){
    console.log(num1);
} else if (num2 > num1 && num2 > num3){
    console.log(num2);
} else {
    console.log(num3);
}
*/

//Exercicio 04;

/**
const num1 = -2

if (num1 >= 1) {
    console.log("positive");
} else {
    console.log("negative");
}
*/

//Exercicio 05;

const lado1 = 60;
const lado2 = 60;
const lado3 = 60;

let result;

result = lado1 + lado2 + lado3;

if (lado1 < 1 || lado2 < 1 || lado3 < 1) {
    console.log("Ângulo inválido. Utilize apenas números positivos.");
} else if (result > 180) {
    console.log("false");
} else if (result < 180) {
    console.log("false");
} else {
    console.log("true");
}