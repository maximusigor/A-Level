// 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).
function avg(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    if(array.length == 0) return 0;
    return sum / array.length;
}
console.log(avg([0, 1, 2, 3, 4, 5])); // 2.5
console.log(avg([22, 34, 62, 99])); // 54.25
console.log(avg([])); // 0
console.log(avg([1000, 2056, 3444, 1237])); // 1934.25


// 2. Напишіть функцію power для обчислення степені числа
function power (a, b){
    let degree = a;
    for (let i = 1; i < b; i++) {
         degree *= a;
    }
    return degree;
}

console.log(power(2, 3)); // 8
console.log(power(4, 2)); // 16
console.log(power(3, 4)); // 81
console.log(power(10, 3)); // 1000


// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.
function squareDigits(number){
    let squareNum = String(number).split``.map(cur => Math.pow(cur,2)).join``;
    return squareNum;
} 

console.log(squareDigits(91)); // 811
console.log(squareDigits(0)); // 0
console.log(squareDigits(867)); // 643649



// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.
function isPalindrome(word){
    const arrayValues = word.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if(word == reverseString) {
        console.log(`'${word}' // true`);
    }
    else {
        console.log(`'${word}' // false`);
    }
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('topot')); // true
console.log(isPalindrome('вимив')); // true
console.log(isPalindrome('анна')); // true
console.log(isPalindrome('алла')); // true
console.log(isPalindrome('дід')); // true
console.log(isPalindrome('ротатор')); // true
console.log(isPalindrome('радар')); // true
console.log(isPalindrome('привіт')); // false
console.log(isPalindrome('що')); // false
console.log(isPalindrome('that'));  // false


// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:
// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done

function stringTransformer(str) {
    if (str.length === 0) {
      return ''
    }
  
    let result = str.split('')
      .map((i) => {
        
        if(i.toLowerCase() === i) {
          return i.toUpperCase()
        } else {
          return i.toLowerCase()
        }
      })
      .join('')

    return `${result} -> ${result.split(' ').reverse().join(' ')}`;
  }

console.log(stringTransformer('torininGEN THE bEst'));// BeST the TORININgen
console.log(stringTransformer('JavaScript IS cool LANGUAGE'));// language COOL is jAVAsCRIPT


// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами
// Технічні вимоги:
// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Після введення даних додати перевірку їхньої коректності.
// Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново.
function getNumbers(firstNumber, secondNumber) {
    let arr = [];
    do {
    firstNumber = prompt("Input first number");        
    secondNumber = prompt("Input second number");     
    }
    while(isNaN(firstNumber) || firstNumber === '' || isNaN(secondNumber) || secondNumber === '');
    arr.push(firstNumber);
    arr.push(secondNumber);
    return arr;
}
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією ).
// Якщо користувач вві неправильний символ - запитати ще раз.
function getOperation(operation) {
    do {
    operation = prompt("Input the operation symbol");              
    }
    while(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');
    return operation;
}

// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.
function calculate() {
    let numbers = getNumbers();
    let operation = getOperation();
    switch (operation) {
        case '+':
            console.log(+numbers[0] + +numbers[1]);
            break;
        case '-':
            console.log(numbers[0] - numbers[1]);
            break;
        case '/':
            console.log(numbers[0] / numbers[1]);
            break;
        case '*':
            console.log(numbers[0] * numbers[1]);
        default: "Error";
            break;
    }
}

calculate();