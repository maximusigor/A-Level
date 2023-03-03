// 2) Number: age
// С помощью prompt спросить у пользователя его возраст и подсчитать год рождения. 
// Год рождения вывести с помощью alert.

// const age = +prompt('Сколько вам лет?', '');
// const yearOfBirth = (new Date()).getFullYear() - age;
// alert(yearOfBirth);


// 3)Number: temperature
// С помощью prompt спросить у пользователя температуру в градусах Цельсия 
// и перевести их в Фаренгейты и/или наоборот.

// const tempCelsius = prompt('Введите температу в градусах Цельсия для конвертации в Фаренгейта', '');
// const celsiusInFahrenheit = tempCelsius * 1.8 + 32;
// console.log(celsiusInFahrenheit);

// const tempFahrenheit = prompt('Введите температу в градусах Фаренгейта для конвертации в Цельсия', '');
// const fahrenheitInCelsius = ((tempFahrenheit - 32) * 5 / 9).toFixed(2);
// console.log(fahrenheitInCelsius);

// 4)Number: divide
// Сделайте калькулятор для расчета деления нацело двух чисел. Используйте Math.floor или альтернативы.

// const int1 = prompt('Введите первое число для деления.');
// const int2 = prompt('Введите второе число для деления.');
// const result = Math.floor(int1 / int2);
// console.log(result);

// 4)Number: currency
// Напишите код, который вычисляет обмен валют по курсу, заданному с помощью константы 
// const rate = КУРС ВАЛЮТЫ Считайте значение в одной валюте с помощью prompt, 
// после чего умножите/поделите это число на rate. Выведите результат используя alert. 
// Ограничьте количество знаков после запятой двумя (нас не волнуют дробные части центов/копеек)

// const rate = 39.94;
// const uahInUsd = (+prompt('Введите сумму которую хотите перевести в USD.','') / rate).toFixed(2);
// alert(uahInUsd);

// 5)Number: RGB
// С помощью prompt организуйте ввод трех констант red, green, blue в десятичной системе. 
// Создайте из них CSS-цвет в формате #RRGGBB используя шестнадцатиричную систему счисления. 
// Значения меньше 16ти пока можно не учитывать.

// const red = +prompt('Введите число', '');
// const green = +prompt('Введите число', '');
// const blue = +prompt('Введите число', '');


