// 1)String: greeting
// Спросите у пользователя имя, и поприветствуйте его с помощью alert.

// const name = prompt('Как тебя зовут?', '');
// alert(`Привет ${name}`);

// 2)String: gopni4ek
// Попросите пользователя ввести строку через prompt. 
// Используя split и join сделайте что бы после любой запятой следовало слово блин, .
// const str = prompt('Введите строку используя запятие.');
// const res  = str.split(',').join(', блин');

// console.log(res);

// 3)String: capitalize
// Преобразуйте строку, введенную пользователем, таким образом, что бы первая буква 
// становилась большой, а остальные - маленькими:
// const str = prompt('Введите строку');
// const result = str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
// console.log(result);

// 4)String: word count
// Посчитайте количество слов в строке. Используйте разбиение по пробелам.
// Длина массива называется так же, как и длина строки.

// const str = prompt('Введите строку.');
// const result = str.split(' ').length;

// console.log(result);

// 5)String: credentials
// Спросите у пользователя ФИО, используя prompt трижды. Выкиньте лишние пробелы, 
// используя .trim. Используя String: capitalize сделайте так, что бы каждое слово
// в ФИО было с большой буквы, а остальные - маленькие Объедините эти три строки 
// в одну переменную fullName и выведите куда-то(alert, console.log). 
// Не забудьте пробелы между словами.

// let surName = prompt('Введите свою фамилию.', '');
// let name = prompt('Введите свое имя.', '');
// let fatherName = prompt('Введите свое отчество.', '');
// surName = surName.charAt(0).toUpperCase() + surName.slice(1).toLocaleLowerCase();
// name = name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase();
// fatherName = fatherName.charAt(0).toUpperCase() + fatherName.slice(1).toLocaleLowerCase();
// const fullName = `${surName.trim()} ${name.trim()} ${fatherName.trim()}`;

// alert(fullName);

// 6) String: beer
// Не используя .replace замените слово пиво в строке на слово чай

// const str = "Было жарко. Василий пил пиво вприкуску с креветками";
// const res = str.split('пиво').join('чай');

// alert(res);

// 7)String: no tag
// Найдите в строке HTML тэг. Удалите, т. е. вырежьте его - создайте другую строку, 
// в которой будет все символы до тэга и после него Тэг может быть любым. 
// split и join не используйте, вместо этого используйте indexOf и slice. 
// .replace не используйте

// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
// const startTag = str.indexOf('<');
// const endTag = str.indexOf('>');
// const result = str.slice(0, startTag) + str.slice(endTag + 1);

// console.log(result) //какой-то текст в котором есть один тэг  и всякое другое

// 8)String: big tag
// На основе предыдущего задания сделайте тэг большими буквами. 
// replace, split и join не используйте, вместо этого используйте indexOf и slice.

// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
// const startTag = str.indexOf('<');
// const endTag = str.indexOf('>');
// const bigTag = str.slice(startTag, endTag + 1).toUpperCase();
// const result = str.slice(0, startTag) + bigTag + str.slice(endTag + 1);
// console.log(result);

// 9)String: new line
// Попросите пользователя ввести строку через prompt. prompt не позволяет вводить 
// многострочные строки. Дадим пользователю такую возможность - Пользователь может 
// вводить \n в качестве маркера новой строки. Используя split и join сделайте эту 
// строку воистину многострочной и выведите в консоль или через alert.

// const newLine = prompt('Введите строку','');
// const result = newLine.split('\\n').join('\n');
// console.log(result);

// 10)String: youtube
// Пусть пользователь введет любой текст с ссылкой на youtube. 
// Используя регулярное выражение извлеките из ссылки идентификатор видоса и 
// создайте строку с встраиваемым блоком HTML. Добавьте блок на страницу.
// объявите константу с регулярным выражением
// используйте метод match, который вернет вам массив
// извлеките из массива элемент с идентификатором видео
// изучите HTML код встраивания видео в страницу на youtube.
// используя интерполяцию строк вклейте идентификатор видео в HTML код встраивания 
// видео используя document.write отправьте полученную строку на страницу.


// const youtubeLinkRegex = /(?:(?:youtu\.be\/)|(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?v=))([\w-]{11})/;
// const inputText = prompt('Вставте ссилку на ютуб видео', '');
// const videoId = inputText.match(youtubeLinkRegex)[1];
// document.write( `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
// const div = document.createElement('div');
// document.body.append(div);
// const result = document.write('Идентификатор видео: ',videoId);