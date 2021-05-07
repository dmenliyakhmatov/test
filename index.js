// 'use strict';
// let func = (str) => {
//   const arrStr = str.split('');
//   const result = [];
//   arrStr.forEach((el, index) => {
//     result.push(
//       `${arrStr[index - 1] ? arrStr[index - 1] : ''}${el}${
//         arrStr[index + 1] ? arrStr[index + 1] : ''
//       }`
//     );
//   });
//   return result;
// };
// let func = (str) => {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     result.push(str.substring(i - 1, i + 2));
//   }
//   return result;
// };

// Перед вами переменная, содержащая строку. Напишите код, создащий
// массив, который будет состоять из строк, состоящих из предыдущего,
// текущего и следующего символа строки str.
// var str = 'JavaScript';
// // Ваш код
// function deleteUndef(element) {
//   if (element) {
//     return element;
//   }
//   return '';
// }

// function splitLetter(str) {
//   let result = [];
//   let arrStr = str.split('');
//   arrStr.forEach((el, index) => {
//     let elSum =
//       deleteUndef(arrStr[index - 1]) + el + deleteUndef(arrStr[index + 1]);
//     result.push(elSum);
//   });
//   return result;
// }

// console.log(splitLetter(str));
// foo(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите
// сумму элементов этого массива. Массив, конечно же, может быть
// произвольным. Показать решение.

// let arr = [[1, 2, 3], [4, 5], [6], [5, 8]];

// let getSum = (arr) => {
//   let unionArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j], arr[i]);
//       unionArr.push(arr[i][j]);
//     }
//   }
//   arr.forEach((outElem) => {
//     outElem.forEach((innerElem) => {
//       unionArr.push(innerElem);
//     });
//   });
// };

// let arr = [[1, 2, 3], [4, 5], [6], [5, 8]];
// function getSum(arr) {
//   let unionArray = [].concat(...arr);
//   console.log(unionArray);
// }
// // flat()
// getSum(arr);
// function func() {
//   this.a = 0;
//   // delete this.a;
// }
// // func();

// console.log(window.a);

// function sayHallo() {
//   console.log(this);
//   return `Привет, ${this.name}`;
// }
// function sayBye() {
//   console.log(this);
//   return `${this.name}, пока!`;
// }

// let arrowFunc = () => {
//   console.log(this);
//   return this.age;
// };

// const user1 = {
//   name: 'Дмитрий',
//   age: 26,
//   city: 'NN',
//   sayHallo,
//   sayBye,
//   arrowFunc,
//   arrowFunc2: () => {
//     return this;
//   },
// };

// const user2 = {
//   name: 'Арсений',
//   age: 32,
//   city: 'NN',
//   getName: sayHallo,
//   sayBye,
//   bestFriend: user1,
// };

// console.log(user1.sayBye());
// console.log(user2.sayBye());
// console.log(user2.bestFriend.sayBye());

// user1.sayHallo(); // this = объекту перед точкой
// sayHallo(); // this - глобальный объект(window)
// console.log(user1.arrowFunc());
// console.log(user1.arrowFunc2());

// function sayHallo() {
//   console.log(this);
//   return `Привет, ${user1.name}`;
// }
// function sayBye() {
//   console.log(this);
//   return `${this.name}, пока!`;
// }

// let arrowFunc = () => {
//   console.log(this);
//   return this.age;
// };

// const user1 = {
//   name: 'Дмитрий',
//   age: 26,
//   city: 'NN',
//   sayHallo,
//   sayBye() {
//     return `${this.name}, пока!`;
//   },
//   arrowFunc,
//   arrowFunc2: () => {
//     return this;
//   },
// };

// const user2 = {
//   name: 'Арсений',
//   age: 32,
//   city: 'NN',
//   sayHallo,
//   sayBye,
//   bestFriend: user1,
// };

// console.log(user2.sayHallo());
// Создать объект который будет описывать любой населенный пункт (на ваш выбор).
// Объект должен содержать свойства описывающие: название и численность. Так же
// объект должен содержать два метода: первый должен возвращать название города, а
// второй должен возвращать численность.
// let city = {
//   title: 'NN',
//   population: 1300000,
//   getTitle() {
//     return this.title;
//   },
//   getPopulation() {
//     return (() => {
//       return this.population;
//     })();
//   },
//   setTitle(newTitle) {
//     this.title = newTitle;
//   },
// };

// console.log(city.title);
// city.setTitle('Москва');
// console.log(city.title);

// const obj = {
//   name: 'Дмитрий',
//   friend: {
//     name: 'Владимир',
//     getName() {
//       function innerGetName() {
//         console.log(this.name);
//       }
//       innerGetName();
//     },
//   },
// };

