// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.
// 2) Написати логіку знаходження факторіалу числа 10.
// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?
// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3
// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків




// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне,то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кратне цифрі 3, то вивести FizBuz.


for( let i = 0; i < 10; i++){

    if(i % 2 == 0){
        console.log('Fiz');

    } else if (i == 3) {
        console.log('FizBuz');

    } else if (i % 2 != 0) {
        console.log('Buz');
    } 
}

// 2) Написати логіку знаходження факторіалу числа 10.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(10) );


// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?

const paperInPackage = 500;
const paperUseWeek = 1200;

const weeks = 18;

const paperAmount = paperUseWeek * weeks / paperInPackage;

console.log(`Minimal number of packs must be bought in the office for 8 weeks - ${Math.ceil(paperAmount)} pieces.`);


// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3.



function flatPositionChecker(flatNumber) {
    const entrancies = 10;
    const flors = 9;
    const flats = 3;
    
    const amountFlats = entrancies * flors * flats;
    
    let result = '';
    let flat = 0;
    let stop = false;
   
    for(let e = 1; e <= entrancies && !stop; e++) {
        for(let f = 1; f <= flors; f++) {
            for(let fl = 1; fl <= flats; fl++) {
            flat++
                if(flat === flatNumber) {
                stop = true;
                result = `Квартира №:${flatNumber}, знаходиться в ${e} - му під'їздi на ${f} - му поверсі.`;
                } 
            }
        } 
    }

         
    if(!flatNumber && flatNumber !== 0 ) {
        console.log('Введiть номер квартири!')
       }else if (flatNumber <= 0) {
        console.log('Помилка: номер квартири повинен починатись з цифри 1.');
       }else if (!result){
         console.log(`Такої квартири не iснує! Всього ${amountFlats} квартир!`)
       }else {
        console.log(result)
       }

 }
    
    flatPositionChecker(1);

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків


function pyramid1(rows){
    let nums = [];
    
        for(let i = 1; i <= rows; i++){
         nums.push(i);
          
          let spaces = " ".repeat(rows - i);
          let stars = nums.join(' ');
    
          console.log(spaces + stars);
        }    
    }
    
pyramid1(5);