"use strict";

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

let subTotal = 0;
for(let i = 0; i < lunch.length;i++){
    subTotal += lunch[i].price;
}

let tax = (subTotal*.08);
let tip = (subTotal*.18);
let totalDue = subTotal + tax + tip;
console.log(`Subtotal is: ${subTotal.toFixed(2)} \nTax is: ${tax.toFixed(2)} \nTip is: ${tip.toFixed(2)} \nTotal due is: ${totalDue.toFixed(2)}`);