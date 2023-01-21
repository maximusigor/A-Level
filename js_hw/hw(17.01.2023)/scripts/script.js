//1)Створити функцію, яка буде видаляти людей з масиву за індексом, який ми передамо параметром.
const arr = ['Vasya', 'Petya', 'Alexey'];

function removeUserByIndex(arr, index){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(index !== i) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeUserByIndex(arr, 1));


// //2)Створити функцію яка поверне всі ключі об'єкта, переданого параметром.
// const obj = { name: 'Vasya', age: 1}
// getAllKeys(obj) /// ["name", "age"]

const obj = { name: 'Vasya', age: 1};

function getAllKeys(obj) {
    let arrFromObj = [];
    for(let key in obj) {
        arrFromObj.push(key);
    }

    return arrFromObj;
}
console.log(getAllKeys(obj));

// //3)Створити функцію, яка поверне всі значення об'єкта переданого параметром.
// const obj = { name: 'Vasya', age: 1}
// getAllValues(obj) /// ["Vasya", 1]
const obj1 = { name: 'Vasya', age: 1};

function getAllValues(obj){
    let resultArr = [];
    for(let value in obj){
        resultArr.push(obj1[value]);
    }
    return resultArr;
}

console.log(getAllValues(obj1));

// // 4)Створити функцію, де ми першим параметром передамо об'єкт з новим кандидатом, 
// // а другим параметром - id будь-якого кондидата в масиві condidateArr. 
// // Функція повинна буде вставити кандидата переданого через перший параметр до масиву 
// // перед кондидатом у якого id одно тому що передали у другому параметрі.
const firstObj = {
    id: 3,
    name: 'Vasya',
}

const secondObj = {
    id: 4,
    name: 'Katya',
}

const condidateArr = [
    {
        id: 1,
        name: 'Kolya',
    },
    {
        id: 2,
        name: 'Petya',
    },
];

function insertIntoarr(obj, id) {
    condidateArr.splice(id - 1, 0, obj);
    return condidateArr;
}
console.log(insertIntoarr(firstObj, 2));
/// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

console.log(insertIntoarr(secondObj, 1)); 
/// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]