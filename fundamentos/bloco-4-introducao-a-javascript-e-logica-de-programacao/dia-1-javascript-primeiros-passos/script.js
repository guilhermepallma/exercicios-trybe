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

/**
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
*/

//Exercicio 06;

/**
let text = "Cavalo";
let peca = text.toLowerCase();

switch (peca) {
  case "rei":
    console.log("horizontal, vertical e diagonal");
    break;
  
  case "rainha":
    console.log("horizontal, vertical e diagonais");
    break;

  case "bispo":
    console.log("diagonal");
    break;

  case "cavalo":
    console.log("Em forma de “L”, duas casas em sentido horizontal e mais uma na vertical ou vice-versa");
    break;

  case "torre":
    console.log("vertical ou horizontal");
    break;

  case "peao":
    console.log("diagonal");
    break;
}
*/

//Exercicio 07;

/**
const porc = 60;

if (porc < 0) {
  console.log("Porcentagem não pode ser menor de 0");
} else if (porc >= 90) {
  console.log("A");
} else if (porc >= 80) {
  console.log("B");
} else if (porc >= 70) {
  console.log("C");
} else if (porc >= 60) {
  console.log("D");
} else if (porc >= 50) {
  console.log("E");
} else if (porc < 50) {
  console.log("F");
}
*/

//Exercicio 08;

/**
const num1 = 1;
const num2 = 3;
const num3 = 5;

if (num1 % 2 === 0) {
  console.log("true");
} else if (num2 % 2 === 0) {
  console.log("true");
} else if (num3 % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}
*/

//Exercicio 09;

/**
const num1 = 2;
const num2 = 4;
const num3 = 6;

if (num1 % 2 !== 0) {
  console.log("true");
} else if (num2 % 2 !== 0) {
  console.log("true");
} else if (num3 % 2 !== 0) {
  console.log("true");
} else {
  console.log("false");
}
*/

//Exercicio 10;

const custoTotal = 1500 * 1.2;
const valorVenda = 4800;

if (custoTotal >= 0 && valorVenda >= 0){
  let lucro =  valorVenda - custoTotal;
  let lucroFinal = lucro * 1000;
  console.log(lucroFinal);
} else {
  console.log("Os valores não podem ser negativos");
}