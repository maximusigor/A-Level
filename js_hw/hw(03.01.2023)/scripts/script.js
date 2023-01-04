// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
let weight = Number('88.3');
let height = Number('1.75');

const bmi = weight / (height * height);
console.log(bmi); // 28.8



//-----------------------------------

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.

// console.log(Math.floor(27.3));
// console.log(Math.floor(27.9));

// console.log(Math.ceil(27.3));
// console.log(Math.ceil(27.9));

// console.log(Math.round(27.3));
// console.log(Math.round(27.9));



// -----------------------------------

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

const totalMinutes = 1441;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

console.log(formatted);


//-----------------------------------

/* 
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */
  // const message = prompt('Enter the number');

  // console.log(message);

//-----------------------------------

/* 
   * За допомогою модального вікна prompt отримати від користувача два числа.
   * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
   * */


// const firstNum = Number(prompt('Enter the first number'));
// const secondNum = Number(prompt('Enter the second number'));

// const additionNum = firstNum + secondNum;
// const subtractionNum = firstNum - secondNum;
// const multiplicationNum = firstNum * secondNum;
// const divisionNum = firstNum / secondNum;
// const moduloNum = firstNum % secondNum;

// console.log(additionNum);
// console.log(subtractionNum);
// console.log(multiplicationNum);
// console.log(divisionNum);
// console.log(moduloNum);