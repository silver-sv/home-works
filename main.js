// //
// console.log("a" < "b" < "c");

// // 
// let x = 1;
// let y = 2;

// let res1 = "1" + "2";
// console.log(res1);
// console.log(typeof(res1));

// let res2 = ("true" + 2);
// console.log( res2);
// console.log(typeof(res2));

// let res3 = 1 < 2;
// console.log (res3);
// console.log(typeof(res3));

// let res4 ="x" * 2;
// console.log (res4);
// console.log(typeof(res4));

// // 
// let isAdult = prompt("Скільки вам років?"); {
//     if (isAdult >= 18 ) {
//         alert('Ви досягли повнолітнього віку');
//     } else {
//         alert('Ви ще надто молоді');
//     }
// }

// // 
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let data = arr.filter(function(elem, index){
//     return elem !== 5;
// })
// console.log(data);

// // for (let elem of arr) {
// //     if (data[elem] === undefined){
// //         data[elem] = 1;
// //     }
// //     else{
// //         data[elem]++;
// //     }
// // }
// // console.log(data);

// // 
// const side1 = parseInt(prompt('side1: 3'));
// const side2 = parseInt(prompt('side2: 4'));
// const side3 = parseInt(prompt('side3: 5'));
// const s =(side1 + side2 + side3)/2;
// console.log(s);
    
// areaValue = Math.sqrt( s * (s - side1) * (s - side2) * (s - side3) );
// console.log( areaValue);
    
// // 
// function calc(A, B, Op){
//     switch (Op){
//         case 1: return A - B;
//         case 2: return A * B;
//         case 3: return A / B;
//         default: return A + B;
        
//     }
// }
// console.log(calc(3, 4, 5));

// // 

// function findUnique(array) {
//     return new Set(array).size !== array.length;
// }
 
// // // // // // //  task-3 // // // // // // 


// const arr1 = [5, 3, 4, 5,6,7,3];
// const sortArr1 = arr1.filter(function(item, pos){
//     return arr1.indexOf(item) == pos;
// })
// console.log(sortArr1);

// // 

// let arr2 = [2, 9];
// function fa(n) {
//     let createArray = [];
//     for (let i = 2; i <= n; i++)
//     createArray.push(i)
//     return createArray;
// }
// console.log(fa(9));
   
// // 

// let a = 1;
// let b = 5;
// let resArr = [];
// function createArray(a, b) {
//     for(let a = 1; a <=b; a++){
//        for (i = 0; i < a - 1 + 1; i++){
//         resArr.push(a);
//        }
//     }
//     return resArr;
// }
// console.log(resArr);

// // 

// var randArray = [];
// for ( i = 0; i < 5; i++ ) {
//     randArray.push( Math.round( Math.random() * 499 ) + 1);
// } 
// console.log(randArray);

// // 

// const  arr3 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

// function newArrays (arr3) {
//   const arr4 = [];
//   const arr5 = [];

//   const newArr3 = arr3.flat();

//   for (const i = 0; i < newArr3.length; i++) {
//     const el = newArr3[i];
//     if(typeof el === "number") {
//         arr4.push(el);
//     }
//     else if (typeof el === "string") {
//         arr5.push(el);
//     }
//   }
   
//   console.log(arr4);
//   console.log(arr5);
// }


// // 
// const date = new Date();
// const currentHour = date.getHours();

//     if (currentHour >= 23 && currentHour <= 5) {
//         alert ('Доброї ночі');
//     }
//     else if (currentHour >= 5 && currentHour <=11) {
//         alert ('Доброго ранку');
//     }
//     else if (currentHour >= 11 && currentHour <= 17) {
//         alert ('Доброго дня');
//     }
//     else if (currentHour >= 17 && currentHour <= 23) {
//         alert  ('Доброго вечора');
//     }
 
// switch(true) {
//     case (currentHour >= 23 && currentHour <= 5):
//         alert ('Доброї ночі');
//         break;
//     case (currentHour > 5 && currentHour <= 11):
//         alert ('Доброго ранку');
//         break;
//     case (currentHour > 11 && currentHour <= 17):
//         alert ('Доброго дня');
//         break
//     case (currentHour > 17 && currentHour <= 23):
//         alert  ('Доброго вечора');     
//         break
//     }
 

    // // // // // // //  task-4 // // // // // //


//     function sumSliceArray(arr, first, second){
//         try{
//           if (!(typeof first == 'number') || !(typeof second == 'number')) {
//               throw new Error ("not a number");
//           }
//           else if(first > arr.length || second > arr.length){
//               throw new RangeError("Numbers from arguments are bigger then array length");
//           }
//           else{
//               console.log(arr[first] + arr[second]);
//           }
//         }
//         catch (error){
//           console.log(error.stack);
//         }
          
//       }
//        sumSliceArray([1, 3, 5] , "ab", 3);
//       // 
  
  
//       let userName = prompt("Enter your name");
//       let userAge = parseInt(prompt("Enter your age"));
//       let userStatus = prompt("Enter your status (admin, moderator, user)");
      
//       function checkAge (userName, userAge, userStatus){
//           try{
//               if (isNaN(userAge)){
//                   throw new TypeError("Invalid age. You entered not a number is age field");
//               }
//               else if (userName === "" || userAge === 0 || userStatus === ""){
//                   throw new Error("The field is empty! Enter necessary informat");
//               }
//               else if (userStatus !== "admin" && userStatus !== "moderator" && userStatus !== "user"){
//                   throw new EvalError("Invalid status. Enter valid status (admin, moderator, user)");
//               }
//               else if (userAge < 18 || userAge >70){
//                   throw new RangeError("Your age is out of range");
//               }
//               else {
//                   alert("You can continue watching film");
//               }
//            }
//            catch (error){
//               console.log(error.stack);
//            }
//       } 
//        checkAge(userAge, userName, userStatus);
      
         
//   //    
  
//      function calcRectangleArea(width, height){
//       try{
//           if (typeof width !== "number" || typeof height !== "number"){
//               throw new TypeError("Wrong data type! Arguments should be only numbers.");
//           }else{
//               console.log(width * height);
//           }
//       }catch (error) {
//           console.log(error.stack);
//       }
//      }
//       calcRectangleArea(2, "a");
  
//   // 
  
//   class MonthException extends Error{
//       constructor(message){
//           super(message);
//           this.name = "MonthExceptio";
//           this.message = message;
//       }
//   }
//   let months = ["January", "February", "March", "April", "May", "June","Jule", "Augast", "September", "October", "November", "December" ];
  
//   function shouwMonthName(month) {
//       try {
//           if (month > 12 || month < 1) {
//               throw new MonthException("Incorrect month number");
//           }
//           else if (typeof month !=="number"){
//               throw new MonthException("Incorrect provided date type");
//           }
//           else {
//               console.log(months[month - 1]);
//           }
//       } 
//       catch (error) {
//           console.log(error.stack);
//       }
//   }
//     shouwMonthName(5);
     
    
//   //   
  
//   function showUser(id) {
//        if(id < 0) {
//           throw new Error ('ID must not be negative:n' + id);
//        }
//        return {id};
//   }
   
//   function showUsers(ids) {
//       let res = [];
//       ids.map(function (id) {
//           try {
//               let person = showUser(id);
//               res.push(person);
//           }
//           catch (exception) {
//               console.log(exception.message);
//           }
//       });
//       return res;
//   }
//   showUsers([7, -12, 44, 22]);
  

 // // // // // // //  task-5 // // // // // //

 class Circle {
    constructor(cx, cy, r) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
    }
    static computeL(r) {
      return r * Math.PI * 2;
    }
    static create(cx, cy, r) {
      const c = new Circle(cx, cy, r);
      return c;
    }
    copy() {
      return Circle.create(this.cx, this.cy, this.r);
    }
    isIn(x, y) {
      return Math.sqrt((x - this.cx) * 2 + (y - this.cy) * 2) < this.r;
    }
    toString() {
      return JSON.stringify(this);
    }
  }
  const a = new Circle(5, 5, 8);
  const b = a.copy();
  const c = Circle.create(5, 5, 8);
  console.log(c.isIn(5, 12.5));
  console.log(Circle.computeL(b.r));
  console.log(c.toString())


//   // 

  function propsCount(currentObject){
    return Object.keys(currentObject).length;
  }

// // 

  class Person {
    constructor(name, surname){
      this.name = name;
      this.surname = surname;
    }
    getFullName(){
      return `${this.surname} ${this.name}`;
    }
  } 
  class Student extends Person {
    constructor(name, surname, year){
      super(name, surname);
      this.year = year;
    }
    getFullName(middleName){
      return `${this.surname} ${this.name} ${middleName}`;
    }
    getCourse(){
      const currentYear = new Date().getFullYear();
      return currentYear - this.year + 1;
    }
  }


  // 

  class Marker{
    #color;
    #inkLevel;
    #inkPerSymbol;
    static maxInkLevel = 100;
    static inkPerSymbol = 10;

    constructor(color){
      this.#color = color;
      this.#inkLevel = Marker.maxInkLevel;
    }
    get color(){
      return this.#color;
    }
    get ink(){
      return this.#inkLevel;
    }
    _setInk(inkLevel){
      this.#inkLevel = inkLevel;
    }
    print(text){
      let index = 0;
      while (this.#inkLevel >= Marker.inkPerSymbol && index < text.length){
        let letter = text[index];
        console.log(text[index]);
        if (letter.trim() !== ""){
          this.#inkLevel -= Marker.inkPerSymbol;
        }
        index++;
      }
    }
  }
  
  class RefillableMarker extends Marker{
    refill(){
      this._setInk(Marker.maxInkLevel);
    }
  }

  // 

  class Worker{
    #fullName;
    #dayRate;
    #workingDays;
    #experience;

    constructor(fullName, dayRate, workingDays, experience){
      this.#fullName = fullName;
      this.dayRate = dayRate;
      this.#workingDays = workingDays;
      this.#experience = experience;
    }
    getSalary() {
      return this.#dayRate * this.#workingDays;
    }
    getSalaryWithExperience(){
      return this.#dayRate * this.#workingDays * this.#experience;
    }
    get fullName(){
      return this.#fullName;
    }
    set fullName(value){
      this.#fullName = value;
    }
    get dayRate(){
      return this.#dayRate;
    }
    set dayRate(value){
      this.#dayRate = value;
    }
    get experience(){
      return this.#experience;
    }
    set experience(value){
      this.#experience = value;
    }
    get workingDays(){
      return this.#workingDays;
    }
    addWorkingDays(n){
      this.#workingDays += n;
    }

    static sortBySalary(workers){
      return [...workers].sort((a, b) => a.getSalary() - b.getSalary());
    }
  } 

 // // // // // // //  task-6 // // // // // //

 1

const list = document.getElementById("list")
const items = list.getElementsByTagName('li');
const firstItem = items[0].textContent;
  const lastItem = items[items.length - 1].textContent;
  const secondItem = items[1].textContent;
  const fourthItem = items[3].textContent;
  const thirdItem = items[2].textContent;

alert(firstItem);
alert(lastItem);
alert(secondItem);
alert(fourthItem);
alert(thirdItem);



2

document.body.children[0].style.backgroundColor = "lightgreen";
document.getElementById("myDiv").children[0].style.fontWeight = "700";
document.getElementById("myDiv").children[1].style.color = "red";
document.getElementById("myDiv").children[2].style.textDecoratin = "underline";
document.getElementById("myDiv").children[3].style.fontStyle = "italic";
document.getElementById("myList").style.listStylen = "none";
document.getElementById("myList").style.display = "flex";
document.getElementsByTagName("span")[0].style.display = "none";


3


let body = document.createElement('body');
let main = document.createElement('main');
main.setAttribute('class', 'mainClass check item');
let div = document.createElement('div');
div.setAttribute('id', 'myDiv');
let p = document.createElement('p');
let textNode = document.createTextNode('First paragraph');

p.appendChild(textNode);

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);

