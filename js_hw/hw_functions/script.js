// 1) createPerson
// Создайте функцию createPerson, которая принимает два параметра: name и surname,
//  и возвращает объект с ключами name, surname, getFullName. getFullName должна быть функцией, 
// которая работает с объектом через this, а так же готова к тому, что в объекте в последствии добавить ключ fatherName


// function createPerson(name, surname) {

//     const person = {
//         name,
//         surname,
//         getFullName() {
//             let fullName = `${this.name} ${this.surname}`;
//             if(this.fatherName) {
//                 fullName += ` ${this.fatherName}`
//             }
//             return fullName;
//         }
//     } 
//     return person;
// }


// const a = createPerson("Вася", "Пупкин")
// const b = createPerson("Анна", "Иванова")
// const c = createPerson("Елизавета", "Петрова")

// a.fatherName = 'Иванович' //Вася Иванович Пупкин
// b.fatherName = 'Ивановна'
// console.log(a.getFullName()) //Вася Пупкин Иванович
// console.log(b.getFullName())


// 2)createPersonClosure
// Задание в целом, аналогично предыдущему, однако, в объект заносить name, surname, fatherName и age не нужно. 
// name и surname должны быть параметрами, переменные age и fatherName объявите через let в теле createPersonClosure. 
// Внутри createPersonClosure объявите следующие функции:
// getName
// getSurname
// getFatherName
// getAge
// getFullName


function createPersonClosure(name, surname) {

    let age;
    let fatherName;

    function getName(){
        return name;
    }

    function getSurname(){
        return surname;
    }

    function getFatherName(){
        return fatherName;
    }

    function getAge(){
        return age;
    }

    function getFullName(){
        return `${name} ${surname} ${fatherName}`;
    }


    function setName(newName) {
        if(typeof newName === 'string' && newName.charAt(0) === newName.charAt(0).toUpperCase) {
            name = newName;
        } else {
            return name;
        }
        return newName;
    }

    function setSurname(newSurname) {
        if(typeof newSurname === 'string' && newSurname.charAt(0) === newSurname.charAt(0).toUpperCase) {
            surname = newSurname;
        } else {
           return surname;
        }
        return newSurname;
    }

    function setFatherName(newFatherName) {
        if(typeof newFatherName === 'string' && newFatherName.charAt(0) === newFatherName.charAt(0).toUpperCase) {
            fatherName = newFatherName;
        } else {
            return fatherName;
        }
        return newFatherName;
    }

    function setAge(newAge) {
        if(typeof newAge === 'number' && (newAge > 0 && newAge < 100) ) {
            age = newAge;
        } else {
            return age;
        }
        return newAge;
    }

    function setFullName(newFullName) {
       [surname, name, fatherName] = newFullName.split(' ');
    }

    return {
        getName,
        getSurname,
        getFatherName,
        getAge,
        getFullName,
        setName,
        setSurname,
        setFatherName,
        setAge,
        setFullName,
    }

}

const a = createPersonClosure("Вася", "Пупкин")
const b = createPersonClosure("Анна", "Иванова")
console.log(a.getName())
a.setAge(15)
a.setAge(150) //не работает

b.setFullName("Петрова Анна Николаевна")
console.log(b.getFatherName()) //Николаевна