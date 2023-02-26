// 6) closure calc

// function doConversion() {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {

//        const div = document.createElement('div');
//        document.body.append(div);
//        div.style.height = '100vh';

//        for(const key in data.rates){
//            const button = document.createElement('button');
//            button.innerText = key;
//            button.onclick = () => {
//                const sum = +prompt('Введите сумму которую хотите перевести в USD');
//                const convert = (sum / data.rates[key]).toFixed(2);
//                const result = `Ваша сумма в ${key} равна ${convert}$`;
//                alert(result);
//            }
//            div.append(button);
//        }

//    })
// }
// doConversion();

// 7) closure calc 2.
// Создайте HTML файл с :
// <select id='from'> - исходная валюта
// <select id='to'> - валюта в которую происходит обмен
// <div id='rate'> - кросскурс между валютами
// <input type='number' id='amount' /> - сумма в исходной валюте
// <div id='result'> - сумма в валюте, в которую хотим поменять
// Используя заготовку из предыдущего задания, наполните select-ы тэгами option с названиями валют, 
// используя цикл document.createElement innerText для option
// from.append или to.append
// За пределами цикла назначьте обработчики onchange для элементов select и oninput для элемента input, 
// используя их id. По этим событиям обновляйте текст в div#rate и div#result


// let rates={};
// const div = document.createElement('div');
// document.body.append(div);
// div.style.height = '100vh';
// div.innerHTML = '<br><p>Исходная валюта:</p><select id=\'from\'>From</select><br><p>Желаемая валюта:</p><select id=\'to\'><p>To</p></select><br><br><p>Крос-курс:</p><div id=\'rate\'></div><br><p>Сумма на обмен:</p><input type=\'number\' id=\'amount\' /><p>Итого получилось:</p><div id=\'result\'></div>';
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//  .then(data => {
//         for(const key in data.rates){
//             const selectFrom = document.createElement('option');
//             selectFrom.innerText = key;
//             from.append(selectFrom);
//             const selectTo = document.createElement('option');
//             selectTo.innerText = key;
//             to.append(selectTo);
//             rates[key] = data.rates[key];
//         }
//         calcCross();
//     })
// from.onchange = () => { 
//     calcCross(); 
//     calcAmount();
// }

// to.onchange = () => { 
//     calcCross(); 
//     calcAmount(); 
// }

// amount.oninput = () => {
//     calcAmount();
// }

// function calcCross() {
//     rate.innerHTML = (rates[to.value] / rates[from.value]).toFixed(2);
// } 

// function calcAmount() {
//     amount.value !==0 ? result.innerHTML = (amount.value * rates[to.value] / rates[from.value]).toFixed(2) : 0;
// }


// 8) countries and cities

// По аналогии с предыдущем заданием, реализуйте интерфейс выбора страны и города:
// по загрузке данных наполняйте select#countries элементами option с названиями стран;
// так же назначьте обработчик события onchange в select#countries, который:
// удаляет старый контент select#cities (достаточно занести в innerHTML или innerText пустую строку)
// добавляет в select#cities элементы option с городами из выбранной только что страны.
// Таким образом, при изменении страны будет меняться список городов в select#cities

// info = {};
// const div = document.createElement('div');
// document.body.append(div);
// div.style.height = '100vh';
// div.innerHTML = '<br><p>Страна:</p><select id=\'country\'>From</select><br><p>Города:</p><select id=\'towns\'><p>To</p></select>'
// fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
//     .then(data => {
//         for(key in data){
//             const selectCountry = document.createElement('option');
//             selectCountry.innerText = key;
//             country.append(selectCountry);
//             const arr = [];
//             for(city of data[key]){
//                 arr.push(city);
//             }
//             info[key] = {key, arr};
//         }
//         countryChange(country.value);
//     })
// function countryChange(country){ 
//     towns.innerHTML = '';
//     for(key of info[country].arr){
//         const selectTown = document.createElement('option');
//         selectTown.innerText = key;
//         towns.append(selectTown);
//     }        
// }
// country.onchange = () => {
//     countryChange(country.value)
// }


// 14) DOM: multiply table
// Сделать таблицу умножения, используя DOM createElement и innerText. 
// Создайте таблицу, вложенные строки и ячейки в циклах.
    
// function createTable() {

//     const multiTable = document.createElement('table');
//     multiTable.className = 'table';
//     multiTable.innerHTML = '<caption> Таблица умножения </caption>';
//     document.body.append(multiTable);

//     for(let i = 0; i < 10; i++){
//         let tempRow = document.createElement('tr');
//         tempRow.id = `row${i}`;
//         tempRow.style.fontSize  = '25px';
//         tempRow.style.border  = '2px';
//         multiTable.appendChild(tempRow);

