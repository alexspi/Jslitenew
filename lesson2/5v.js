'use strict';
/*
    Реализовать функцию с тремя параметрами:
        function mathOperation(arg1, arg2, operation),
        где arg1, arg2 – значения аргументов,
        operation – строка с названием операции.
    В зависимости от переданного значения операции выполнить одну из арифметических операций
    (использовать функции из пункта 5)
    и вернуть полученное значение (использовать switch).
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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return summa(arg1, arg2);
          
        case "-":
            return difference(arg1, arg2);
         
        case "*":
            return compose(arg1, arg2);
          
        case "/":
            return division(arg1, arg2);
          
        default:
            alert("Неизвестная операция " + oper);
            return '?';
    }
}	

let operation = prompt("Введите операцию ( + - * / ):");
let arg1 = Number(prompt("Введите первое число:"));
let arg2 = Number(prompt("Введите второе число:"));

console.log(mathOperation(a, b, operation));