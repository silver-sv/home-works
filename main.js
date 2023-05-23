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
 
