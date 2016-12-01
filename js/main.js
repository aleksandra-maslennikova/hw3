//-----------task1-----------------------
/*
1. Напишите функцию которая принимает в качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/
let arr = [];

function addToArray(arr, newElem) {
    let lastIndex = arr.length;
    arr[lastIndex] = newElem;
    return arr;
}

addToArray(arr, 35);
console.log(arr);

addToArray(arr, 35);
console.log(arr); 


addToArray(arr, { functionTypes: ['functionExpression', 'functionDeclaration'] });
console.log(arr); 

//----------task2-------------------------

/*2. Напишите функцию которая получает 3 параметра и возвращает объект типа: 
    
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }*/
    

let myObj = {};

function simpleObjectGenerator(param1, param2, param3) {
    myObj.argument1 = param1;
    myObj.argument2 = param2;
    myObj.argument3 = param3;
    return myObj;
}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));


//-----------task3-------------------------
/*
3.  Напишите функцию которая принимает 3 аргумента, третий аргумент - это объект.
    
    Функция создает объект где ключ это первый аргумент, а значение - второй аргумент
    и добавляет свойство "name" из объекта и возвращает данный новый объект
*/

var myName = { name: 'Oleg' };
let myArr = {};
function addNameToUser(key, value, obj){
    myArr.name = obj.name;
    myArr[key] = value;
    return myArr;
}
console.log(addNameToUser('family', '%Lustenko%', myName));


//----------task4--------------------------
/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz(myNumber) {
    let num;
    if (myNumber%3 == 0 && myNumber%5 == 0){
        num ='FizzBuzz';
    }
    else if (myNumber%3 == 0){
        num = 'Fizz';
    }
    else if (myNumber%5 == 0){
        num = 'Buzz';
        }
    else {
        num = myNumber;
    }
    console.log(num);
}

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'