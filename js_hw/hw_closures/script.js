// 1) makeProfileTimer
// Напишите функцию makeProfileTimer, которая служит для замера времени 
// выполнения другого кода

// const time = performance.now();
// const makeProfileTimer = () => () => performance.now() - time;

// const timer = makeProfileTimer();
// alert('Замеряем время работы этого alert'); 
// alert(timer());

// 2) makeSaver
// Напишите функцию makeSaver

// function makeSaver(func){
//     const result = func();
//     return function() {
//         return result;
//     } 
// }
    


// var saver = makeSaver(Math.random); //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random 
//                                       // в примере). На этом этапе Math.random НЕ вызывается
// var value1 = saver();              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
// var value2 = saver();              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
//                                     //в makeSaver функцию;
// value1 === value2                 // всегда true

// var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
// var value3 = saver2()
// var value4 = saver2()

// value3 === value4 // тоже должно быть true



// let namePrompt = prompt.bind(window, 'Как тебя зовут?')
// let nameSaver = makeSaver(namePrompt)
// alert(`Привет! Prompt еще не было!`)
// alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
// alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`)

// console.log(value1 === value2);
// console.log(value3 === value4);

// 3)myBind
// Изучите встроенную функцию bind, и сделайте свою версию, которая позволит 
// определить "значение по умолчанию" не только для первых параметров, 
// но для любых других, например для степени в Math.pow:

// function myBind(func, context, ...defaultArgs) {
//     return function(...args) {
//       const allArgs = [...defaultArgs, ...args.slice(defaultArgs.length)];
//       return func.apply(context, allArgs);
//     }
//   }


// var pow5 = myBind(Math.pow, Math, [, 5]) // первый параметр - функция для биндинга значений по умолчанию, 
//                                                   // второй - this для этой функции, третий - массив, в котором undefined означает
//                                                   // параметры, которые должны передаваться при вызове,
//                                                   // а другие значения являются значениями по умолчанию:
// var cube = myBind(Math.pow, Math, [, 3]) // cube возводит число в куб

// pow5(2) // => 32, вызывает Math.pow(2,5), соотнесите с [undefined, 5]
// cube(3) // => 27


// var chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
// chessMin(-1,-5,3,15) // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5



// var zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогично, только теперь задается "0" как текст по умолчанию в prompt, 
//                                                           // а текст приглашения пользователя задается при вызове zeroPrompt
// var someNumber = zeroPrompt("Введите число")              // вызывает prompt("Введите число","0")

// const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
// bindedJoiner('a','c','d') === 'abcdef'
// bindedJoiner('1','2','3') === '1b23ef'