4

const fullName = document.getElementById('fullName');
const phoneInput = document.getElementById('phoneInput');
const birthdayInput = document.getElementById('birthdayInput');
const emailInput = document.getElementById('emailInput');

const btn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const fullNameValue = fullName.value;
  const phoneInputValue = phoneInput.value;
  const birthdayInputValue = birthdayInput.value;
  const emailInputValue = emailInput.value;

  outBlock.textContent = `
  ПІБ: ${fullNameValue},
  Номер телефону: ${phoneInputValue},
  Дата народження: ${birthdayInputValue},
  Електронна пошта: ${emailInputValue}`;

  fullName.value = "";
  phoneInput.value = "";
  birthdayInput.value = "";
  emailInput.value = "";
});
 

// 5

const circle = document.querySelectorAll(".circle");
let circleValue;

const newCircle = Array.from(circle).map((item) => {
  circleValue = item.getAttribute("data-anim");
  item.classList.add(circleValue);
});

circle.forEach((item) => {
  const animation = item.classList.contains(circleValue);
  console.log(`Animation applied: ${animation}`);
});


 6

let price = 189.99;
const colorButtons = document.querySelectorAll(".color");
const priceElement = document.querySelector(".price h1");

function updatePrice (newPrice){
  priceElement.textContent = newPrice.toFixed(2);
}
colorButtons.forEach((button) => {
  button.addEventListener('click', function(){
    const selectedColor = this.getAttribute('color');
    if (selectedColor === 'blue'){
      price = 189.99;
    }
    else if (selectedColor === 'red'){
      price = 199.99;
    }
    else if (selectedColor === 'green'){
      price = 209.99;
    }
    else if (selectedColor === "orange"){
      price = 219.99;
    }
    else if (selectedColor === 'black'){
      price = 229.99;
    }
    updatePrice(price);
  });
});