// obj.friend.getName();

// function name() {
//   var foo = 'sdsd';
// }

// if (true) {
//   var bar = 'example';
// }
// console.log(bar);

// console.log(undefined === null);

// !(null || !”апельсин” && true)

// !(null || !true && true)

// !(null || false && true)

// !(null || false)

// !(false)

// true

// function getSum(a, b) {
//   return a + b;
// }
// function getDouble(c) {
//   return c * 2;
// }
// let sum = getSum(2, 3);
// let double = getDouble(sum);
// console.log(double);

// let str = 'JavaScript';

// console.log(str[str.length - 1].toLowerCase());

// let obj = {
//   a: 'Hello',
// };

// obj = {
//   a: 'Bye',
// };

// let obj = {
//   foo: 'Hello',
//   bar: 'Bye',
// };

// let obj_2 = { ...obj, bar: 'How are you?' };
// obj_2.foo = 'Like';
// console.log(obj);
// console.log(obj_2);

// let a = [1, 2];
// let b = [1, 5];

// let f = (a, b) => {
//   let result = [];
//   a.forEach((el) => {
//     if (b.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };

// console.log(f(a, b));

// let str =
//   'Предложение1 sdfdsfds. Предложение2s dfsdf sdaf sda.sdaa Предложение3sd fsd sdf. Предложение4.';

// let arr2 = str.split('.').slice(0, 2).join('.') + '...';

// console.log(arr2);

// let numbers1 = [10, 8, 5, 7];
// let numbers2 = [11, 13, 17];

// let sum = (numbers1, numbers2) => {
//   let numbers = [...numbers1, ...numbers2];
//   return numbers.reduce((sum, current) => sum + current, 0);
// };

// console.log(sum(numbers1, numbers2));

// let a = [9, 2, 3, 4];
// let b = [2, 2, 3, 3, 1, 2];
// let func = (a, b) => {
//   if (a.length < b.length) {
//     return a.map((el, index) => el + b[index]);
//   } else {
//     return b.map((el, index) => el + b[index]);
//   }
// };

// console.log(func(a, b));

// let a = [9, 2, 3, 4];
// let b = [2, 2, 3, 3, 1, 2];
// let func = (a, b) => {
//   let result = [];
//   for (let i = 0; true; i++) {
//     if (!(a[i] && b[i])) {
//       break;
//     }
//     result.push(a[i] + b[i]);
//   }
//   return result;
// };

// console.log(func(a, b));
// let x = 2;

// let func = (a) => {
//   return a + x;
// };

// console.log(func(2, 2));
// console.log(func(2, 2));
// console.log(func(2, 2));

// x = 8;

// console.log(func(2));

// let a = 1;
// debugger;
// function func() {
//   let a = 1;
//   debugger;
//   function func_inner() {
//     let b = 4;
//     console.log(a);
//     debugger;
//   }
//   func_inner();
// }

// func();
// function funcDec() {
//   dsdf
// }
// let funcExp;

// if (true) {
//   funcExp = function () {
//     console.log('funcExp');
//   };
// } else {
//   funcExp = function () {
//     console.log('funcDecElse');
//   };
// }
// funcExp();

// do {
//   console.log('dodo');
// } while (false);

// let clock = "время на часах, что доступны отовсюду";

// function street() {
//  //scope: street

//  alert(clock); //покажет "время на часах, что доступны отовсюду"

//  function building() {
//   //scope: building

//   let clock = "время на настенных часах в холле";

//   alert(clock); //покажет "время на настенных часах в холле"

//   function office() {
//    //scope: office

//    let clock = "время на настольные часах";

//    alert(clock); //покажет "время на настольные часах"
//   }
//  }
// }

// console.log(this);

// function sum(a, b) {
//   console.log(this);
//   this.myNumber = 20;
//   return a + b;
// }

// console.log(sum(15, 16)); // => 31
// // console.log(window.myNumber); // => 20

// sum();
// const obj = {
//   sum,
// };

// let calc = {
//   num: 0,
//   increment: () => {
//     console.log(this);
//     this.num += 1;
//     return this.num;
//   },
// };

// let calc_2 = {
//   num: 4,
//   increment: calc.increment,
// };

// console.log(calc.increment());
// // console.log(calc.increment());
// // console.log(calc_2.increment());
// const arrow = () => {
//   console.log(this);
// };
// let obj = {
//   method_2() {
//     console.log(this);
//   },
//   method: function () {
//     // console.log(this);
//     this.method_2();
//     // arrow();
//   },
// };

// obj.method();

