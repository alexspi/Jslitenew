'use strict';

/*
*   Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
*  Обязательно использовать оператор return.
*/


function summa(a, b) {
    return a + b;
}


function difference(a, b) {
    return a - b;
}


function compose(a, b) {
    return a * b;
}


function division(a, b) {
    return a / b;
}

let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));

console.log('Сумма  чисел: ', summa(a, b));
console.log('Разность  чисел: ', substract(a, b));
console.log('Произведение  чисел: ', compose(a, b));
console.log('Деление  чисел: ', division(a, b));