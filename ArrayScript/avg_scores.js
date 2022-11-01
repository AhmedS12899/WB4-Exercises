"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
    total += array[i];
    }
    return (total/array.length).toFixed(2);
}

console.log(`Average of myScores is ${getAverage(myScores)}`);
console.log(`Average of yourScores is ${getAverage(yourScores)}`);
