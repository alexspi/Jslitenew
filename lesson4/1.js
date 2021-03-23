"use strict";

/*
Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
 */
function getNumber(a) {
    return {
        hundereds: Math.floor(a / 100),
        tens: Math.floor(a / 10) % 10,
        units: a % 10,
    };
}


let a;

do {
   a = parseInt(prompt('Введите целое число а:'));
   if(!Number.isInteger(a) || a < 0 || a > 999||isNaN(a)){
       alert('число должно быть целым числом в диапазоне [0 .. 999].');
   }else{
       break
   }
} while (Number.isInteger(a) || a < 0 || a > 999||isNaN(a));


let numberobject = getNumber(a);

console.log('сотен ' + numberobject.hundereds);
console.log('десятков ' + numberobject.tens);
console.log('единиц ' + numberobject.units);