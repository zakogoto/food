"use strict";

const soldier = {
    health: 400,
    armor: 100
};

const john = Object.create(soldier); //Создание прототипа переменной john объекта soldier
john.health = 100;

console.log(john.armor); //Не имея у себя такого свойства как armor, оно наследуется от прототипа.
console.log(soldier);