// // // // // // //  task-7 // // // // // //

 1


const myWindow = window.open('', '', 'width=300, height=300');
setTimeout(function() {
  myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function() {
  myWindow.moveTo(200, 200);
}, 4000);

setTimeout(function() {
  myWindow.close();
}, 6000);


2

function changeCSS() {
  
    x.style.color = "orange";
    x.style.fontSize = "20px";
    x.style.fontFamily = "Comic Sans MS";
  }

  btn.addEventListener("click", function(event){
    event.target.style
  })

3

  
  document.getElementById("button1").addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
  });

  document.getElementById("button2").addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "pink";
  });

  const button3 = document.getElementById("button3");
  button3.addEventListener("mousedown", function() {
    document.body.style.backgroundColor = "brown";
  });
  button3.addEventListener("mouseup", function() {
    document.body.style.backgroundColor = "white";
  });

  const link = document.getElementById("link");
  link.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "yellow";
  });
  link.addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "white";
  });

4
  
   const select = document.getElementById("mySelect");
   const deleteButton = document.getElementById("deleteButton");

   deleteButton.addEventListener("click", function() {
    
     const selectedOption = select.options[select.selectedIndex];
     select.removeChild(selectedOption);
   });

5

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("I was pressed!");
});

button.addEventListener("mouseover", function() {
  alert("Mouse on me!");
});