//         if(i > 0) {
//             for(let j = 0; j < 10; j++){
//                 let tempCell = document.createElement('td');
//                 tempCell.style = `
//                 border: 1px solid;
//                 width: 40px;
//                 height: 40px;
//                 text-align: center;
//                 `
//                 tempCell.style.background = i % 2 !== 0 ? '#F8F8F8' : '';
//                 tempRow.appendChild(tempCell);
//                 tempCell.innerText = j === 0 ? i : i * j;
//             }
//         }
//         else{
//             for(let columnCounter = 0; columnCounter < 10; columnCounter++) {    
//                 let tempCell = document.createElement('th');
//                 tempCell.style = `
//                 border: 1px solid;
//                 width: 40px;
//                 height: 40px;
//                 font-weight: normal;
//                 `
//                 tempRow.appendChild(tempCell);
//                 tempCell.innerText = columnCounter;
//             }
//         }
//     }
// }

// createTable();


// 15)DOM: highlight cell
// Подсветить ячейку, над которой находится курсор мыши. Используйте события mouseover и mouseout, 
// и style.backgroundColor для подсветки. Для того, что бы подсветить правильную ячейку, 
// добавьте обработчики событий во вложенный цикл, и используйте в них ту переменную, которая хранит <td>. 
// В таком случае замыкания вам помогут.

// function createTable() {
//     const multiTable = document.createElement('table');
//     multiTable.className = 'table';
//     multiTable.innerHTML = '<caption> Таблица умножения </caption>';
//     document.body.append(multiTable);

//     for(let i = 0; i < 10; i++){
//         let tempRow = document.createElement('tr');
//         tempRow.id = `row${i}`;
//         tempRow.style.fontSize  = '25px';
//         tempRow.style.border  = '2px';
//         multiTable.appendChild(tempRow);

//         if(i > 0){
//             for(let j = 0; j < 10; j++){
//                 let tempCell = document.createElement('td');
//                 tempCell.style = `
//                 border: 1px solid;
//                 width: 40px;
//                 height: 40px;
//                 text-align: center;
//                 `
//                 tempCell.style.background = i % 2 !== 0 ? '#F8F8F8' : '';
//                 const color = tempCell.style.background;
//                 tempCell.onmouseover = () => {
//                     tempCell.style.background = 'grey';
//                 };
//                 tempCell.onmouseout = () => {
//                     tempCell.style.background = color;
//                 };
//                 tempRow.appendChild(tempCell);
//                 tempCell.innerText = j === 0 ? i : i * j;
//             }
//         }
//         else{
//             for(let j = 0; j < 10; j++){    
//                 let tempCell = document.createElement('th');
//                 tempCell.style = `
//                 border: 1px solid;
//                 width: 40px;
//                 height: 40px;
//                 font-weight: normal;
//                 `
//                 tempRow.appendChild(tempCell);
//                 tempCell.innerText = j;
//             }
//         }
//     }
// }

// createTable();


// 16)DOM: Highlight cross
// Подсветить строку и столбец, в которой находится подсвеченная ячейка. 
// Если у вас обработчики событий объявлены во вложенном цикле, то вы можете 
// пользоваться счетчиками цикла (обычно i и j) и другими переменными, например переменной, 
// содержащей в себе DOM-элемент строки.

// function createTable() {
//     const multiTable = document.createElement('table');
//     multiTable.className = 'table';
//     multiTable.innerHTML = '<caption> Таблица умножения </caption>';
//     document.body.append(multiTable);

//     for(let i = 0; i < 10; i++){
//         let tempRow = document.createElement('tr');
//         tempRow.id = `row${i}`;
//         tempRow.style.fontSize  = '25px';
//         tempRow.style.border  = '2px';
//         tempRow.onmouseover = () => {
//             tempRow.style.background = 'grey';
//         };
//         tempRow.onmouseout = () => {
//             tempRow.style.background = '';
//         };
//         multiTable.appendChild(tempRow);
//         if(i > 0){
//             for(let j = 0; j < 10; j++){
//                 let tempCell = document.createElement('td');
//                 tempCell.style = `
//                 border: 1px solid;
//                 width: 40px;
//                 height: 40px;
//                 text-align: center;
//                 `
//                 tempCell.className = `column${j}`;
//                 tempCell.onmouseover = () => {
//                     for(let a of document.getElementsByClassName(tempCell.className)){
//                         a.style.background = 'grey';
//                     }
//                 };
//                 tempCell.onmouseout = () => {
//                     for(let a of document.getElementsByClassName(tempCell.className)){
//                         a.style.background = '';
//                     }
//                 }
//                 tempRow.appendChild(tempCell);
//                 tempCell.innerText = j === 0 ? i : i * j;
//             }
//         }
//         else{
//             for(let j = 0; j < 10; j++){    
//                 let tempCell = document.createElement('th');
//                 tempCell.style = `
//                 border: 1px solid;
//                 width: 40px;
//                 height: 40px;
//                 font-weight: normal;
//                 `
//                 tempCell.className = `column${j}`;
//                 tempCell.onmouseover = () => {
//                     for(let hover of document.getElementsByClassName(tempCell.className)){
//                         hover.style.background='grey';
//                     }
//                 };
//                 tempCell.onmouseout = () => {
//                     for(let hover of document.getElementsByClassName(tempCell.className)){
//                         hover.style.background = '';
//                     }
//                 }
//                 tempRow.appendChild(tempCell);
//                 tempCell.innerText = j;
//             }
//         }
//     }
// }

// createTable();