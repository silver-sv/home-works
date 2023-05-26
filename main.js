//
console.log("a" < "b" < "c");

// 
let x = 1;
let y = 2;

let res1 = "1" + "2";
console.log(res1);
console.log(typeof(res1));

let res2 = ("true" + 2);
console.log( res2);
console.log(typeof(res2));

let res3 = 1 < 2;
console.log (res3);
console.log(typeof(res3));

let res4 ="x" * 2;
console.log (res4);
console.log(typeof(res4));

// 
let isAdult = prompt("Скільки вам років?"); {
    if (isAdult >= 18 ) {
        alert('Ви досягли повнолітнього віку');
    } else {
        alert('Ви ще надто молоді');
    }
}

// 
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = arr.filter(function(elem, index){
    return elem !== 5;
})
console.log(data);

// for (let elem of arr) {
//     if (data[elem] === undefined){
//         data[elem] = 1;
//     }
//     else{
//         data[elem]++;
//     }
// }
// console.log(data);

// 
const side1 = parseInt(prompt('side1: 3'));
const side2 = parseInt(prompt('side2: 4'));
const side3 = parseInt(prompt('side3: 5'));
const s =(side1 + side2 + side3)/2;
console.log(s);
    
areaValue = Math.sqrt( s * (s - side1) * (s - side2) * (s - side3) );
console.log( areaValue);
    
// 
function calc(A, B, Op){
    switch (Op){
        case 1: return A - B;
        case 2: return A * B;
        case 3: return A / B;
        default: return A + B;
        
    }
}
console.log(calc(3, 4, 5));

// 

function findUnique(array) {
    return new Set(array).size !== array.length;
}
 
// // // // // //  task-3 // // // // // // 


const arr1 = [5, 3, 4, 5,6,7,3];
const sortArr1 = arr1.filter(function(item, pos){
    return arr1.indexOf(item) == pos;
})
console.log(sortArr1);

// 

let arr2 = [2, 9];
function fa(n) {
    let createArray = [];
    for (let i = 2; i <= n; i++)
    createArray.push(i)
    return createArray;
}
console.log(fa(9));
   
// 

let a = 1;
let b = 5;
let resArr = [];
function createArray(a, b) {
    for(let a = 1; a <=b; a++){
       for (i = 0; i < a - 1 + 1; i++){
        resArr.push(a);
       }
    }
    return resArr;
}
console.log(resArr);

// 

var randArray = [];
for ( i = 0; i < 5; i++ ) {
    randArray.push( Math.round( Math.random() * 499 ) + 1);
} 
console.log(randArray);

// 

const  arr3 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

function newArrays (arr3) {
  const arr4 = [];
  const arr5 = [];

  const newArr3 = arr3.flat();

  for (const i = 0; i < newArr3.length; i++) {
    const el = newArr3[i];
    if(typeof el === "number") {
        arr4.push(el);
    }
    else if (typeof el === "string") {
        arr5.push(el);
    }
  }
   
  console.log(arr4);
  console.log(arr5);
}


// 
const date = new Date();
const currentHour = date.getHours();

    if (currentHour >= 23 && currentHour <= 5) {
        alert ('Доброї ночі');
    }
    else if (currentHour >= 5 && currentHour <=11) {
        alert ('Доброго ранку');
    }
    else if (currentHour >= 11 && currentHour <= 17) {
        alert ('Доброго дня');
    }
    else if (currentHour >= 17 && currentHour <= 23) {
        alert  ('Доброго вечора');
    }
 
switch(true) {
    case (currentHour >= 23 && currentHour <= 5):
        alert ('Доброї ночі');
        break;
    case (currentHour > 5 && currentHour <= 11):
        alert ('Доброго ранку');
        break;
    case (currentHour > 11 && currentHour <= 17):
        alert ('Доброго дня');
        break
    case (currentHour > 17 && currentHour <= 23):
        alert  ('Доброго вечора');     
        break
    }
 

    // 