button.addEventListener("mouseout", function() {
  alert("Mouse is not on me!");
});

// // // // // // //  task-8 // // // // // //

1

const upperCase = (str) =>{
  const successString = "String's starts with uppercase character";
  const failString = "String's not starts with uppercase character";
  const regex = /^[A-Z]/;
  return regex.test(str) ? successString : failString
}

// 

2

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// 

3

let regex = /(\S+)\s+(\S+)/;

// 

4

let regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

// 

5

function checkEmail(email) {
  let pattern = /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
}

// 

6

function checkLogin(login){
  let loginPattern = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/;
  let isValid = loginPattern.test(login);
  let numbers = login.match(/[-+]?[0-9]*\.?[0-9]+/g) || [];
  return {isValid, numbers}
}

// 
// // // // // // //  task-9 // // // // // //

 1

let headers = document.querySelectorAll("h2.head");

headers.forEach(function(header) {
  header.style.backgroundColor = "green";

let innerElements = header.querySelectorAll(".inner");
  
  innerElements.forEach(function(inner) {
    inner.style.fontSize = "35px";
  });
});
 
// 

2

$("a[href^='https://']").attr('target', '_blank');

// 

3

$('h3 +div').each(function(){
  const $divElems = $(this);
  console.log(this);
  $divElems.prev().before($divElems);
});

// 

4

const $checkboxes = $(':checkbox');
$checkboxes.on('click', function(){
  if ($(':checkbox:checked').length == 3){
    $checkboxes.attr('disabled', 'true');
  }
});

// 


// // // // // // //  task-10 // // // // // //
1

let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

// 

2

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// 

3

function mul(...args) {
  let result = 1;

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      result *= args[i];
    }
  }

  return result;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// 

4

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  }
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return () => {
      this.result = callback();
    };
  }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// 

5

function mapBuilder(keysArray, valuesArray) {
  if (keysArray.length !== valuesArray.length) {
    throw new Error('The length of keysArray and valuesArray must be the same.');
  }

  let map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }

  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"

// 

6

let arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (num) {
    return function () {
      console.log(num);
    };
  })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2