// const obj = {
//   name: 'Дмитрий',
//   getName() {
//     // this = obj;

//     //this = obj;
//     const bar = () => {
//       console.log(this.name);
//     };
//     bar();
//   },
// };
// obj.getName(); // this = obj;

// const obj = {
//   name: 'Дмитрий',
//   getName() {
//     console.log(this.name);
//   },
// };
// const obj2 = {
//   // getName: obj.getName,
//   getName() {
//     console.log(this.name);
//   },
// };
// obj.getName();
// obj2.getName();

// this = window

// var name = 'Дмитрий';

// const getName = () => {
//   console.log(this.name, this);
// };

// const obj = {
//   name: 'Дмитрий',
//   getName,
// };
// const obj2 = {
//   getName,
// };
// obj.getName();
// obj2.getName();

// const obj = {
//   name: 'Дмитрий',
//   friend: {
//     name: 'Владимир',
//     getName() {
//       return () => {
//         console.log(this.name);
//       };
//     },
//   },
// };
// console.log(obj.friend.getName()());
// let func = obj.friend.getName();

// func();

// let city = {
//   name: 'Нижний Новгород',
//   population: 1300000,
//   getName() {
//     return this.name;
//   },
//   getPopulation() {
//     return this.population;
//   },
//   setName(value) {
//     this.name = value;
//   },
//   setPopulation(value) {
//     this.population = value;
//   },
// };

// let user1 = { name: 'Вася' };
// let user2 = { name: 'Петя' };

// function say(phrase) {
//   return this.name + ' ' + phrase;
// }

// say('Привет');
// say.call(user2, 'И тебе привет'); // Петя : И тебе привет

// let result = say.call(user1, 'Привет'); // Вася : Привет

// console.log(result);

// let boundSay = say.bind(user1);
// let boundSay2 = say.bind(user2);

// console.log(boundSay2('Привет'));
// console.log(boundSay('Пока'));

// let city = {
//   name: 'Нижний Новгород',
//   population: 1300000,
//   getName() {
//     return this.name;
//   },
//   getPopulation() {
//     return this.population;
//   },
//   setName(value) {
//     this.name = value;
//   },
//   setPopulation(value) {
//     this.population = value;
//   },
// };

// let city_2 = {
//   name: 'Инта',
//   population: 25000,
// };

// console.log(city.getName.call(city_2));
// console.log(city.getPopulation.call(city_2));
// let boundSetName = city.setName.bind(city_2);
// let boundSetPopulation = city.setPopulation.bind(city_2);
// // city.setName.call(city_2, 'Москва');
// // city.setPopulation.call(city_2, 13000000);
// boundSetName('Москва');
// boundSetPopulation(13000000);
// console.log(city_2);

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(1, 2, 3));

// function currySum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(currySum(1)(2)(3));

// const getDiscount = (price, percent) => {
//   return price * percent;
// };

// function getDiscountCurry(percent) {
//   return function (price) {
//     debugger;
//     return percent * price;
//   };
// }

// const twentyPercentDisc = getDiscountCurry(0.8);

// const discontPhone = twentyPercentDisc(20000);
// const discontPhone2 = twentyPercentDisc(30000);
// const discontPhone3 = twentyPercentDisc(60000);
// const discontPhone5 = twentyPercentDisc(40000);

// console.log(discontPhone);

// const handleClick = (value) => (event) => {
//   //  код
// };

// function example() {
//   let closure = 100;
//   debugger;
//   return function (b) {
//     debugger;
//     return function () {
//       debugger;
//       return closure + b;
//     };
//   };
// }
// const closureExample = example();
// closureExample(100)(); // 200

// Используя каррирование написать функцию которая будет вычислять объём
// параллелепипеда.

// function getValue(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// console.log(getValue(1)(2)(3));

// const getValueHeight1 = getValue(1);
// const getValueHeight1Wight2 = getValueHeight1(2);

// const getValueHeight1Wight2_ = getValue(1)(2);

// getValueHeight1(3);

// function getValueHeight10(a) {
//   let height = 10;
//   return function (b) {
//     return a * b * height;
//   };
// }
// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password === 'rockstar') ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk, user.loginFail);

// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;
// alert(sayHi.test);
// let bound = sayHi.bind({
//   name: 'Вася',
// });

// alert(bound.test); // что выведет? почему?

function askPassword(ok, fail) {
  let password = 'sds';
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'Валентин',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));asdsadasdasd

// const sum = (a, b, c) => a + b + c;

function currySum(a) {
  return function (b) {
    return function (c) {
      // return sum(a, b, c);
    };
  };
}
console.log(currySum(1)(2)(3));
