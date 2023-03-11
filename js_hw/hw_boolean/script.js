// 1)Number: odd
// С помощью prompt узнайте число, введенное пользователем. 
// С помощью if проверьте что число корректно преобразовано из строки. 
// В случае ошибки выведите сообщение Выведите четное число или нет, используя if.

// const num = prompt('Введите число.', '');

// if (isNaN(num)) {
//     console.log('Ви ввели не число');
// } else 
//     if(num % 2 == 0){
//     console.log(`Число ${num} четное.`);
// } else {
//     console.log(`Число ${num} нечетное.`);
// }

// 2)String: lexics
// Спросите у пользователя текст, и проверьте его на наличие некорректного слова 
// или нескольких некорректных слов. Используйте метод indexOf (или includes) строки:

// const incorrectWord = prompt('Напишите любой текст.','');
// console.log(incorrectWord.indexOf('ну'));

// 3)Boolean
// Напишите код, который спрашивает те или иные вопросы с ответом "да"/"нет"
//  с помощью confirm, и сохраняет ответы в переменных.

// const question1 = confirm('Тебе нравиться программирование?');
// const question2 = confirm('Тебе нравиться пиво?');
// const question3 = confirm('Отстановишся ли на изучении основ по JS?');

// let answer1 = question1 ? 'да' : 'нет';
// let answer2 = question2 ? 'да' : 'нет';
// let answer3 = question3 ? 'да' : 'нет';

// console.log(answer2);

// 4)Boolean: if
// Расширьте предыдущее задание условиями по полученным переменным условиями (if else). 
// Например, если вы спрашиваете пол пользователя с помощью confirm, то по условию 
// сделайте alert("Вы женщина") и alert("Вы мужчина")

// const question = confirm('Ви женщина?');

// if(question) {
//     alert('Ви женщина.')
// } else {
//     alert('Ви мужчина.')
// }

// 5)Ternary
// Спросите у пользователя пол (confirm). 
// Выведите с помощью alert "Вы мужчина" или "Вы женщина". Используйте тернарный оператор.


// confirm('Вы мужчина или женщина?') ? alert('Вы мужчина') : alert('Вы женщина');

// 6)Prompt: or
// Для задания Number: age используя ИЛИ || вывести сообщение об ошибке (alert) 
// если пользователь не введет возраст или нажмет отмену (т. е. prompt 
// выдаст пустую строку или null, интерпретируемую как false).

// const age = prompt('Сколько тебе лет?', '');

// if(age === '' || age === null){
//     alert('Ви ничего не ввели или нажали отмену!')
// }

// 7)Confirm: or this days
// C помощью этого же трюка (использование ИЛИ для запуска альтернативы) сделайте 
// капризного робота, который в confirm спрашивает "шопинг?", а в случае отказа - 
// выводить alert "ты - бяка".

// alert(confirm('шопинг?') || 'ты - бяка');


// 8)Confirm: if this days
// Сделать тоже самое с помощью if.

// let answer = confirm('шопинг?');

// if (!answer || null) {
//     alert('ты - бяка')
// }

// 9)Default: or
// Попросите пользователя ввести ФИО в три разныe переменныe. 
// Используя ИЛИ || добавьте строки по умолчанию, которые будут сохраняться 
// во внутренних переменных если пользователь ввел пустую строку или 
// нажал "Отмена". Например, если вы на шаге ввода Фамилии нажмете 
// Escape, фамилия будет "Иванов"

// const surName = prompt('Введите фамилию') || 'Иванов';
// const name = prompt('Введите имя') || 'Иван';
// const fatherName = prompt('Введите отчество') || 'Иванович';

// const fullName = `${surName} ${name} ${fatherName}`;
// console.log(fullName);


// 10)Default: if
// Сделайте тоже самое с помощью if и else


// let surName = prompt('Введите фамилию');
// let name = prompt('Введите имя');
// let fatherName = prompt('Введите отчество');

// if (surName === null) {
//     surName = 'Иванов';
// }  
// if (name === null) {
//     name = 'Иван';
// } 
// if (fatherName === null) {
//     fatherName = 'Иванович';
// }
// const fullName = `${surName} ${name} ${fatherName}`;
// console.log(fullName);
 
