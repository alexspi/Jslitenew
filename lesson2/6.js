'use strict';


function sklonenie(number, txt) {
    var cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

let ruble = Number(prompt("Введите сумму в рублях:"));

let c = `Мы потратили ${ruble} ${sklonenie(ruble, ['рубль', 'рубля', 'рублей'])}`;

alert(c);