'use strict';

class Rectangle { //Название класса всегда с большой буквы
    constructor(height, width) { //СОздание концепции
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { //Наследует свойства родителя к которому ссылается extends
    constructor(height, width, text, bgColor) {
        super(height, width); // Копирует нужные строки у родителя, чтобы их не дублировать
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps () {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(10, 20, 'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10); //Создание экземпляра на основе концепции
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());
console.log(square);