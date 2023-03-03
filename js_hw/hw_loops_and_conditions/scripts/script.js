// conditions-homework
{
// 1) Ответьте на вопросы в комментариях и сверьтесь с отладчиком. 

//  let a = 10
//  {
    //  let b = 20
    //  {
        //  let c = 30
         //какие тут будут значения переменных a,b,c,d
         // console.log(a,b,c); // a = 10,  b = 20, c = 30, d = нет такой
        
        //  b++
        //  a *= 10
    //  }
    //  {
        //  let c = 50
         //какие тут будут значения переменных a,b,c,d
        //  console.log(a,b,c); // a = 100,  b = 21, c = 50, d = нет такой
        //  b += 500
    //  }
    //  {
        //  const a = 100500
        //  const d = "value"
         //какие тут будут значения переменных a,b,c,d
        // console.log(a,b,d); // a = 100500,  b = 521, c = нет такой, d = 'value'
        //  {   let a = -50
            //  b = 1000
             //какие тут будут значения переменных a,b,c,d
            // console.log(a,b,d); // a = -50,  b = 1000, c = нет такой, d = 'value'
        //  }
         //какие тут будут значения переменных a,b,c,d
        // console.log(a,b,d); // a = 100500,  b = 1000, c = нет такой, d = 'value'
    //  }
     //какие тут будут значения переменных a,b,c,d
    // console.log(a,b); // a = 100,  b = 1000, c = нет такой, d = нет такой
//  }
 //какие тут будут значения переменных a,b,c,d
// console.log(a); // a = 100,  b = нет такой, c = нет такой, d = нет такой
}

{
// 2) Разберите пример. Добавьте условие отрицательного возраста в пример выше. 
//    Расставьте недостающие (но синтаксически необязательные) фигурные скобки. 
//    Выкиньте лишнее из текущего кода.

// const age = +prompt("Сколько вам лет?","");
// if (age < 18){
//     alert("школьник");
// }
// else if (age > 18 && age < 30){
//     alert("молодеж");
// }
// else if (age > 30 && age < 45){
//     alert("зрелость");
// }
// else if (age > 45 && age < 60){
//     alert("закат");
// }
// else if (age > 60){
//     alert("как пенсия?");
// }
// else {
//     alert("то ли киборг, то ли KERNESS"); 
// }

// Сделанно
// const age = +prompt("Сколько вам лет?","");

// if (age <= 0){
//     alert("еще не родился")
// }
// else {
//     if (age <= 18){
//         alert("школьник");
//     }
//     else {
//         if (age > 18 && age <= 30){
//             alert("молодеж");
//         }
//         else {
//             if (age > 30 && age <= 45){
//                 alert("зрелость");
//             }
//             else {
//                 if (age > 45 && age <= 60){
//                     alert("закат");
//                 }
//                 else {
//                     if (age > 60){
//                         alert("как пенсия?");
//                     }       
//                 }
//             }
//         }   
//     }
// }
}


{
// 3) Сделайте задание Comparison: sizes используя switch.

// const sizeOfOuterwear = +prompt('Введите ваш размер верхней одежди (40-54), для сравнения с международним.', '');

// switch (sizeOfOuterwear) {
//     case 40: 
//         alert('А международний єто -> "S"')
//         break;
//     case 42: 
//         alert('А международний єто -> "L"')
//         break;
//     case 44: 
//     case 46: 
//         alert('А международний єто -> "M"')
//         break;
//     case 48: 
//     case 50: 
//         alert('А международний єто -> "XL"')
//         break;
//     case 52: 
//     case 54: 
//         alert('А международний єто -> "XXL"')
//         break;
//     default: alert('шото я не понял шо єто за размер такой')
// }

// const sizeOfWomenUnderwear = +prompt('Введите ваш размер белья 42-56, для сравнения с США.', '');

// switch (sizeOfWomenUnderwear) {
//     case 42: 
//         alert('А США єто -> "8"')
//         break;
//     case 44: 
//         alert('А США єто -> "10"')
//         break;
//     case 46:
//         alert('А США єто -> "12"')
//         break; 
//     case 48: 
//         alert('А США єто -> "14"')
//         break;
//     case 50:
//         alert('А США єто -> "16"')
//         break; 
//     case 52: 
//         alert('А США єто -> "18"')
//         break;
//     case 54:
//         alert('А США єто -> "20"')
//         break; 
//     case 56: 
//         alert('А США єто -> "22"')
//         break;
//     default: alert('шото я не понял шо єто за размер такой')
// }

// const sizeStockingsAndSocks = +prompt('Введите ваш размер чулков или носков 0-6, для сравнения с США.', '');

// switch (sizeOfWomenUnderwear) {
//     case 0: 
//         alert('А США єто -> "8"')
//         break;
//     case 1: 
//         alert('А США єто -> "8 1/2"')
//         break;
//     case 2:
//         alert('А США єто -> "9"')
//         break; 
//     case 3: 
//         alert('А США єто -> "9 1/2"')
//         break;
//     case 4: 
//         alert('А США єто -> "10"')
//         break;
//     case 5: 
//         alert('А США єто -> "10 1/2"')
//         break;
//     case 6:
//         alert('А США єто -> "11"')
//         break;
//     default: alert('шото я не понял шо єто за размер такой')
// }

}