// 11)Login and password
// Напишите код, который спрашивает логин, проверяет его на верность, в случае если логин верен, 
// просит ввести пароль и проверяет его. В случае несовпадения логина или пароля выводить alert
// с текстом ошибки. В случае успешного логина - alert с поздравлением. 
// Правильные логин: admin и пароль: qwerty. Используйте вложенные if и else.

// const login = prompt('Введите логин');

// if (login === 'admin') {
//     const password = prompt('Введите пароль');

//   if (password === 'qwerty') {
//     alert('Поздравляем! Вы вошли в систему.');
//   } else {
//     alert('Ошибка: неверный пароль.');
//   }
// } else {
//   alert('Ошибка: неверный логин.');
// }

// 12) Currency exchange
// Попросите пользователя ввести валюту (например, usd, eur, другие валюты добавить по вкусу) 
// с помощью prompt.Также поинтересуйтесь купить или продать он желает (используйте confirm).
// С помощью нескольких if и тернарного оператора внутри каждого из if задайте переменную rate, 
// определяющую курс конкретной валюты на покупку или продажу. Обратите внимание на место объявления
// переменной rate - она должна быть доступна в коде после всех этих if. Попросите пользователя ввести 
// сумму на обмен. Посчитайте и выведите результат путем умножения или деления на rate
// Дайте возможность пользователю вводить названия валют в любом регистре (UsD, eUR). 
// Для этого в if используйте toUpperCase (или toLowerCase)

// const currency = prompt('Введите валюту (например, USD, EUR.)').toUpperCase();
// const buyOrSell = confirm('Купить или продать?');
// let rate;

//  if (currency === 'USD') {
//     rate = buyOrSell ? 38.7 : 38.2;
//  }

//  if (currency === 'EUR') {
//     rate = buyOrSell ? 40.8 : 40.0;
//  }

// if (rate) {
//     const summ = +prompt('Введите сумму которую хотите обменять.');
//     const result = buyOrSell ? summ / rate : summ * rate;
//     console.log(`Ви получите ${result.toFixed(2)} ${buyOrSell ? currency : 'UAH'}`);
// }

// 13)Scissors
// Сделайте игру "камень-ножницы-бумага". Пользователь вводит свой вариант через prompt, программа 
// генерирует свой вариант через Math.random() и выводит через alert. Следующий alert выводит имя 
// победителя или "ничья".

// const rockPaperScissors = prompt('Введите камень, ножници или бумага.');
// const nameUser = 'Ihor';
// const nameComputer = 'PentiumI';
// const words = ['камень','ножници','бумага'];
// const word = words[Math.floor(Math.random() * words.length)];
// alert(`${nameComputer} выбрал ${word}`);

// if (rockPaperScissors === word) {
//     alert(`Ничья!`);
// } else if (rockPaperScissors === 'бумага') {
//     if (word === 'камень') {
//         alert(`Победитель ${nameUser}!`);
//     } else {
//         alert(`Победитель ${nameComputer}!`);
//     }
    
// } else if (rockPaperScissors === 'камень') {
//     if (word === 'ножници') {
//         alert(`Победитель ${nameUser}!`);
//     } else {
//         alert(`Победитель ${nameComputer}!`);
//     }
    
// } else if (rockPaperScissors === 'ножници') {
//     if (word === 'бумага') {
//         alert(`Победитель ${nameUser}!`);
//     } else {
//         alert(`Победитель ${nameComputer}!`);
//     }  
// }

// 14)Задание на черный пояс
// Сделайте игру "камень-ножницы-бумага", как описано выше, пользуясь логическими 
// операциями (&&, ||, !), не используя if. Задание должно быть решено одним выражением

// const rockPaperScissors = prompt('Введите камень, ножници или бумага.');
// const nameUser = 'Ihor';
// const nameComputer = 'PentiumI';
// const words = ['камень','ножници','бумага'];
// const word = words[Math.floor(Math.random() * words.length)];
// alert(`${nameComputer} выбрал ${word}`);

// const result = (rockPaperScissors === 'бумага' && word === 'камень') ||
//                (rockPaperScissors === 'камень' && word === 'ножници') ||
//                (rockPaperScissors === 'ножници' && word === 'бумага') ? 
//                alert(`Победитель ${nameUser}`) : (rockPaperScissors === word) ? 
//                alert('Ничья!') : alert(`Победитель ${nameComputer}`);