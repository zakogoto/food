// "use strict";

// function calculateVolumeAndArea(length) {
//     // if (typeof(length) !=='number' || length < 0 || !Number.isInteger(length)) {
//     //     return "При вычеслении произошла ошибка";
//     // }
    
//     // let volume = 0,
//     //       area = 0;
        
//     // volume = length * length * length;
//     // area = 6 * (length * length);
    
//     // return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//           area = 0;

//     volume = length * length * length;
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(12));

// function getCoupeNumber(num) {
//     if (isFinite(num) && num > 1 && num < 36 && num % 1 === 0) {
//         console.log(Math.ceil(num / 4));
//     } else if (num < 1 || num > 36 && num % 1 === 0) {
//         console.log('Таких мест в вагоне не существует');
//     } else if (!isFinite(num) || num % 1 !== 0) {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }
// }
// getCoupeNumber(50);

// function getTimeFromMinutes(minutes) {
//     if (!Number.isInteger(minutes) || typeof(minutes) !== 'number' || minutes < 0) {
//         return "Ошибка, проверьте данные";
//     }
//     let hour = "часов";
//     const time = Math.floor(minutes / 60);

//     if(time === 1) {
//         hour = "час";
//     } else if(time >= 2 && time <= 4) {
//         hour = "часа";
//     }
//     return `Это ${time} ${hour} и ${minutes % 60} минут`;
// }
//  console.log(getTimeFromMinutes(0));

// function findMaxNumber(a, b, c, d) {
//     let num = [a, b, c, d];
//     for (let i = 0; i < 4; i++) {
//         if (typeof(num[i]) !== 'number') {
//             return 0;
//         }
//     }
//     return Math.max(a, b, c, d);
// }
// console.log(findMaxNumber(5, 5830442390, 11, 19.2));

// function fib(num) {
//     let result = '';
//     if (typeof(num) !== 'number' || num === null || num <= 0 || num % 1 !== 0) {
//         return result;
//     }

//     result="0";

//     if (num === 1) {
//         return result;
//     }
    
//     let first = 0,
//         second = 1,
//         trird = 0;
//     for (let i = 1; i < num; i++) {
//         result += ` ${second.toString()}`;
//         trird = first,
//         first = second,
//         second += trird;
//     }
//     return result;
// }
// // 0 1 1 2 3 5

// console.log(fib(6));

// // Задачи по объектам и массивам

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(plan) {
//         const languages = [...plan.skills.languages];
//         let lang = '';
//         languages.forEach(function(item, i) {
//             languages[i] = item.toUpperCase();
//             lang+= `${languages[i]} `;
//         });
//         return `Мне ${plan.age} и я владею языками: ${lang} `;
//     }
//     // showAgeAndLangs: function(plan) {       Решение от автора курса.
//     //     const {age} = plan;
//     //     const {languages} = plan.skills;
//     //     let str = `Мне ${age} и я владею языками: `;

//     //     languages.forEach(function(lang) {
//     //         str += `${lang.toUpperCase()} `;
//     //     });

//     //     return str;
//     // }
// };

// console.log(personalPlanPeter.showAgeAndLangs());

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let result ='';
//     for (let key in programmingLangs) {
//         result += `Язык ${key} изучен на ${programmingLangs[key]}`;
//         result += '\n';
//     }
//     return result;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// // Задачи с массивами

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//     if (arr.length === null || arr.length === 0) {
//         str = "Семья пуста";
//         return str;
//     }
//     str = 'Семья состоит из: ';
//     arr.forEach(function(item) {
//         str += `${item} `;
//     });
//     return str;
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach((item) => {
//         console.log(item.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка";
//     }
//     let revStr = (str.split('')).reverse(),
//         result = "";
//     revStr.forEach((item) => {
//         result += item;
//     });
//     return result;
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str ='';
//     if (arr.length === 0) {
//         str = "Нет доступных валют";
//     } else {
//         str = 'Доступные валюты:\n';
//     }
//     arr.forEach((curr, i) => {
//         if(curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });
//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 8
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let areaShop =[],
//         volumeShop = [],
//         volumeMall=0,
//         str = '';
//     data.shops.forEach((shop, i) => {
//         areaShop[i] = shop.width * shop.length;
//         volumeShop[i] = areaShop[i] *data.height;
//         volumeMall += volumeShop[i];
//     });
//     let warmPayment = volumeMall * data.moneyPer1m3;
//     if (warmPayment <= data.budget) {
//         str = 'Бюджета достаточно';
//     } else {
//         str = 'Бюджета не достаточно';
//     }
//     return str;
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }
// console.log(sortStudentsByGroups(students));

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));

function factorial(n) {
    let result = n;
    if (n < 0 || n % 1 != 0 || typeof(n) != 'number') {
        let error = "Введено не целое число";
        return error;
    } else if (n <= 1) {
        return result;
    } else {
        result *= factorial(n - 1);
    }
    return result;
}

console.log(factorial(5));

function likes(names) {
    if (names.length === 0) {
        return 'No one likes this';
    } else if (names.length === 1) {
        return `${names[0]} like this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length >= 4) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    } else {
        return 'Error';
    }
}