{
// 4) Перепишите пример ниже, используя if.

// let color = prompt("Введите цвет","");
// switch (color){
//     case "red": document.write("<div style='background-color: red;'>красный</div>");
//     case "black": document.write("<div style='background-color: black; color: white;'>черный</div>");
//                 break;
//     case "blue": document.write("<div style='background-color: blue;'>синий</div>");
//     case "green": document.write("<div style='background-color: green;'>зеленый</div>");
//                 break;
//     default: document.write("<div style='background-color: gray;'>Я не понял</div>");
// }


// Сделанно
// let color = prompt("Введите цвет","");

// if (color === 'red') {
//     document.write("<div style='background-color: red;'>красный</div>");
//     document.write("<div style='background-color: black; color: white;'>черный</div>");
// }
// else {
//     if (color === 'black') {
//         document.write("<div style='background-color: black; color: white;'>черный</div>");
// }
// else {
//     if (color === 'blue') {
//         document.write("<div style='background-color: blue;'>синий</div>");
//         document.write("<div style='background-color: green;'>зеленый</div>");   
// }
// else {
//     if (color === 'green') {
//         document.write("<div style='background-color: green;'>зеленый</div>");
// } 
// else {
//     document.write("<div style='background-color: gray;'>Я не понял</div>");
//     }
//   }
// }

}


{
// 5) // Напишите функцию noSwitch, которая принимает объект со значениями-функциями, 
// ключ для объекта и запускает одну из функций из объекта если ключ найден, 
// иначе - запускает default:

// const noSwitch = (key, cases, defaultKey='default') => {
//     //проверка наличия key в cases
//     //если есть - достать значение по ключу. это будет функция. Запустить ее
//     //если нет - извлечь из объекта cases значение по ключу, имя которого лежит в переменной defaultKey. 
//     //Запустить пущай функция noSWitch возвращает то, что возвращает одна из функций из объекта

//     if (key in cases) 
//         cases[key]() 
//     else  
//         cases.default()
    
// }

// const drink = prompt("Что вы любите пить")
// noSwitch(drink, {
//     воду: () =>  console.log('Самый здоровый выбор!'),
//     чай(){ 
//         console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
//     },
//     "пиво": () => console.log('Хорошо летом, да в меру'),
//     виски: function(){
//         console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
//     },
//     default(){
//         console.log('шото я не понял')
//     }
// })

}



{
// loops-homework

//1) while confirm
// Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.

// let press = confirm('Нажмите ОК или Отмена');

// while (!press){
//     press = confirm('Нажмите ОК или Отмена');
// }

}


// 2) Создайте пустой массив и добавляйте в него элементы, введенные пользователем, 
// пока пользователь не нажмет Отмена в очередном prompt. Используйте push для удобства: 
// push В массиве не должно быть null после работы цикла;

// function createArray(){
//     const newArr = [];

//     let enter = prompt('Что хотите написать в массивчик?','');
    
//     while (enter){
//         newArr.push(enter);
//         enter = prompt('Что хотите написать в массивчик?','');
//         console.log(newArr);
//     }

// }

// createArray();


{
// 3) array fill nopush
//   Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.
// const newArr = [];
// let i = 0;
// let enter = prompt('Что хотите написать в массивчик?','');

// while (enter){
//     newArr[i] = enter;
//     enter = prompt('Что хотите написать в массивчик?','');
//     i++;
//     console.log(newArr);
// }

}


// 4) infinite probability
//     Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9. 
//     Код должен подсчитывать количество итераций и вывести это число с помощью alert.
// function createInfinityLoop() {
//     let i = 0;
//     for(;;i++){
//         if(Math.random() > 0.9){
//             break;
            
//         }
//     }
//     alert(`Єтот цикл колбасило: ${i} раз (а).`);
// }

// createInfinityLoop();

{
// 5) empty loop
// Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается
// по нажатию "Отмена" c пустым телом цикла.

// while( prompt('Введите что нибудь','') === null){};

}

{
// 6) progression sum
// Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for. 
// Метод Гаусса не применять, наоборот, сделать максимально наивное решение.

// function getSum(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i += 3) {
//       sum += i;
//     }
//     return sum;
//   }
//   console.log(getSum(10));

}

