//Promise - позволяет зодавать функции которые обещают выполняться, после определенных событий.
'use strict';

console.log('Запрос данных...');

setTimeout(()=> {
    console.log('Подготовка данных...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(()=> {
        product.status = 'order';
        console.log(product);
    }, 2000);

},2000);


