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
let lessThan4 = [];
let mnm = [];
for(let i = 0; i < products.length; i++){
    //which candies cost less than $4.00
    if(products[i].price < 4){
        lessThan4.push(products[i].product);
    }
    // Which candies has "M&M" its name?
    if(products[i].product.indexOf("M&Ms") != -1){
        mnm.push(products[i].product);
    }
    // Do we carry "Swedish Fish"?
    if(products[i].product.indexOf("Swedish Fish") != -1){
        console.log(products[i]);
    }
}
console.log(`Candies that are less than $4.00: \n${lessThan4}`);
console.log(`Candies that contain M&Ms are: ${mnm}`);
