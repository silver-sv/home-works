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


  // 

  function propsCount(currentObject){
    return Object.keys(currentObject).length;
  }

// 

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