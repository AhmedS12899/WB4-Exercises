let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Mr. Goodbar", price: 4.00 },
    { product: "Fruit Snacks", price: 5.85 },
    { product: "Skittlez", price: 1.77 },
    { product: "Sour Skittlez", price: 1.77 },
    { product: "Sour Straws", price: 5.25 },
    { product: "Snickers", price: 4.30 }
];
//sort by ascending order names
products.sort(function (a, b) {
    if (a.product < b.product)
        return -1;
    else if (a.product == b.product)
        return 0;
    else
        return 1;
});

//sort by descending price
products.sort(function (a, b){
    if(a.price < b.price)
        return -1;
    else if(a.price == b.price)
        return 0;
    else
        return 1;
});

console.log(products);
console.log(`---------------------------------------------------------`);
console.log(products);