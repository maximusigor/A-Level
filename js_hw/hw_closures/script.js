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

function makeSaver(func){
    const result = func();
    return () => result;
}
    


var saver = makeSaver(Math.random); //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random 
                                      // в примере). На этом этапе Math.random НЕ вызывается
var value1 = saver();              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
var value2 = saver();              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
                                    //в makeSaver функцию;
value1 === value2                 // всегда true

var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
var value3 = saver2()
var value4 = saver2()

value3 === value4 // тоже должно быть true



let namePrompt = prompt.bind(window, 'Как тебя зовут?')
let nameSaver = makeSaver(namePrompt)
alert(`Привет! Prompt еще не было!`)
alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`)

console.log(value1 === value2);
console.log(value3 === value4);