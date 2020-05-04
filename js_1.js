var name = 'Pavel';
console.log(name);
console.log(4/0);
//типы данных

var number = 5;
console.log(number);

var string = 'this is string';
console.log(string);

//var sym = symbol();

//null
//console.log(something);

//undefind
var undefind;
console.log(undefind);

/*var obj = {
    name: "apple",
    color: 'red',
    age: 25,
    isMaried: false
};
console.log(obj.age);
console.log(obj.isMaried);
//console.log(obj["isMaried"]);*/

console.log(4/0);
console.log('safa'/25);


//типы данных
/*делятся на простые и
объекты*/


//простые типы данных
//числа
let numberOne = 25;
let numberTwo = 25.5;
console.log(numberOne);
console.log(numberTwo);

//строка

let stringMain = "dhfsjfhsd";
console.log(stringMain);

console.log(stringMain + " " + numberTwo);

//symbol

//null
//console.log(something);

//undefind
let und;
console.log(und);

//booling = true and false
console.log(5==5);

//объекты
let object = {
    name: "Sanya",
    age: 24,
    isMaried: false
}
console.log(object);
console.log(object.age);
console.log(object.name);
console.log(object["age"]);

//массивы
let mas = [
    'something_1',
    'something_2',
    'something_3'
]
console.log(mas);
console.log(mas[0]);
console.log(mas[2]);



//Динамическая типизация
// - to string
// 1)
let numb = 5;
console.log(typeof(numb));
let str = 'str';
let st = typeof(str);
console.log(st);


console.log(typeof(String(numb)));

//2)Если что то сложить со строкой (number + string) = string  -  конкатенация
//!!!!
console.log(numb + str);
console.log(typeof(numb + str));

// - to number
// 1)
console.log(typeof(Number(str)));

console.log(50+50);


// 2)!!!
console.log(typeof(+ "5"));
console.log(5+'5');
console.log(5 + +"5");

console.log(1234);


// 3)
console.log(typeof(parseInt('dfaf')));


// 0, "", null, undefind, NaN - false.

//Общение с пользователем
//alert("hello");

//let ans= confirm('hello guy 18 есть?');

//console.log(ans);
//let ans= prompt('hello guy 18 есть?', "да");
//console.log(ans);

console.log(250 +250);

let incr = 10,
    decr = 10;


console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(5==4);

console.log(2 == "2");

console.log(2 === "2");

console.log(2 === 2);


// and=&&; or = ||;
console.log(4000);
console.log(!false && true);
console.log(false && true);