{
// 7)chess one line
// Сформировать строку " # # # # # " с помощью цикла for. 
// Длина строки может быть четной и нечетной, и указывается в одном месте в коде.

// let str = '';
// const number = +prompt('Укажите длину строки с помощью числа.');

// for (let i = 0; i < number; i++ ){
//     str +=" #"
//     console.log(str);
// }

}

{
// 8) numbers
// Сформировать строку c помощью вложенных циклов. 
// Для перевода строки используйте \n.

// let str = '';
// for(let i = 0; i < 10; i++) {
//     for(let j = 0; j < 10; j++) {
//     str += j;
//     }
//     str += '\n';
// }
// console.log(str);

}



// 9) chess
// Сформируйте строку с шахматной доской из вложенных циклов. 
// Для перевода строки используйте \n. 
// Код должен поддерживать легкое изменение размеров доски.
// function createChessBoard() {
//     const height = prompt('Введите висоту доски.');
//     const width = prompt('Введите ширину доски.');
//     let result = '';

//     for (let i = 1; i <= height; i++) {
//     for (let j = 1; j <= width; j++) {
//         if (i % 2 !== 0) {
//         result += j % 2 === 0 ? '.' : '#';
//         } else {
//             result += j % 2 === 0 ? '#' : '.';
//         }
//     }
//     result += '\n';
//     }

//     console.log(result);
// }

// createChessBoard();


{
// 10)cubes
// Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:
// [0,1,8,27,64...];

// const arrPowIndex = [];
// const numberOfIndex = +prompt('Введите количество єлементов.');

// for(let i = 0; i < numberOfIndex; i++){
//     arrPowIndex.push(i ** 3);
// }

// console.log(arrPowIndex);

}


{
// 11)multiply table
// C помощью вложенного цикла сформируйте массив массивов "таблица умножения". 
// Для инициализации вложенных массивов используйте
// arr[i] = [] //в i-тый элемент массива заносится новый пустой массив
// arr[5][6] должен быть равен, соответственно, 30, arr[7][2] == 14 и так далее.

// let table = new Array(10);

// for(let i = 0; i < table.length; i++){
//   table[i] = new Array(10); 
// }
// for(let row = 0; row < table.length; row++) {
//   for(let col = 0; col < table[row].length; col++) {
//     table[row][col] = row * col;
//   }
// }

// let result = table[7][2];
// console.log(result);

}


{
// 12) read array of objects
// Напишите функцию readArrayOfObjects, которая циклически добавляет в массив объекты, 
// которые ввел пользователь. Пользователь вводит ключи и значения (их в каждом объекте 
// может быть любое количество), используя prompt. Когда пользователь нажимает "Отмена" 
// в окне prompt, ввод объекта заканчивается и объект добавляется в массив. Перед вводом 
// следующего объекта пользователю задается вопрос (используя confirm), хочет ли он продолжить 
// это мучение ввод объектов. При утвердительном ответе, опять работает ввод любюго количества 
// ключей для создания нового объекта.Функция должна возвращать созданный массив с объектами.

// const newArr = [];
// function readArrayOfObjects() {
//     let key = prompt('Введите ключ.');
//     let value = prompt('Введите значение.');
//     // let count = 0;
    
//     while(key && value){
//         // newArr[count] = [{key, value}];
//         newArr.push({[key]:value});
//         key = prompt('Введите ключ.');
//         value = prompt('Введите значение.');
//         // count++;
//     }
//     confirm("Продолжим єто мучение?") ? readArrayOfObjects() : console.log(newArr);
//     return newArr;
// }

// readArrayOfObjects();

// const newArr = [];
// function readArrayOfObjects() {
//     let key;
//     let value;
    
//     newArr.push({[key= prompt('Введите ключ.')]: value = prompt('Введите значение.')});
//     return confirm("Продолжим єто мучение?")
//     ? readArrayOfObjects()
//     : console.log('Ваши ключи и значения: ' + JSON.stringify(newArr));
    
// }

// readArrayOfObjects();

}


{
// 13) ромбик
// Сформировать следующую строку - ромбик:

  
//  function  getDiamond(num) {

//   return Array(num * 2-1).fill().map((_, i) => (
//    i < num ?
//      ('.'.repeat(num - i - 1) +
//       '#'.repeat(2 * i + 1) +
//       '.'.repeat(num - i - 1)) :
//      ('.'.repeat(-(num - i - 1))+
//       '#'.repeat(4 * num - 2 * i - 3)+
//       '.'.repeat(-(num - i - 1)))
//    )).join("\n");

// }

// console.log(getDiamond(6));

}
